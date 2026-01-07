import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getBlogPost } from '../data/blogPosts';
import { BlogTypography, blogTypographyStyles } from '../components/BlogTypography';
import { MDXProvider } from '@mdx-js/react';

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[name='${name}']`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setPropertyTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property='${property}']`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function setJsonLd(structuredData: object) {
  let script = document.getElementById('blog-jsonld');
  if (!script) {
    script = document.createElement('script');
    (script as HTMLScriptElement).type = 'application/ld+json';
    script.id = 'blog-jsonld';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(structuredData);
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Tumlet Blog`;
      setMetaTag('description', post.excerpt);
      setCanonical(`https://tumlet.com/blog/${post.slug}`);
      setPropertyTag('og:title', post.title);
      setPropertyTag('og:description', post.excerpt);
      setPropertyTag('og:type', 'article');
      setPropertyTag('og:url', `https://tumlet.com/blog/${post.slug}`);
      const ogImage = post.slug === 'best-nepali-board-games'
        ? 'https://tumlet.com/blogs/best-nepali-board-games/unfurl.png'
        : (post.coverImage ? `https://tumlet.com${post.coverImage}` : 'https://tumlet.com/unfurl.png');
      setPropertyTag('og:image', ogImage);
      setMetaTag('twitter:card', 'summary_large_image');
      setMetaTag('twitter:title', post.title);
      setMetaTag('twitter:description', post.excerpt);
      setMetaTag('twitter:image', ogImage);
      setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: ogImage,
        author: {
          '@type': 'Person',
          name: post.author,
        },
        datePublished: post.publishedAt,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://tumlet.com/blog/${post.slug}`,
        },
        url: `https://tumlet.com/blog/${post.slug}`,
        publisher: {
          '@type': 'Organization',
          name: 'Tumlet',
          logo: {
            '@type': 'ImageObject',
            url: ogImage,
          },
        },
        keywords: post.tags ? post.tags.join(', ') : '',
      });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-tumlet-beige">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tumlet-text mb-4">Blog post not found</h1>
            <p className="text-lg text-gray-600">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const MDXContent = post.component;

  return (
    <div className="min-h-screen bg-tumlet-beige">
      <style>{blogTypographyStyles}</style>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-tumlet-blue/10 to-tumlet-yellow/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-tumlet-yellow text-tumlet-text px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-tumlet-text leading-tight mb-6">
                {post.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlogTypography>
              <MDXProvider>
                <MDXContent />
              </MDXProvider>
            </BlogTypography>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost; 