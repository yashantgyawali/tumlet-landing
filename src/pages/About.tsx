import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const aboutText = [
  "Play runs deep in our culture. We see it during Holi when we're throwing colors, in card games during Dashain, in playing Bhailo in Tihar. It's there.",
  "And is it only during festivals? Not really.",
  "When we go on trips with friends, to Nagarkot or anywhere else, we often carry games. Usually UNO, Jenga, or something similar. All fun, but all foreign. “कति गेम्सको त slangs पनि बुझ्दैन and can't really relate to them.” Because it was not made for Nepali people.",
  "This is where we see the gap.",
  "Where are the Nepali board games? They're almost non-existent. There are a few options, but they are targeted towards kids. And if you're a young Nepali living abroad, you can easily buy international games, but not a single one that feels like home.",
  "So when it comes to board games, we hit a wall  🚧",
  "And we want to change that.",
  "",
  "We are a Nepali board game company, plain and simple.",
  "We're from here. Our games are too.",
  "We also bring games to offices and host corporate game nights for teams who want to connect and have fun together.",
  "We pull from the way we joke. The way we argue. The way we play. We put it into cards, pieces, rules, and laughter.",
  "We're not perfect. We don't want to be.",
  "",
  "We just want to make something that feels like home.",
  "",
  "That's Tumlet.",
  "A Nepali board game company, trying to take you back to your childhood."
];

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

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  useEffect(() => {
    document.title = "About Us | Tumlet - Nepali board game company";
    setMetaTag('description', 'Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.');
    setCanonical('https://tumlet.com/about');
    setPropertyTag('og:title', 'About Us | Tumlet - Nepali board game company');
    setPropertyTag('og:description', 'Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/about');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'About Us | Tumlet - Nepali board game company');
    setMetaTag('twitter:description', 'Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.');
    setMetaTag('twitter:image', 'https://tumlet.com/tumlet-logo.png');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Baloo 2', system-ui, sans-serif", color: '#130D01' }}>
      <Navbar />

      <main className="flex-1">

        {/* ── FOUNDER CARDS ── */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '64px 24px 0' }}>
          <div className="founder-cards-row" style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', alignItems: 'flex-end', position: 'relative' }}>

            {/* Yashant card */}
                <div
                  className={`founder-card-yashant${hoveredCard === 'yashant' ? ' founder-card-top' : ''}`}
                  style={{
                    transform: 'rotate(-2deg)',
                    flexShrink: 0,
                    zIndex: hoveredCard === 'yashant' ? 10 : 2,
                    position: 'relative',
                    transition: 'margin 0.2s',
                  }}
                  onMouseEnter={() => setHoveredCard('yashant')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
              <div style={{
                border: '3px solid #130D01',
                borderRadius: 20,
                boxShadow: '8px 8px 0 #F3B952',
                overflow: 'hidden',
                background: '#FAF1E4',
              }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  background: '#E5E7EB',
                  overflow: 'hidden',
                }}>
                  <img
                    src="/about/yashant.webp"
                    alt="Yashant Gyawali"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <div style={{ padding: '16px 18px 18px' }}>
                  <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 18, color: '#130D01' }}>Yashant Gyawali</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6B6B6B', marginTop: 2 }}>Co-founder · Tumlet</div>
                </div>
              </div>
            </div>

            {/* Sarina card */}
                <div
                  className={`founder-card-sarina${hoveredCard === 'sarina' ? ' founder-card-top' : ''}`}
                  style={{
                    transform: 'rotate(1.5deg)',
                    flexShrink: 0,
                    marginBottom: 24,
                    zIndex: hoveredCard === 'sarina' ? 10 : 1,
                    position: 'relative',
                    transition: 'margin 0.2s',
                  }}
                  onMouseEnter={() => setHoveredCard('sarina')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
              <div style={{
                border: '3px solid #130D01',
                borderRadius: 20,
                boxShadow: '8px 8px 0 #F16147',
                overflow: 'hidden',
                background: '#FAF1E4',
              }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  background: '#E5E7EB',
                  overflow: 'hidden',
                }}>
                  <img
                    src="/about/sarina.webp"
                    alt="Sarina Pantha"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <div style={{ padding: '16px 18px 18px' }}>
                  <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 18, color: '#130D01' }}>Sarina Pantha</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6B6B6B', marginTop: 2 }}>Co-founder · Tumlet</div>
                </div>
              </div>
            </div>

          </div>
          {/* Responsive style for founder cards overlap on mobile */}
              <style>{`
                .founder-card-top {
                  z-index: 10 !important;
                  box-shadow: 0 8px 32px #0002 !important;
                }
                @media (max-width: 700px) {
                  .founder-cards-row {
                    flex-wrap: nowrap !important;
                    justify-content: center !important;
                    gap: 0 !important;
                  }
                  .founder-card-yashant {
                    margin-right: -60px !important;
                    z-index: 2;
                  }
                  .founder-card-sarina {
                    margin-left: -60px !important;
                    z-index: 1;
                  }
                  .founder-card-top {
                    z-index: 10 !important;
                  }
                }
              `}</style>
        </section>

        {/* ── STORY TEXT ── */}
        <section style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 0' }}>
          <h1 style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 'clamp(40px, 6vw, 60px)', letterSpacing: '-0.01em', color: '#130D01', marginBottom: 56, marginTop: 0 }}>
            We're Tumlet.
          </h1>

          {aboutText.map((line, i) => {
            if (line.trim() === "") {
              return <div key={i} style={{ height: 40 }} />;
            }
            if (line.includes("Where are the Nepali board games?")) {
              const parts = line.split("Nepali board games");
              return (
                <p key={i} style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', lineHeight: 1.65, color: '#130D01', marginBottom: 32, marginTop: 0 }}>
                  {parts[0]}
                  <Link to="/blog/best-nepali-board-games" style={{ textDecoration: 'underline', color: '#F16147' }}>
                    Nepali board games
                  </Link>
                  {parts[1]}
                </p>
              );
            }
            if (line.includes("corporate game nights")) {
              const parts = line.split("corporate game nights");
              return (
                <p key={i} style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', lineHeight: 1.65, color: '#130D01', marginBottom: 32, marginTop: 0 }}>
                  {parts[0]}
                  <Link to="/corporate-game-night" style={{ textDecoration: 'underline', color: '#F16147' }}>
                    corporate game nights
                  </Link>
                  {parts[1]}
                </p>
              );
            }
            return (
              <p key={i} style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', lineHeight: 1.65, color: '#130D01', marginBottom: 32, marginTop: 0 }}>
                {line}
              </p>
            );
          })}

          <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: '#6B6B6B', marginTop: 48 }}>
            — Sarina Pantha &amp; Yashant Gyawali
          </p>
        </section>

        {/* ── PODCAST SECTION ── */}
        <section style={{ maxWidth: 760, margin: '80px auto 96px', padding: '0 24px' }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{
              display: 'inline-block',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F16147',
              background: '#FDE8E4',
              padding: '6px 14px',
              borderRadius: 999,
              marginBottom: 16,
            }}>
              Watch us
            </span>
            <h2 style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 'clamp(24px, 3vw, 36px)', color: '#130D01', margin: 0, lineHeight: 1.2 }}>
              Catch us on a podcast.
            </h2>
          </div>

          <a
            href="https://www.youtube.com/watch?v=3YyEpIA8FfY&t=597s"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <div style={{
              border: '3px solid #130D01',
              borderRadius: 16,
              boxShadow: '8px 8px 0 #130D01',
              overflow: 'hidden',
              transform: 'rotate(-0.5deg)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.5deg) translate(-4px,-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.5deg)')}
            >
              <img
                src="https://img.youtube.com/vi/3YyEpIA8FfY/maxresdefault.jpg"
                alt="Bluff or Not? — Tumlet on YouTube"
                style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
              />
              <div style={{ background: '#FAF1E4', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 16, color: '#130D01' }}>Bluff or Not?</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6B6B6B' }}>Watch on YouTube →</div>
                </div>
                <div style={{
                  background: '#F16147',
                  color: 'white',
                  fontFamily: "'Baloo 2', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: '8px 16px',
                  borderRadius: 8,
                  boxShadow: '3px 3px 0 #130D01',
                  flexShrink: 0,
                }}>
                  ▶ Watch
                </div>
              </div>
            </div>
          </a>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;

