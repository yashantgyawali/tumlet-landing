# Blog Template for Adding New Posts

## How to Add a New Blog Post

1. **Update the data file**: Add your new blog post to `src/data/blogPosts.ts`

```typescript
'your-new-post-slug': {
  slug: 'your-new-post-slug',
  title: "Your Blog Post Title",
  excerpt: "A brief description of your blog post that appears in the preview.",
  content: `
Your blog content goes here. You can use markdown-style headings with ## for section headers.

## First Section

Your paragraph content here. The system will automatically format this with proper typography.

## Second Section

More content here. The typography system includes:

- Proper line heights for readability
- Responsive font sizes
- Good contrast and spacing
- Print-friendly styles
  `,
  publishedAt: '2024-01-15', // Use ISO date format
  author: 'Your Name',
  readTime: '5 min read', // Estimate based on word count
  category: 'Your Category',
  featured: true, // Optional: mark as featured
  tags: ['tag1', 'tag2', 'tag3'] // Optional: for future search functionality
}
```

2. **URL Structure**: Your blog post will be available at `tumlet.com/blog/your-new-post-slug`

3. **Typography Features**: The blog system includes:
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