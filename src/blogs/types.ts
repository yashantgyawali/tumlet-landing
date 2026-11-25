export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedAt: string;
  /** Last meaningful edit (ISO date). Used for the sitemap and structured data. */
  updatedAt?: string;
  /** Search-result title when it should differ from the on-page title. */
  seoTitle?: string;
  /** Search-result description when it should differ from the excerpt. */
  seoDescription?: string;
  author: string;
  readTime: string;
  category: string;
  featured?: boolean;
  tags?: string[];
  coverImage?: string;
  images?: string[];
  component?: React.ComponentType;
}; 