/// <reference types="node" />
// Build-time renderer, used only by scripts/prerender.mjs (never shipped to
// the browser). It renders each route to HTML and describes which pages to
// write, with their head tags and sitemap entries.
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { ROUTES } from './routes';
import { getAllBlogPosts } from './data/blogPosts';
import { pastNights } from './data/gameNights';
import { blogPostMeta } from './seo/blog';
import { NOT_FOUND_META, PAGES } from './seo/pages';
import { canonicalUrl, renderHeadHtml, type PageMeta } from './seo/head';

/** Render one URL to HTML, waiting for every lazy page to load. */
export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let error: unknown = null;
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        chunks.push(Buffer.from(chunk));
        callback();
      },
    });
    sink.on('finish', () => {
      if (error) reject(error);
      else resolve(Buffer.concat(chunks).toString('utf8'));
    });
    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          pipe(sink);
        },
        onShellError(err) {
          reject(err);
        },
        onError(err) {
          // Any render error should fail the build, not ship a broken page.
          error = err;
        },
      },
    );
  });
}

export interface PrerenderPage {
  path: string;
  /** File name in src/pages, used to preload the page's chunk. */
  page: string;
  headHtml: string;
  sitemap: { loc: string; lastmod?: string; changefreq?: string; priority?: number } | null;
}

function latest(dates: string[]): string | undefined {
  const sorted = dates.filter(Boolean).sort();
  return sorted[sorted.length - 1];
}

function sitemapEntry(meta: PageMeta, lastmodOverride?: string): PrerenderPage['sitemap'] {
  if (meta.noindex || meta.sitemap?.exclude) return null;
  return {
    loc: canonicalUrl(meta.path),
    lastmod: lastmodOverride ?? meta.sitemap?.lastmod,
    changefreq: meta.sitemap?.changefreq,
    priority: meta.sitemap?.priority,
  };
}

/**
 * Every page to pre-render. Throws if a route has no metadata or metadata has
 * no route, so the two lists can't drift apart.
 */
export function getPrerenderPages(): PrerenderPage[] {
  const routeByPath = new Map(ROUTES.map((r) => [r.path, r]));
  const posts = getAllBlogPosts();
  const recapDates = pastNights.map((n) => n.publishedAt);
  const postDates = posts.map((p) => p.updatedAt ?? p.publishedAt);

  const missingMeta = ROUTES.filter(
    (r) => r.path !== '*' && !r.path.includes(':') && !PAGES.some((p) => p.path === r.path),
  ).map((r) => r.path);
  const missingRoute = PAGES.filter((p) => !routeByPath.has(p.path)).map((p) => p.path);
  if (missingMeta.length || missingRoute.length) {
    throw new Error(
      `Routes and SEO metadata are out of sync.` +
        (missingMeta.length ? ` Add to src/seo/pages.ts: ${missingMeta.join(', ')}.` : '') +
        (missingRoute.length ? ` Add to src/routes.ts: ${missingRoute.join(', ')}.` : ''),
    );
  }

  const lastmodFor: Record<string, string | undefined> = {
    '/game-night': latest(recapDates),
    '/blog': latest([...recapDates, ...postDates]),
  };

  const staticPages = PAGES.map((meta) => ({
    path: meta.path,
    page: routeByPath.get(meta.path)!.page,
    headHtml: renderHeadHtml(meta),
    sitemap: sitemapEntry(meta, lastmodFor[meta.path]),
  }));

  const blogRoute = routeByPath.get('/blog/:slug')!;
  const blogPages = posts.map((post) => {
    const meta = blogPostMeta(post);
    return {
      path: meta.path,
      page: blogRoute.page,
      headHtml: renderHeadHtml(meta),
      sitemap: sitemapEntry(meta),
    };
  });

  return [...staticPages, ...blogPages];
}

/** The 404 page, served by Netlify for any URL that has no page. */
export function getNotFoundPage(): { path: string; page: string; headHtml: string } {
  return {
    path: NOT_FOUND_META.path,
    page: ROUTES.find((r) => r.path === '*')!.page,
    headHtml: renderHeadHtml(NOT_FOUND_META),
  };
}
