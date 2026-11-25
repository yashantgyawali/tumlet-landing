import type { BlogPost } from '../blogs/types';
import { DEFAULT_IMAGE, SITE_URL, canonicalUrl, type PageMeta } from './head';

const MAX_TITLE = 60;

/**
 * Head tags, structured data and sitemap entry for a blog post, all from its
 * frontmatter. Optional frontmatter fields: seoTitle, seoDescription (when the
 * search snippet should differ from the on-page title and excerpt) and
 * updatedAt (sitemap lastmod after an edit).
 */
export function blogPostMeta(post: BlogPost): PageMeta {
  const path = `/blog/${post.slug}`;
  const suffixed = `${post.title} | Tumlet Blog`;
  const title = post.seoTitle ?? (suffixed.length <= MAX_TITLE ? suffixed : post.title);
  const description = post.seoDescription ?? post.excerpt;
  const image = post.coverImage ? `${SITE_URL}${post.coverImage}` : DEFAULT_IMAGE;
  const modified = post.updatedAt ?? post.publishedAt;

  return {
    path,
    title,
    description,
    image,
    type: 'article',
    publishedTime: post.publishedAt,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description,
      image,
      author: { '@type': 'Person', name: post.author },
      datePublished: post.publishedAt,
      dateModified: modified,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl(path) },
      url: canonicalUrl(path),
      publisher: {
        '@type': 'Organization',
        name: 'Tumlet',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/tumlet-logo.png` },
      },
      ...(post.tags?.length ? { keywords: post.tags.join(', ') } : {}),
    },
    sitemap: { lastmod: modified, changefreq: 'monthly', priority: 0.7 },
  };
}
