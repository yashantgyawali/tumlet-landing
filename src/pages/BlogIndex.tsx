import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAllBlogPosts } from '../data/blogPosts';
import { pastNights } from '../data/gameNights';

const FALLBACK_IMAGE = '/unfurl.png';

type BlogListItem = {
  key: string;
  href: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
};

const CategoryPill = ({ category }: { category: string }) => {
  const isGameNight = category === 'Game Night';
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: "'Outfit', system-ui, sans-serif",
      fontWeight: 700,
      fontSize: '12px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase' as const,
      color: isGameNight ? '#130D01' : '#F16147',
      background: isGameNight ? '#F3B952' : '#FDE8E4',
      border: isGameNight ? '2px solid #130D01' : 'none',
      padding: isGameNight ? '3px 12px' : '4px 12px',
      borderRadius: '999px',
    }}>
      {category}
    </span>
  );
};

const PostMeta = ({ post }: { post: BlogListItem }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '8px',
    fontFamily: "'Outfit', system-ui, sans-serif",
    fontSize: '13px',
    color: '#6B6B6B',
  }}>
    <span>By {post.author}</span>
    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#cbcbcb', display: 'inline-block', flexShrink: 0 }} />
    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })}</span>
    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#cbcbcb', display: 'inline-block', flexShrink: 0 }} />
    <span>{post.readTime}</span>
  </div>
);

const BlogIndex = () => {
  const blogPosts: BlogListItem[] = [
    ...getAllBlogPosts().map((post) => ({
      key: post.slug,
      href: `/blog/${post.slug}/`,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      author: post.author,
      publishedAt: post.publishedAt,
      readTime: post.readTime,
      image: post.coverImage || FALLBACK_IMAGE,
    })),
    ...pastNights.map((night) => ({
      key: night.id,
      href: night.href,
      title: night.title,
      excerpt: night.desc,
      category: 'Game Night',
      author: 'Yashant',
      publishedAt: night.publishedAt,
      readTime: night.readTime,
      image: night.thumbnail || FALLBACK_IMAGE,
    })),
  ].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const FEATURED_SLUG = 'how-i-built-race-to-tundikhel';
  const featured = blogPosts.find((post) => post.key === FEATURED_SLUG) || blogPosts[0];
  const rest = blogPosts.filter((post) => post !== featured);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#ffffff', color: '#130D01', fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-featured-card { display: flex; flex-direction: column; }
        .blog-featured-media { width: 100%; }
        .blog-featured-media img { aspect-ratio: 16 / 10; }
        .blog-featured-body { padding: 28px 28px 32px; }
        @media (min-width: 860px) {
          .blog-featured-card { flex-direction: row; align-items: stretch; }
          .blog-featured-media { width: 46%; flex: none; }
          .blog-featured-media img { aspect-ratio: auto; height: 100%; }
          .blog-featured-body { width: 54%; padding: 40px 44px; display: flex; flex-direction: column; justify-content: center; }
        }
        .blog-grid { display: grid; grid-template-columns: 1fr; gap: 28px; }
        @media (min-width: 700px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
        }
        .blog-card { transition: transform .2s ease, box-shadow .2s ease; }
        .blog-card:hover, .blog-featured-card:hover {
          transform: translate(-3px, -3px);
        }
        .blog-card:hover { box-shadow: 10px 10px 0 #F3B952 !important; }
        .blog-featured-card:hover { box-shadow: 12px 12px 0 #F16147 !important; }
        .blog-card-excerpt {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      ` }} />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-[1180px] mx-auto px-6 pt-16 pb-12">
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
            Stories about Nepali games and play.
          </p>
        </section>

        {featured && (
          <section className="max-w-[1180px] mx-auto px-6 mb-16">
            <Link
              to={featured.href}
              className="blog-featured-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                background: '#fff',
                border: '3px solid #130D01',
                borderRadius: '20px',
                boxShadow: '10px 10px 0 #F16147',
                overflow: 'hidden',
              }}
            >
              <div className="blog-featured-media">
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{ width: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
              </div>
              <div className="blog-featured-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{
                    display: 'inline-block',
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#1F5F3A',
                    background: '#EDF5DD',
                    border: '1.5px solid #2D7A4F',
                    padding: '3px 12px',
                    borderRadius: '999px',
                  }}>
                    Featured
                  </span>
                  <CategoryPill category={featured.category} />
                </div>
                <h2 style={{
                  fontFamily: "'Baloo 2', system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.6vw, 42px)',
                  color: '#130D01',
                  lineHeight: 1.12,
                  margin: '0 0 14px 0',
                  letterSpacing: '-0.01em',
                }}>
                  {featured.title}
                </h2>
                <p style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontSize: '17px',
                  color: '#4B5563',
                  lineHeight: 1.6,
                  margin: '0 0 20px 0',
                }}>
                  {featured.excerpt}
                </p>
                <div style={{ marginBottom: '20px' }}>
                  <PostMeta post={featured} />
                </div>
                <span style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: '15px',
                  color: '#F16147',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}>
                  Read →
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* Grid */}
        <section className="max-w-[1180px] mx-auto px-6 pb-24">
          {rest.length > 0 && (
            <h2 style={{
              fontFamily: "'Baloo 2', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(22px, 2.6vw, 30px)',
              color: '#130D01',
              margin: '0 0 28px 0',
            }}>
              More stories
            </h2>
          )}

          <div className="blog-grid">
            {rest.map((post) => (
              <Link
                key={post.key}
                to={post.href}
                className="blog-card"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  background: '#fff',
                  border: '3px solid #130D01',
                  borderRadius: '16px',
                  boxShadow: '7px 7px 0 #F3B952',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
                <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                  <div style={{ marginBottom: '2px' }}>
                    <CategoryPill category={post.category} />
                  </div>

                  <h3 style={{
                    fontFamily: "'Baloo 2', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: '22px',
                    color: '#130D01',
                    lineHeight: 1.2,
                    margin: 0,
                  }}>
                    {post.title}
                  </h3>

                  <p className="blog-card-excerpt" style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: '15.5px',
                    color: '#4B5563',
                    lineHeight: 1.55,
                    margin: 0,
                    flex: 1,
                  }}>
                    {post.excerpt}
                  </p>

                  <PostMeta post={post} />

                  <span style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: '14.5px',
                    color: '#F16147',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}>
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <h2 style={{ fontFamily: "'Baloo 2', system-ui, sans-serif", fontWeight: 700, fontSize: '24px', color: '#130D01', marginBottom: '16px' }}>No blog posts yet</h2>
              <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: '#6B6B6B' }}>Our first articles are coming soon.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
