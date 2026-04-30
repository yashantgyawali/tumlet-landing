import { useEffect, useState } from 'react';
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

const Dot = () => (
  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#cbcbcb', display: 'inline-block', flexShrink: 0 }} />
);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const [ctaHovered, setCtaHovered] = useState(false);

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
      <div className="min-h-screen flex flex-col" style={{ background: '#ffffff' }}>
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
    <div className="min-h-screen flex flex-col" style={{ background: '#ffffff', color: '#130D01', fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
      <style>{blogTypographyStyles}</style>
      <Navbar />

      {/* Article */}
      <main className="flex-1">
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 96px' }}>
          {/* Meta strip */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: '13px',
            color: '#6B6B6B',
            marginBottom: '28px',
            flexWrap: 'wrap',
          }}>
            <span style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F16147',
              background: '#FDE8E4',
              padding: '6px 14px',
              borderRadius: '999px',
            }}>
              {post.category}
            </span>
            <Dot />
            <span style={{ fontWeight: 600, color: '#130D01' }}>By {post.author}</span>
            <Dot />
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</span>
            <Dot />
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Baloo 2', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.1,
            color: '#130D01',
            marginBottom: '24px',
            letterSpacing: '-0.01em',
            marginTop: 0,
          }}>
            {post.title}
          </h1>

          {/* Deck / lede */}
          <p style={{
            fontSize: '21px',
            lineHeight: 1.55,
            color: '#2a241a',
            marginBottom: '36px',
            fontWeight: 500,
            marginTop: 0,
          }}>
            {post.excerpt}
          </p>

          {/* MDX content */}
          <BlogTypography>
            <MDXProvider>
              <MDXContent />
            </MDXProvider>
          </BlogTypography>
        </article>

        {/* End-of-post CTA */}
        <section style={{ maxWidth: 760, margin: '0 auto 96px', padding: '0 24px' }}>
          <div style={{
            background: '#F3B952',
            border: '3px solid #130D01',
            boxShadow: '12px 12px 0 #130D01',
            transform: 'rotate(-0.5deg)',
            borderRadius: '20px',
            textAlign: 'center',
            padding: '48px 32px',
          }}>
            <div style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#130D01',
              marginBottom: '14px',
            }}>
              From the makers
            </div>
            <h3 style={{
              fontFamily: "'Baloo 2', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: '30px',
              color: '#130D01',
              marginBottom: '14px',
              lineHeight: 1.1,
              marginTop: 0,
            }}>
              Tumlet makes Nepali board games — for Nepalis, by Nepalis.
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.5,
              color: '#130D01',
              marginBottom: '22px',
              marginTop: 0,
            }}>
              If this resonated, follow us. We hand-pack and sign the first run of every game.
            </p>
            <a
              href="https://www.instagram.com/tumlet.boardgames/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: '#130D01',
                color: '#ffffff',
                fontFamily: "'Baloo 2', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '16px',
                padding: '14px 40px',
                borderRadius: '12px',
                boxShadow: '8px 8px 0 #F16147',
                transform: ctaHovered ? 'rotate(-0.88deg) translateY(-4px)' : 'rotate(-0.88deg)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              Follow @tumlet.boardgames
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
