import type { BlogPost } from '../blogs/types';

// Helper to import all blog posts dynamically
const blogModules = import.meta.glob('../blogs/*/index.mdx', { eager: true });

const blogPosts: Record<string, any> = {};
for (const path in blogModules) {
  const mod = blogModules[path] as any;
  // Vite's MDX plugin exposes frontmatter as 'meta' or 'frontmatter'
  const meta = mod.meta || mod.frontmatter;
  if (meta && meta.slug) {
    blogPosts[meta.slug] = { ...meta, component: mod.default };
  }
}

export const getAllBlogPosts = (): BlogPost[] => {
  return Object.values(blogPosts).sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts[slug];
};

export const getFeaturedBlogPosts = (): BlogPost[] => {
  return getAllBlogPosts().filter(post => post.featured);
}; 