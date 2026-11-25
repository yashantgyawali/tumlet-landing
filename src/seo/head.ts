// Head tags for every page, built from one PageMeta object.
//
// The same tag list is used twice:
//   - at build time, renderHeadHtml() writes it into each pre-rendered
//     index.html (what crawlers and link previews read), and
//   - in the browser, applyHead() updates document.head on client-side
//     navigation, so the live title and meta always match the built HTML.

export const SITE_URL = 'https://tumlet.com';
export const SITE_NAME = 'Tumlet';
export const DEFAULT_IMAGE = `${SITE_URL}/unfurl.png`;

export type JsonLd = Record<string, unknown>;

export interface PageMeta {
  /** Route path without a trailing slash, e.g. "/about" ("/" for the homepage). */
  path: string;
  title: string;
  description: string;
  /** Absolute URL of the link-preview image. */
  image?: string;
  type?: 'website' | 'article';
  /** Optional different wording for social link previews. */
  socialTitle?: string;
  socialDescription?: string;
  /** Keep the page out of search results (and out of the sitemap). */
  noindex?: boolean;
  /** Set false for pages that must not declare a canonical URL (the 404 page). */
  canonical?: boolean;
  /** ISO date, for articles. */
  publishedTime?: string;
  jsonLd?: JsonLd | JsonLd[];
  sitemap?: {
    /** Leave the page out of sitemap.xml even though it can be indexed. */
    exclude?: boolean;
    lastmod?: string;
    changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority?: number;
  };
}

/** "/about/" -> "/about", "" -> "/". */
export function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/** Netlify serves each page at its trailing-slash URL, so canonicals use it too. */
export function canonicalUrl(path: string): string {
  const p = normalizePath(path);
  return p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}/`;
}

type HeadTag =
  | { key: string; tag: 'title'; text: string }
  | { key: string; tag: 'meta' | 'link'; attrs: Record<string, string> }
  | { key: string; tag: 'script'; attrs: Record<string, string>; text: string };

// Every tag this module manages. Tags not produced for a page are removed on
// client-side navigation so nothing leaks from the previous page.
const MANAGED_KEYS = [
  'description',
  'robots',
  'canonical',
  'og:site_name',
  'og:type',
  'og:title',
  'og:description',
  'og:url',
  'og:image',
  'article:published_time',
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:image',
  'jsonld',
] as const;

function selectorFor(key: string): string {
  if (key === 'canonical') return 'link[rel="canonical"]';
  if (key === 'jsonld') return 'script#page-jsonld';
  if (key.startsWith('og:') || key.startsWith('article:')) return `meta[property="${key}"]`;
  return `meta[name="${key}"]`;
}

function serializeJsonLd(data: JsonLd | JsonLd[]): string {
  // Escape "<" so a value can never close the <script> element early.
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function headTags(meta: PageMeta): HeadTag[] {
  const url = canonicalUrl(meta.path);
  const image = meta.image ?? DEFAULT_IMAGE;
  const socialTitle = meta.socialTitle ?? meta.title;
  const socialDescription = meta.socialDescription ?? meta.description;
  const withCanonical = meta.canonical !== false;

  const tags: HeadTag[] = [
    { key: 'title', tag: 'title', text: meta.title },
    { key: 'description', tag: 'meta', attrs: { name: 'description', content: meta.description } },
  ];
  if (meta.noindex) {
    tags.push({ key: 'robots', tag: 'meta', attrs: { name: 'robots', content: 'noindex' } });
  }
  if (withCanonical) {
    tags.push({ key: 'canonical', tag: 'link', attrs: { rel: 'canonical', href: url } });
  }
  tags.push(
    { key: 'og:site_name', tag: 'meta', attrs: { property: 'og:site_name', content: SITE_NAME } },
    { key: 'og:type', tag: 'meta', attrs: { property: 'og:type', content: meta.type ?? 'website' } },
    { key: 'og:title', tag: 'meta', attrs: { property: 'og:title', content: socialTitle } },
    { key: 'og:description', tag: 'meta', attrs: { property: 'og:description', content: socialDescription } },
  );
  if (withCanonical) {
    tags.push({ key: 'og:url', tag: 'meta', attrs: { property: 'og:url', content: url } });
  }
  tags.push({ key: 'og:image', tag: 'meta', attrs: { property: 'og:image', content: image } });
  if (meta.publishedTime) {
    tags.push({
      key: 'article:published_time',
      tag: 'meta',
      attrs: { property: 'article:published_time', content: meta.publishedTime },
    });
  }
  tags.push(
    { key: 'twitter:card', tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { key: 'twitter:title', tag: 'meta', attrs: { name: 'twitter:title', content: socialTitle } },
    { key: 'twitter:description', tag: 'meta', attrs: { name: 'twitter:description', content: socialDescription } },
    { key: 'twitter:image', tag: 'meta', attrs: { name: 'twitter:image', content: image } },
  );
  if (meta.jsonLd) {
    tags.push({
      key: 'jsonld',
      tag: 'script',
      attrs: { type: 'application/ld+json', id: 'page-jsonld' },
      text: serializeJsonLd(meta.jsonLd),
    });
  }
  return tags;
}

function escapeText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(value: string): string {
  return escapeText(value).replace(/"/g, '&quot;');
}

/** Head tags as HTML, for the pre-rendered pages. */
export function renderHeadHtml(meta: PageMeta): string {
  return headTags(meta)
    .map((t) => {
      if (t.tag === 'title') return `<title>${escapeText(t.text)}</title>`;
      const attrs = Object.entries(t.attrs)
        .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
        .join(' ');
      if (t.tag === 'script') return `<script ${attrs}>${t.text}</script>`;
      return `<${t.tag} ${attrs} />`;
    })
    .join('\n    ');
}

/** Update document.head in the browser to match a page. */
export function applyHead(meta: PageMeta): void {
  if (typeof document === 'undefined') return;
  const tags = headTags(meta);
  const byKey = new Map(tags.map((t) => [t.key, t]));

  const title = byKey.get('title');
  if (title && title.tag === 'title' && document.title !== title.text) {
    document.title = title.text;
  }

  for (const key of MANAGED_KEYS) {
    const wanted = byKey.get(key);
    const existing = document.head.querySelector(selectorFor(key));
    if (!wanted || wanted.tag === 'title') {
      existing?.remove();
      continue;
    }
    const el = existing ?? document.head.appendChild(document.createElement(wanted.tag));
    for (const [name, value] of Object.entries(wanted.attrs)) {
      if (el.getAttribute(name) !== value) el.setAttribute(name, value);
    }
    if (wanted.tag === 'script' && el.textContent !== wanted.text) {
      el.textContent = wanted.text;
    }
  }
}
