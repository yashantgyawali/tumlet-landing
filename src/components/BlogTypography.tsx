import React from 'react';

interface BlogTypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const BlogTypography: React.FC<BlogTypographyProps> = ({ children, className = '' }) => {
  return (
    <div className={`blog-typography ${className}`}>
      <div className="mdx-content">
        {children}
      </div>
    </div>
  );
};

// Blog typography styles
export const blogTypographyStyles = `
  .blog-typography {
    font-family: var(--font-sans, 'Inter', system-ui, sans-serif);
    color: var(--color-text, #161B32);
    background: var(--color-background, #F9F3E5);
    max-width: 66ch;
    margin: 0 auto;
    font-size: 1.125rem;
    line-height: 1.7;
    letter-spacing: 0.01em;
    word-break: break-word;
    padding: 2.5rem 0;
  }

  .blog-typography h1 {
    font-family: var(--font-display, 'Outfit', sans-serif);
    font-size: 2.441rem;
    line-height: 1.1;
    font-weight: 700;
    margin: 3.5rem 0 2.5rem 0;
    color: var(--color-text, #161B32);
  }

  .blog-typography h2 {
    font-size: 1.953rem;
    line-height: 1.2;
    font-weight: 700;
    margin: 3rem 0 2rem 0;
    color: var(--color-text, #161B32);
  }

  .blog-typography h2:first-child {
    margin-top: 0.5rem;
  }

  .blog-typography h3 {
    font-size: 1.563rem;
    line-height: 1.3;
    font-weight: 700;
    margin: 2.5rem 0 1.5rem 0;
    color: var(--color-text, #161B32);
  }

  .blog-typography h4 {
    font-size: 1.25rem;
    line-height: 1.4;
    font-weight: 700;
    margin: 2rem 0 1rem 0;
    color: var(--color-text, #161B32);
  }

  .blog-typography p {
    font-size: 1.125rem;
    line-height: 1.7;
    margin: 0 0 2.25rem 0;
    color: var(--color-text, #161B32);
  }

  .blog-typography p:first-child {
    margin-top: 0.5rem;
  }

  .blog-typography ul, .blog-typography ol {
    font-size: 1.125rem;
    line-height: 1.7;
    margin: 0 0 2.25rem 2.5rem;
    padding-left: 2rem;
  }

  .blog-typography li {
    margin-bottom: 1rem;
  }

  .blog-typography blockquote {
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.7;
    margin: 3rem 0;
    padding: 1.5rem 2rem;
    border-left: 4px solid var(--color-accent, #364587);
    background: #f4f6fa;
    color: var(--color-muted, #374151);
  }

  .blog-typography img {
    display: block;
    max-width: 100%;
    margin: 3rem auto;
    border-radius: 0.75rem;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }

  .blog-typography code {
    font-family: 'Menlo', 'Monaco', 'Consolas', monospace;
    font-size: 1em;
    background: #f1f5f9;
    padding: 0.2em 0.5em;
    border-radius: 0.3em;
    color: #dc2626;
  }

  .blog-typography pre {
    font-family: 'Menlo', 'Monaco', 'Consolas', monospace;
    font-size: 1em;
    line-height: 1.5;
    background: #1e293b;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 0.75rem;
    overflow-x: auto;
    margin: 2.5rem 0;
  }

  .blog-typography a {
    color: var(--color-accent, #364587);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.2s;
  }

  .blog-typography a:hover {
    color: #161B32;
  }

  .blog-typography strong {
    font-weight: 600;
    color: var(--color-accent, #364587);
  }

  .blog-typography em {
    font-style: italic;
  }

  /* Responsive typography */
  @media (max-width: 768px) {
    .blog-typography {
      font-size: 1rem;
      padding: 0 1rem 2rem 1rem;
    }
    
    .blog-typography h1 {
      font-size: 1.953rem;
      margin: 2.5rem 0 1.5rem 0;
    }
    
    .blog-typography h2 {
      font-size: 1.563rem;
      margin: 2rem 0 1.25rem 0;
    }
    
    .blog-typography h2:first-child {
      margin-top: 0.5rem;
    }
    
    .blog-typography h3 {
      font-size: 1.25rem;
      margin: 1.5rem 0 1rem 0;
    }
    
    .blog-typography p, .blog-typography ul, .blog-typography ol {
      font-size: 1rem;
      margin-bottom: 1.25rem;
    }
    
    .blog-typography p:first-child {
      margin-top: 0.5rem;
    }
    
    .blog-typography img {
      margin: 2rem auto;
    }
    
    .blog-typography blockquote {
      margin: 2rem 0;
      padding: 1rem 1.25rem;
    }
    
    .blog-typography pre {
      padding: 1rem;
      margin: 1.5rem 0;
    }
  }

  /* Print styles */
  @media print {
    .blog-typography {
      font-size: 12pt;
      line-height: 1.6;
    }
    
    .blog-typography h1, .blog-typography h2, .blog-typography h3 {
      page-break-after: avoid;
    }
    
    .blog-typography p, .blog-typography blockquote {
      orphans: 3;
      widows: 3;
    }
  }

  .mdx-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #23242A;
    margin-top: 3rem;
    margin-bottom: 1.25rem;
    line-height: 1.15;
  }
  .mdx-content h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #23242A;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  .mdx-content h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #23242A;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    line-height: 1.25;
  }
  .mdx-content h4 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #23242A;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }
  .mdx-content h5 {
    font-size: 1.1rem;
    font-weight: bold;
    color: #23242A;
    margin-top: 1.25rem;
    margin-bottom: 0.4rem;
    line-height: 1.35;
  }
  .mdx-content p,
  .mdx-content ul,
  .mdx-content ol {
    font-size: 1.1rem;
    margin-top: 0.25rem;
    margin-bottom: 1.25rem;
    line-height: 1.7;
  }

  .mdx-content ul,
  .mdx-content ol {
    padding-left: 1.5rem;
    list-style-position: inside;
  }

  .mdx-content li {
    margin-bottom: 0.25rem;
  }

  .mdx-content ul {
    list-style-type: disc !important;
    list-style-position: inside;
    margin-left: 1.5rem;
    padding-left: 0;
  }
  .mdx-content ol {
    list-style-type: decimal !important;
    list-style-position: inside;
    margin-left: 1.5rem;
    padding-left: 0;
  }
  .mdx-content li {
    margin-bottom: 0.25rem;
  }

  .mdx-content hr {
    margin: 2.5rem 0;
    border: none;
    border-top: 1.5px solid #e0e0e0;
  }

  .mdx-content a {
    color: #23242A;
    text-decoration: underline;
    text-underline-offset: 2px;
    font-weight: 500;
    transition: color 0.15s;
  }
  .mdx-content a:hover {
    color: #F16146;
  }
`;

export default BlogTypography; 