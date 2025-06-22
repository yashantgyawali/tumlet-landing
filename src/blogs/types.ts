export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedAt: string;
  author: string;
  readTime: string;
  category: string;
  featured?: boolean;
  tags?: string[];
  coverImage?: string;
  images?: string[];
  component?: React.ComponentType;
}; 