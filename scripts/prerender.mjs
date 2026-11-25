/**
 * Post-build pre-rendering.
 *
 * Runs after the client build (dist/) and the server build (dist-ssr/). For
 * every page it writes dist/<path>/index.html containing:
 *   - the page's real HTML, rendered by React, so crawlers and link previews
 *     read the full content and the browser attaches to it without re-drawing;
 *   - the page's title, description, canonical, social and structured-data
 *     tags from src/seo (the same data the browser uses on navigation);
 *   - preload links for the page's own code chunk.
 * It also writes dist/404.html (served by Netlify with a 404 status for any
 * unknown URL) and dist/sitemap.xml, both from the same route list.
 *
 * Usage: called by `npm run build`.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const manifestPath = path.join(distDir, '.vite', 'manifest.json');

const HEAD_PATTERN = /<!--head-meta-->[\s\S]*?<!--\/head-meta-->/;
const ROOT_TAG = '<div id="root"></div>';

function fail(message) {
  console.error(`\nPre-render failed: ${message}\n`);
  process.exit(1);
}

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
if (!HEAD_PATTERN.test(template)) fail('index.html is missing the <!--head-meta--> markers.');
if (!template.includes(ROOT_TAG)) fail(`index.html is missing ${ROOT_TAG}.`);
if (!fs.existsSync(manifestPath)) fail('dist/.vite/manifest.json not found. Is build.manifest on?');

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const entryKey = Object.keys(manifest).find((key) => manifest[key].isEntry);

// Scripts and stylesheets index.html already loads for the entry; no need to
// link them again.
const alreadyLoaded = new Set();
(function markLoaded(key) {
  const chunk = manifest[key];
  if (!chunk || alreadyLoaded.has(chunk.file)) return;
  alreadyLoaded.add(chunk.file);
  (chunk.css ?? []).forEach((css) => alreadyLoaded.add(css));
  (chunk.imports ?? []).forEach(markLoaded);
})(entryKey);

/** <link> tags for a page's chunk, the shared chunks it imports, and its CSS. */
function preloadTags(page) {
  const key = `src/pages/${page}.tsx`;
  if (!manifest[key]) fail(`no chunk for ${key} in the build manifest.`);
  const scripts = [];
  const styles = [];
  const seen = new Set();
  (function collect(k) {
    const chunk = manifest[k];
    if (!chunk || seen.has(k)) return;
    seen.add(k);
    if (!alreadyLoaded.has(chunk.file)) scripts.push(chunk.file);
    (chunk.css ?? []).forEach((css) => {
      if (!alreadyLoaded.has(css) && !styles.includes(css)) styles.push(css);
    });
    (chunk.imports ?? []).forEach(collect);
  })(key);
  return [
    ...styles.map((file) => `<link rel="stylesheet" crossorigin href="/${file}">`),
    ...scripts.map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`),
  ].join('\n    ');
}

function buildHtml(headHtml, bodyHtml, preload) {
  return template
    .replace(HEAD_PATTERN, () => headHtml)
    .replace(/\n\s*<\/head>/, () => `${preload ? `\n    ${preload}` : ''}\n  </head>`)
    .replace(ROOT_TAG, () => `<div id="root">${bodyHtml}</div>`);
}

function outputFile(routePath) {
  return routePath === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, routePath, 'index.html');
}

function escapeXml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// React and React Router are loaded from node_modules at this point; use their
// production builds, like the browser bundle does.
process.env.NODE_ENV = 'production';
const server = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

let pages;
try {
  pages = server.getPrerenderPages();
} catch (err) {
  fail(err.message);
}

for (const page of pages) {
  let body;
  try {
    body = await server.render(page.path);
  } catch (err) {
    fail(`${page.path} threw while rendering:\n${err?.stack ?? err}`);
  }
  if (!body.trim()) fail(`${page.path} rendered nothing.`);
  const file = outputFile(page.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, buildHtml(page.headHtml, body, preloadTags(page.page)));
  console.log(`  ✓ ${path.relative(root, file)}`);
}

// 404 page. Netlify serves dist/404.html, with a 404 status, for unknown URLs.
const notFound = server.getNotFoundPage();
const notFoundBody = await server.render(notFound.path);
fs.writeFileSync(
  path.join(distDir, '404.html'),
  buildHtml(notFound.headHtml, notFoundBody, preloadTags(notFound.page)),
);
console.log('  ✓ dist/404.html');

// sitemap.xml, from the same list. Pages marked noindex are left out.
const urls = pages
  .map((page) => page.sitemap)
  .filter(Boolean)
  .map((entry) =>
    [
      '  <url>',
      `    <loc>${escapeXml(entry.loc)}</loc>`,
      entry.lastmod ? `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : null,
      entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
      entry.priority !== undefined ? `    <priority>${entry.priority.toFixed(1)}</priority>` : null,
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n'),
  );
fs.writeFileSync(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
);
console.log(`  ✓ dist/sitemap.xml (${urls.length} URLs)`);

// The server bundle and manifest are build tools, not part of the site.
fs.rmSync(ssrDir, { recursive: true, force: true });
fs.rmSync(path.join(distDir, '.vite'), { recursive: true, force: true });

console.log(`\nPre-rendered ${pages.length} pages and the 404 page.`);
