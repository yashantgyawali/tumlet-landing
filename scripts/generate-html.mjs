/**
 * Post-build pre-rendering script.
 *
 * After `vite build`, run this script to generate a static index.html for
 * every route.  Each file gets the correct <title>, <meta description>,
 * Open Graph, Twitter, and canonical tags injected into the <head>.
 *
 * Netlify serves a directory's index.html before applying the
 * `/* /index.html 200` catch-all rewrite, so Google receives unique,
 * accurate meta for every URL without any SSR infrastructure.
 *
 * Usage (called automatically by the `build` script in package.json):
 *   node scripts/generate-html.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// ─── Route metadata ───────────────────────────────────────────────────────────
// Keep this list in sync with App.tsx routes and public/sitemap.xml.
// The homepage (/) is already dist/index.html — no entry needed here.

const routes = [
  {
    path: '/about',
    title: 'About Us | Tumlet — Nepali Board Game Company',
    description:
      'Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.',
    ogImage: 'https://tumlet.com/tumlet-logo.png',
  },
  {
    path: '/bluff-momo-rules',
    title: 'Bluff Momo Rules | How to Play the Nepali Card Game',
    description:
      "Learn how to play Bluff Momo — the Nepali bluffing card game by Tumlet. Watch the gameplay video and reference every character's actions and blocks.",
    ogImage: 'https://tumlet.com/unfurl.png',
  },
  {
    path: '/corporate-game-night',
    title: 'Corporate Game Night | Tumlet — Team Building with Board Games',
    description:
      'Host a fun corporate game night with Tumlet. We bring board games to your office, set everything up, and run the entire 2-hour session for your team.',
    ogImage: 'https://tumlet.com/unfurl.png',
  },
  {
    path: '/ganthan',
    title: 'Ganthan | Meaningful Conversation Prompts for Nepali Families',
    description:
      'Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories and stories. Free and bilingual.',
    ogImage: 'https://tumlet.com/tumlet-logo.png',
  },
  {
    path: '/bichitra',
    title: 'Bichitra | Guess the Nepali Last Name',
    description:
      'Bichitra is a Nepali last name puzzle from Tumlet. A photo hides a थर somewhere inside it — can you find it? No options, no shortcuts. Play free online now.',
    ogImage: 'https://tumlet.com/tumlet-logo.png',
  },
  {
    path: '/thug',
    title: 'Thug | Social Deduction Game for Nepali Friend Groups',
    description:
      'Thug is a free social deduction game for Nepali friend groups. One person gets a different word — can you figure out who? Built around Nepali culture.',
    ogImage: 'https://tumlet.com/tumlet-logo.png',
  },
  {
    path: '/farak',
    title: "Farak | Who’s Most Likely To — With an Imposter Twist",
    description:
      'Farak is the imposter edition of Who’s Most Likely To. Everyone gets the same question — except one. Can you catch the odd one out? Play free online.',
    ogImage: 'https://tumlet.com/og-farak.png',
  },
  {
    path: '/tundikhel',
    title: 'Race to Tundikhel — A New Nepali Board Game from Tumlet',
    description:
      'Race to Tundikhel is a new Nepali board game from Tumlet. No dice, no luck — just micro-driver chaos through the streets of Kathmandu. Coming soon.',
    ogImage: 'https://tumlet.com/tundikhel/hero-art.png',
  },
  {
    path: '/blog',
    title: "Tumlet Blog | Stories from Nepal’s Board Game Scene",
    description:
      'Stories, insights, and discoveries from the world of Nepali games and play. Read about board game culture in Nepal and beyond.',
    ogImage: 'https://tumlet.com/unfurl.png',
  },
  {
    path: '/blog/best-nepali-board-games',
    title: "Best Nepali Board Games I’ve Actually Played",
    description:
      "I've been exploring Nepal's board game scene for a while now. These four games stood out after countless sessions with friends and family.",
    ogImage: 'https://tumlet.com/blogs/best-nepali-board-games/unfurl.png',
  },
  {
    path: '/blog/board-game-nepal',
    title: 'Board Games in Nepal – Where to Play, Events, and Local Games',
    description:
      'Discover board games in Nepal. Find game nights, cafés with games, and Nepali-made games like Firiri and Bagh Chal. Play, meet people, and have fun.',
    ogImage: 'https://tumlet.com/unfurl.png',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Given the dist/index.html template, replace all head meta with
 * the values for this specific route.
 */
function injectMeta(template, { title, description, ogImage, canonicalUrl }) {
  let html = template;
  const t = escapeAttr(title);
  const d = escapeAttr(description);

  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);

  // <meta name="description">
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${d}" />`
  );

  // OG tags
  html = html.replace(
    /<meta\s+property="og:title"[^>]*>/,
    `<meta property="og:title" content="${t}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[^>]*>/,
    `<meta property="og:description" content="${d}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"[^>]*>/,
    `<meta property="og:image" content="${ogImage}" />`
  );

  // Twitter — fix the incorrect card value in the default template too
  html = html.replace(
    /<meta\s+name="twitter:card"[^>]*>/,
    `<meta name="twitter:card" content="summary_large_image" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"[^>]*>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

  // Inject canonical, og:url, twitter title+description before </head>
  const extra = [
    `  <link rel="canonical" href="${canonicalUrl}" />`,
    `  <meta property="og:url" content="${canonicalUrl}" />`,
    `  <meta name="twitter:title" content="${t}" />`,
    `  <meta name="twitter:description" content="${d}" />`,
  ].join('\n');

  html = html.replace('</head>', `${extra}\n</head>`);

  return html;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}

// Also fix the root index.html (homepage) — add canonical + twitter fixes
const rootTemplate = fs.readFileSync(templatePath, 'utf-8');
const fixedRoot = injectMeta(rootTemplate, {
  title: 'Tumlet | Spreading Playfulness Across Nepal',
  description:
    'Play, laugh, repeat! Tumlet crafts games that spark connection, nostalgia, and pure fun for young Nepali adults.',
  ogImage: 'https://tumlet.com/unfurl.png',
  canonicalUrl: 'https://tumlet.com/',
});
fs.writeFileSync(templatePath, fixedRoot, 'utf-8');
console.log('  ✓ dist/index.html (homepage)');

for (const route of routes) {
  // Netlify serves directory index files at their trailing-slash URL and
  // 301-redirects the non-slash form, so the canonical (and og:url) must use
  // the trailing slash to avoid "canonical points to redirect".
  const canonicalUrl = `https://tumlet.com${route.path}/`;
  const html = injectMeta(rootTemplate, { ...route, canonicalUrl });

  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });

  const outFile = path.join(routeDir, 'index.html');
  fs.writeFileSync(outFile, html, 'utf-8');
  console.log(`  ✓ dist${route.path}/index.html`);
}

console.log(`\nPre-rendered ${routes.length + 1} routes successfully.`);
