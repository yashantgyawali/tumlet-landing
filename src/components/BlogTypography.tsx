import React from 'react';

interface BlogTypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const BlogTypography: React.FC<BlogTypographyProps> = ({ children, className = '' }) => {
  return (
    <div className={`blog-typography ${className} mdx-outer`}>
      <div className="mdx-content">
        {children}
      </div>
    </div>
  );
};

// Blog typography styles
export const blogTypographyStyles = `
  .blog-typography {
    background: transparent;
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-size: 19px;
    line-height: 1.7;
    color: #2a241a;
    word-break: break-word;
  }

  .mdx-outer {
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .mdx-content {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-size: 19px;
    line-height: 1.7;
    color: #2a241a;
  }

  .blog-typography h1,
  .mdx-content h1 {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-weight: 800;
    font-size: clamp(36px, 5vw, 56px);
    color: #130D01;
    letter-spacing: -0.01em;
    margin-bottom: 24px;
    margin-top: 0;
    line-height: 1.1;
  }

  .blog-typography h2,
  .mdx-content h2 {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 4vw, 40px);
    color: #130D01;
    margin-top: 56px;
    margin-bottom: 18px;
    line-height: 1.15;
  }

  .blog-typography h3,
  .mdx-content h3 {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: #130D01;
    margin-top: 36px;
    margin-bottom: 12px;
    line-height: 1.2;
  }

  .blog-typography h4,
  .mdx-content h4 {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #130D01;
    margin-top: 32px;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  .blog-typography p,
  .mdx-content p {
    font-size: 19px;
    line-height: 1.7;
    color: #2a241a;
    margin-bottom: 22px;
    margin-top: 0;
  }

  .blog-typography p strong,
  .mdx-content p strong {
    color: #130D01;
    font-weight: 700;
  }

  .blog-typography p em,
  .mdx-content p em {
    font-style: italic;
    color: #F16147;
    font-weight: 600;
  }

  .blog-typography a,
  .mdx-content a {
    color: #F16147;
    text-decoration: underline;
    text-underline-offset: 3px;
    font-weight: 600;
    transition: color 0.2s;
  }

  .blog-typography a:hover,
  .mdx-content a:hover {
    color: #c94f3a;
  }

  .blog-typography ul,
  .mdx-content ul {
    list-style: none;
    padding-left: 0;
    font-size: 19px;
    line-height: 1.65;
    margin-bottom: 24px;
    margin-top: 0;
  }

  .blog-typography ul li,
  .mdx-content ul li {
    position: relative;
    padding-left: 28px;
    margin-bottom: 10px;
  }

  .blog-typography ul li::before,
  .mdx-content ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 14px;
    width: 14px;
    height: 3px;
    background: #F16147;
    border-radius: 2px;
  }

  .blog-typography ol,
  .mdx-content ol {
    font-size: 19px;
    line-height: 1.65;
    margin-bottom: 24px;
    margin-top: 0;
    padding-left: 28px;
  }

  .blog-typography ol li::marker,
  .mdx-content ol li::marker {
    color: #F16147;
    font-weight: 700;
  }

  .blog-typography blockquote,
  .mdx-content blockquote {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.3;
    color: #130D01;
    border-left: 6px solid #F3B952;
    padding: 10px 0 10px 28px;
    margin: 40px 0;
  }

  .blog-typography blockquote p,
  .mdx-content blockquote p {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
  }

  .blog-typography hr,
  .mdx-content hr {
    border: 0;
    margin: 64px 0;
    text-align: center;
  }

  .blog-typography hr::after,
  .mdx-content hr::after {
    content: "✦  ✦  ✦";
    color: #F16147;
    letter-spacing: 0.5em;
    font-size: 14px;
  }

  .blog-typography img,
  .mdx-content img {
    width: 100%;
    border-radius: 14px;
    margin: 36px 0;
    border: 2px solid #130D01;
    display: block;
  }

  .blog-typography code,
  .mdx-content code {
    font-family: 'Menlo', 'Monaco', 'Consolas', monospace;
    font-size: 0.9em;
    background: #f1f5f9;
    padding: 0.2em 0.5em;
    border-radius: 0.3em;
    color: #dc2626;
  }

  .blog-typography pre,
  .mdx-content pre {
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

  /* Responsive typography */
  @media (max-width: 768px) {
    .blog-typography,
    .mdx-content {
      font-size: 17px;
    }

    .blog-typography p,
    .mdx-content p,
    .blog-typography ul,
    .mdx-content ul,
    .blog-typography ol,
    .mdx-content ol {
      font-size: 17px;
      margin-bottom: 18px;
    }

    .blog-typography blockquote,
    .mdx-content blockquote {
      font-size: 22px;
      padding: 8px 0 8px 20px;
    }

    .blog-typography img,
    .mdx-content img {
      margin: 24px 0;
    }
  }

  /* Print styles */
  @media print {
    .blog-typography,
    .mdx-content {
      font-size: 12pt;
      line-height: 1.6;
    }

    .blog-typography h1, .blog-typography h2, .blog-typography h3,
    .mdx-content h1, .mdx-content h2, .mdx-content h3 {
      page-break-after: avoid;
    }

    .blog-typography p, .blog-typography blockquote,
    .mdx-content p, .mdx-content blockquote {
      orphans: 3;
      widows: 3;
    }
  }
`;

export default BlogTypography;
