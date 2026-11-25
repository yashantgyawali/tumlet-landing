# Blog Template for Adding New Posts

## How to Add a New Blog Post

1. **Create the post**: add `src/blogs/your-new-post-slug/index.mdx` and put its images in
   `public/blogs/your-new-post-slug/`. The frontmatter drives everything else:

```mdx
---
title: "Your blog post title"
slug: your-new-post-slug
excerpt: "One or two sentences. Shown on the blog page and used as the search description."
publishedAt: "2026-01-15"
author: Yashant
readTime: 5 min read
category: Board Games
coverImage: /blogs/your-new-post-slug/hero.png
featured: false
tags: ['Board Games', 'Nepal']
# Optional:
# updatedAt: "2026-02-01"   # after a real edit; used in the sitemap
# seoTitle: "..."           # search title, if it should differ from `title` (keep under 60 characters)
# seoDescription: "..."     # search description, if it should differ from `excerpt`
---

Your post, in Markdown. Use ## for section headers.
```

2. **That's it for SEO.** Don't add `<Helmet>` or meta tags to the post, and don't edit a
   sitemap. On `npm run build` the post is pre-rendered to real HTML with its title,
   description, canonical URL, link-preview image and BlogPosting structured data, and it is
   added to `sitemap.xml`. The search title is "`title` | Tumlet Blog" when that fits in 60
   characters, otherwise `title` alone, unless you set `seoTitle`.

3. **URL Structure**: Your blog post will be available at `tumlet.com/blog/your-new-post-slug/`

4. **Typography Features**: The blog system includes:
   - Responsive typography that scales with screen size
   - Optimized line heights for readability
   - Proper heading hierarchy
   - Print-friendly styles
   - Consistent spacing and margins

## Type Scale Used

- **H1 (Page Title)**: 5xl-6xl (3rem-3.75rem)
- **H2 (Section Headers)**: 3xl-4xl (1.875rem-2.25rem) 
- **Body Text**: lg-xl (1.125rem-1.25rem)
- **Line Height**: 1.75 for optimal readability
- **Mobile Responsive**: Automatically scales down on smaller screens

## Available Categories

- Board Games
- Game Design
- Nepali Culture
- Reviews
- Tutorials
- News

## Best Practices

1. **Slugs**: Use kebab-case for URLs (e.g., "my-awesome-post")
2. **Titles**: Keep them descriptive and engaging
3. **Excerpts**: Write compelling previews (50-100 words)
4. **Content**: Use ## for section headers, regular paragraphs for body text
5. **Read Time**: Estimate based on ~200 words per minute reading speed
6. **Categories**: Use consistent categories for better organization

## Future Enhancements

The blog system is designed to be easily extended with:
- Search functionality
- Category filtering
- Related posts
- Social sharing
- Comments system
- RSS feeds
- SEO optimization 