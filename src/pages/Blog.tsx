import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getBlogPost } from '../data/blogPosts';
import { BlogTypography, blogTypographyStyles } from '../components/BlogTypography';
import { MDXProvider } from '@mdx-js/react';
import { applyHead } from '@/seo/head';
import { blogPostMeta } from '@/seo/blog';
import { NOT_FOUND_META } from '@/seo/pages';

const Dot = () => (
  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#cbcbcb', display: 'inline-block', flexShrink: 0 }} />
);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const [ctaHovered, setCtaHovered] = useState(false);

  // Head tags come from the post's frontmatter (src/seo/blog.ts), the same
  // data the build uses to pre-render this page.
  useEffect(() => {
    applyHead(post ? blogPostMeta(post) : NOT_FOUND_META);
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
      <style dangerouslySetInnerHTML={{ __html: blogTypographyStyles }} />
      <Navbar />

      {/* Article */}
      <main className="flex-1">
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 96px' }}>
          {/* Eyebrow pill */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span style={{
              display: 'inline-block',
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#2D7A4F',
              background: '#EDF5DD',
              padding: '6px 18px',
              borderRadius: '999px',
              border: '1.5px solid #2D7A4F',
            }}>
              Field Notes · {post.category}
            </span>
          </div>

          {/* Title, centered, large, dark green */}
          <h1 style={{
            fontFamily: "'Baloo 2', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px, 6vw, 64px)',
            lineHeight: 1.1,
            color: '#1F5F3A',
            marginBottom: '28px',
            letterSpacing: '-0.01em',
            marginTop: 0,
            textAlign: 'center',
          }}>
            {post.title}
          </h1>

          {/* Deck / lede, centered */}
          <p style={{
            fontSize: '21px',
            lineHeight: 1.55,
            color: '#2a241a',
            marginBottom: '40px',
            fontWeight: 500,
            marginTop: 0,
            textAlign: 'center',
            maxWidth: '580px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {post.excerpt}
          </p>

          {/* Author pill card */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              border: '2px solid #130D01',
              borderRadius: '999px',
              boxShadow: '4px 4px 0 #130D01',
              padding: '8px 20px 8px 8px',
              background: '#ffffff',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#2D7A4F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: '16px',
                fontFamily: "'Outfit', sans-serif",
                flexShrink: 0,
              }}>
                {post.author[0]}
              </div>
              <div>
                <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: '15px', color: '#130D01', lineHeight: 1.2 }}>
                  {post.author} · Tumlet
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', color: '#6B6B6B', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })} · {post.readTime}
                </div>
              </div>
            </div>
          </div>

          {/* Cover image card */}
          {(post.coverImage || post.images?.[0]) && (
            <div style={{ marginBottom: '56px' }}>
              <img
                src={post.coverImage || post.images![0]}
                alt={post.title}
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  border: '3px solid #1F5F3A',
                  boxShadow: '8px 8px 0 #1F5F3A',
                  display: 'block',
                }}
              />
            </div>
          )}

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
              Tumlet makes Nepali board games: for Nepalis, by Nepalis.
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.5,
              color: '#130D01',
              marginBottom: '22px',
              marginTop: 0,
            }}>
              If you liked this, follow us. We hand-pack and sign the first run of every game.
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
