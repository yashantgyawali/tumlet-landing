import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAllBlogPosts } from '../data/blogPosts';

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

const BlogIndex = () => {
  const blogPosts = getAllBlogPosts();

  useEffect(() => {
    document.title = 'Tumlet Blog | Stories from Nepal\'s board game scene';
    setMetaTag('description', 'Stories, insights, and discoveries from the world of Nepali games and play. Read about board game culture in Nepal and beyond.');
    setCanonical('https://tumlet.com/blog');
    setPropertyTag('og:title', 'Tumlet Blog | Stories from Nepal\'s board game scene');
    setPropertyTag('og:description', 'Stories, insights, and discoveries from the world of Nepali games and play. Read about board game culture in Nepal and beyond.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/blog');
    setPropertyTag('og:image', 'https://tumlet.com/unfurl.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Tumlet Blog | Stories from Nepal\'s board game scene');
    setMetaTag('twitter:description', 'Stories, insights, and discoveries from the world of Nepali games and play. Read about board game culture in Nepal and beyond.');
    setMetaTag('twitter:image', 'https://tumlet.com/unfurl.png');
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#ffffff', color: '#130D01', fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-[760px] mx-auto px-6 pt-16 pb-12">
          <span style={{
            display: 'inline-block',
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: '12px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#F16147',
            background: '#FDE8E4',
            padding: '6px 14px',
            borderRadius: '999px',
            marginBottom: '20px',
          }}>
            Tumlet · Stories
          </span>
          <h1 style={{
            fontFamily: "'Baloo 2', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 60px)',
            color: '#130D01',
            lineHeight: 1.1,
            margin: '0 0 16px 0',
          }}>
            The Blog
          </h1>
          <p style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: '20px',
            color: '#4B5563',
            lineHeight: 1.5,
            margin: 0,
          }}>
            Stories, insights, and discoveries from the world of Nepali games and play.
          </p>
        </section>

        {/* Post list */}
        <section className="max-w-[760px] mx-auto px-6 pb-24">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              style={{
                paddingBottom: '40px',
                marginBottom: '40px',
                borderBottom: index !== blogPosts.length - 1 ? '1px solid #f3f4f6' : 'none',
              }}
            >
              <div style={{ marginBottom: '12px' }}>
                <span style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase' as const,
                  color: '#F16147',
                  background: '#FDE8E4',
                  padding: '4px 12px',
                  borderRadius: '999px',
                }}>
                  {post.category}
                </span>
              </div>

              <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <h2 style={{
                  fontFamily: "'Baloo 2', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 3.5vw, 36px)',
                  color: '#130D01',
                  lineHeight: 1.15,
                  margin: '0 0 12px 0',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                >
                  {post.title}
                </h2>
              </Link>

              <p style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: '18px',
                color: '#4B5563',
                lineHeight: 1.6,
                margin: '0 0 16px 0',
              }}>
                {post.excerpt}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: '13px',
                color: '#6B6B6B',
                marginBottom: '16px',
              }}>
                <span>By {post.author}</span>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#cbcbcb', display: 'inline-block', flexShrink: 0 }} />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</span>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#cbcbcb', display: 'inline-block', flexShrink: 0 }} />
                <span>{post.readTime}</span>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: '15px',
                  color: '#F16147',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                Read →
              </Link>
            </article>
          ))}

          {blogPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <h2 style={{ fontFamily: "'Baloo 2', system-ui, sans-serif", fontWeight: 700, fontSize: '24px', color: '#130D01', marginBottom: '16px' }}>No blog posts yet</h2>
              <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: '#6B6B6B' }}>Check back soon for our first articles!</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
