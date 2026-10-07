import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WHATSAPP_INVITE = 'https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE';
const MAKKUSE_URL = 'https://makkuse.store/';

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

const WaIcon = ({ color = '#fff' }: { color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ flex: 'none' }}>
    <path fill={color} d="M16.01 4C9.4 4 4.03 9.36 4.03 15.96c0 2.11.55 4.16 1.6 5.98L4 28l6.23-1.63a11.96 11.96 0 0 0 5.78 1.47h.01c6.6 0 11.97-5.36 11.97-11.96 0-3.2-1.25-6.2-3.5-8.46A11.9 11.9 0 0 0 16.01 4Zm5.46 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

const h2Style: React.CSSProperties = {
  fontFamily: "'Baloo 2', sans-serif",
  fontWeight: 800,
  fontSize: 'clamp(25px, 3.4vw, 33px)',
  margin: '52px 0 16px',
  color: '#130D01',
  letterSpacing: '-0.015em',
};

const h3Style: React.CSSProperties = {
  fontFamily: "'Baloo 2', sans-serif",
  fontWeight: 700,
  fontSize: 'clamp(19px, 2.3vw, 22px)',
  margin: '34px 0 12px',
  color: '#130D01',
};

const gamesPlayed = [
  'Bluff Momo',
  'Love Letter',
  'Race to Tundikhel',
  'Magical Athlete',
  'Codenames',
  'Two Rooms and a Boom',
  'Secret Hitler',
  'Herd Mentality',
  'Danger Danger',
  'Skull',
  'Cluedo',
];

const roundOnePrompts = [
  'Points for every coin you can give us',
  'Points for everyone under 10% battery',
  'Points for everyone wearing a ring',
  'Points for everyone wearing a hat',
];

const gallery = [
  { src: '/surface/surface-oct-2026-1.jpg', alt: 'Tumlet Game Night poster on an easel outside Surface Coffee & Co, Baneshwor' },
  { src: '/surface/surface-oct-2026-2.jpg', alt: "Players laughing over a card game beside Surface's bookshelf" },
  { src: '/surface/surface-oct-2026-3.jpg', alt: "A table playing cards on Surface's terrace at night" },
  { src: '/surface/surface-oct-2026-4.jpg', alt: "A group playing in Surface's concrete-walled back room" },
  { src: '/surface/surface-oct-2026-5.jpg', alt: 'Players standing around a game board at Surface' },
  { src: '/surface/surface-oct-2026-6.jpg', alt: 'Players leaning over a card game at Surface' },
  { src: '/surface/surface-oct-2026-7.jpg', alt: 'Two players laughing at Tumlet Game Night, Surface' },
  { src: '/surface/surface-oct-2026-8.jpg', alt: "The terrace table mid-game at Surface" },
  { src: '/surface/surface-oct-2026-9.jpg', alt: "Surface's back room, mid-game" },
];

const SurfaceGameNight = () => {
  React.useEffect(() => {
    const title = 'The Place That Designed Us a Menu · Surface, Oct 2026 | Tumlet';
    const description = 'Around 60 players at Surface Coffee & Co, Baneshwor, right before Dashain. Surface designed us a menu, and the final came down to coin tosses and Falas.';
    const image = 'https://tumlet.com/surface-october-2026-thumb.png';
    const url = 'https://tumlet.com/game-night/surface-october-2026/';

    document.title = title;
    setMetaTag('description', description);
    setCanonical(url);
    setPropertyTag('og:title', title);
    setPropertyTag('og:description', description);
    setPropertyTag('og:type', 'article');
    setPropertyTag('og:url', url);
    setPropertyTag('og:image', image);
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
  }, []);

  return (
    <div style={{
      background: '#ffffff',
      color: '#130D01',
      fontFamily: "'Baloo 2', system-ui, sans-serif",
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

        .gn-back:hover { color: #F16147 !important; }
        .gn-cta-btn:hover {
          transform: translate(-3px, -3px) !important;
          box-shadow: 9px 9px 0 0 #130D01 !important;
        }
      `}</style>

      <Navbar />

      <main style={{ maxWidth: 1020, margin: '0 auto', padding: '0 24px 96px' }}>

        {/* ── Back bar ── */}
        <div style={{ padding: '22px 0 0' }}>
          <Link
            to="/game-night"
            className="gn-back"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: '#130D01',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              gap: 6,
              alignItems: 'center',
              transition: 'color 0.15s',
            }}
          >
            ← All game nights
          </Link>
        </div>

        {/* ── Post header ── */}
        <header style={{ padding: '28px 0 0', maxWidth: 740, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
            {[
              { label: 'October 2026', filled: true },
              { label: 'Surface Coffee & Co', filled: false },
              { label: 'Recap', filled: false },
            ].map(tag => (
              <span key={tag.label} style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 11.5,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '5px 14px',
                borderRadius: 999,
                border: '2px solid #130D01',
                background: tag.filled ? '#F3B952' : 'transparent',
                color: '#130D01',
                whiteSpace: 'nowrap',
              }}>{tag.label}</span>
            ))}
          </div>

          <h1 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(30px, 5vw, 54px)',
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
            color: '#130D01',
            margin: '0 0 24px',
          }}>
            Tumlet Game Night: The Place That Designed Us a Menu
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: '#F3B952',
              border: '2px solid #130D01',
              display: 'grid',
              placeItems: 'center',
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 17,
              color: '#130D01',
              flex: 'none',
            }}>Y</div>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14 }}>Yashant Gyawali</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#7a6e60', marginTop: 2 }}>
                7 October 2026 · 3 min read
              </div>
            </div>
          </div>
        </header>

        {/* ── Cover photo ── */}
        <div style={{ margin: '36px 0 0' }}>
          <div style={{
            width: '100%',
            aspectRatio: '3234 / 1702',
            border: '3px solid #130D01',
            borderRadius: 16,
            boxShadow: '10px 10px 0 0 #F3B952',
            overflow: 'hidden',
          }}>
            <img
              src="/surface-october-2026-thumb.png"
              alt="Tumlet Game Night at Surface Coffee & Co, October 2026"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Facts box ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '4px 24px',
          background: '#F3B952',
          border: '2px solid #130D01',
          borderRadius: 16,
          padding: '22px 28px',
          boxShadow: '6px 6px 0 0 #130D01',
          margin: '44px auto 0',
          maxWidth: 680,
        }}>
          {[
            { k: 'Date', v: 'Wed, 7 Oct 2026' },
            { k: 'Where', v: 'Surface Coffee & Co, Baneshwor' },
            { k: 'Turnout', v: '~60 players' },
            { k: 'Top game', v: 'Bluff Momo' },
            { k: 'Entry', v: 'Free, as always' },
          ].map(item => (
            <div key={item.k} style={{ display: 'flex', gap: 10, alignItems: 'baseline', padding: '7px 0' }}>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                minWidth: 72,
                opacity: 0.6,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                flex: 'none',
              }}>{item.k}</span>
              <span style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontWeight: 700,
                fontSize: 16,
              }}>{item.v}</span>
            </div>
          ))}
        </div>

        {/* ── Article body ── */}
        <div style={{ maxWidth: 680, margin: '52px auto 0', fontSize: 18, lineHeight: 1.72, color: '#2a241a' }}>
          <p style={{ marginBottom: 20 }}>
            Surface is run by young people with a crazy eye for design, and they proved it before the first game started. They made us a menu just for game night and put it in a cute little standee.
          </p>
          <p style={{ marginBottom: 20 }}>
            The front says Game Night at Surface, Surface × Tumlet Board Games, and "The tables are full. The games are on." It has our logo, a collage of our characters behind it, and the café's coordinates printed down the side. As for the food: all sorts of fries.
          </p>

          <figure style={{ margin: '36px auto 40px', maxWidth: 340 }}>
            <div style={{
              border: '3px solid #130D01',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '6px 6px 0 0 #F3B952',
              aspectRatio: '9 / 16',
              transform: 'rotate(1deg)',
            }}>
              <img
                src="/surface/surface-oct-2026-menu.jpg"
                alt="The Game Night at Surface menu standee, designed by Surface with Tumlet's characters, next to a Bluff Momo tin"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                loading="lazy"
              />
            </div>
            <figcaption style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13.5,
              color: '#7a6e60',
              textAlign: 'center',
              marginTop: 16,
            }}>
              The menu standee Surface designed for the night.
            </figcaption>
          </figure>

          <p style={{ marginBottom: 20 }}>
            This one was right before Dashain, and around 60 people came out to play.
          </p>

          <h2 style={h2Style}>A cake called Matilda</h2>

          <p style={{ marginBottom: 20 }}>
            Surface was Sarina's find. She was there with friends one day when she spotted a huge chocolate cake called Matilda, named after the movie, and had to try it. She and Yashant decided game night had to happen here, so they reached out to the café, and the people behind it were super sweet. We'd planned it for a month earlier, but one of the owners was outside the Valley and something came up on our side too, so we waited, and we made it happen.
          </p>

          <h2 style={h2Style}>Sixty players down to one, on pure luck</h2>

          <p style={{ marginBottom: 20 }}>
            We wanted the night to feel like Dashain was around the corner. So for the second half, when the whole room plays one game together, we went Beast-style again: around 60 people down to a single winner. This time every round was ridiculously luck-based.
          </p>

          <h3 style={h3Style}>Round 1: empty your pockets</h3>
          <p style={{ marginBottom: 16 }}>
            Everyone sat in groups of four, five or six, mostly with whoever they came with. We read out prompts, and each one turned into points:
          </p>
          <ul style={{ paddingLeft: 22, margin: '0 0 20px', listStyle: 'disc' }}>
            {roundOnePrompts.map(prompt => (
              <li key={prompt} style={{ marginBottom: 6 }}>{prompt}</li>
            ))}
          </ul>
          <p style={{ marginBottom: 20 }}>
            The coin prompt got out of hand. One guy had coins from the US, from Dubai, and from parts of the world none of us could place, and his team walked out of round one with 12 or 13 points. Only three teams made it through.
          </p>

          <h3 style={h3Style}>Round 2: heads or tails</h3>
          <p style={{ marginBottom: 20 }}>
            Everyone still in found a partner for a single coin toss. Whoever called it right went through, one person per pair.
          </p>

          <h3 style={h3Style}>The final: Falas</h3>
          <p style={{ marginBottom: 20 }}>
            We wrapped up with Falas, the classic Nepali Dashain card game.{' '}
            <a
              href={MAKKUSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F16147', textDecoration: 'underline' }}
            >
              Makkusé
            </a>{' '}
            sponsored the prize: their Dashain set, which comes in a really cute box shaped like a changa (kite), with their signature pustakari inside. The winner took that home. We also had an unlucky pustakari box, which went to whoever had the worst luck in Falas.
          </p>

          <figure style={{ margin: '36px auto 40px', maxWidth: 300 }}>
            <div style={{
              border: '3px solid #130D01',
              borderRadius: 20,
              overflow: 'hidden',
              background: '#1c1812',
              boxShadow: '6px 6px 0 0 #F3B952',
              aspectRatio: '9 / 16',
              transform: 'rotate(-1deg)',
            }}>
              <video
                src="/surface/makkuse-dashain.mp4"
                poster="/surface/makkuse-dashain-poster.jpg"
                muted
                controls
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <figcaption style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13.5,
              color: '#7a6e60',
              textAlign: 'center',
              marginTop: 16,
            }}>
              The Makkusé Dashain set our Falas winner took home. More at{' '}
              <a
                href={MAKKUSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#F16147', textDecoration: 'underline' }}
              >
                makkuse.store
              </a>
              .
            </figcaption>
          </figure>

          <h2 style={h2Style}>Everything on the table</h2>

          <p style={{ marginBottom: 20 }}>
            <Link to="/bluff-momo-rules" style={{ color: '#F16147', textDecoration: 'underline' }}>Bluff Momo</Link> was the game of the night. Here's everything that got played:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
            {gamesPlayed.map(game => (
              <span key={game} style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                color: '#130D01',
                background: '#F3B952',
                border: '2px solid #130D01',
                borderRadius: 999,
                padding: '6px 18px',
                whiteSpace: 'nowrap',
              }}>{game}</span>
            ))}
          </div>
        </div>

        {/* ── Hosting notes ── */}
        <div style={{ maxWidth: 680, margin: '56px auto 0' }}>
          <div style={{
            background: '#FAF1E4',
            border: '2px solid #130D01',
            borderRadius: 16,
            padding: '28px 32px',
            boxShadow: '6px 6px 0 0 #F3B952',
          }}>
            <h3 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 21,
              margin: '0 0 18px',
              color: '#130D01',
            }}>What we loved about Surface (and one thing we didn't)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { num: '01', strong: 'A cute, intentional space.', rest: ' Every corner feels thought through.' },
                { num: '02', strong: 'Fun, kind people.', rest: ' The staff smiled every single time you looked at them.' },
                { num: '03', strong: 'The design team is crazy good.', rest: ' They designed the game night menu with our characters and our logo on it.' },
                { num: '04', strong: 'Easy for bikes, tight for cars.', rest: " There's underground parking, but it isn't very spacious and it's usually full. Bikes have plenty of room." },
                { num: '05', strong: "It's split into zones.", rest: " Walls, glass and pillars divide the café, and each part has its own vibe. We usually like one open floor for game night, so it wasn't built for how we run things. We made it work anyway, so kudos to the Surface team, and to us." },
              ].map(item => (
                <div key={item.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize: 17,
                    color: '#F16147',
                    lineHeight: 1.5,
                    flex: 'none',
                    width: 26,
                  }}>{item.num}</span>
                  <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 15.5, lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ fontWeight: 700 }}>{item.strong}</strong>{item.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Recap reel ── */}
        <div style={{ margin: '72px 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 26,
              margin: 0,
              color: '#130D01',
              whiteSpace: 'nowrap',
            }}>The night, in a reel</h2>
            <div style={{ flex: 1, height: 3, background: '#130D01', borderRadius: 2 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#7a6e60',
              whiteSpace: 'nowrap',
            }}>Oct 7, 2026</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 'min(300px, 78vw)',
              border: '3px solid #130D01',
              borderRadius: 20,
              overflow: 'hidden',
              background: '#FAF1E4',
              boxShadow: '8px 8px 0 #F3B952',
              transform: 'rotate(-1.5deg)',
            }}>
              <div style={{ width: '100%', aspectRatio: '9/16', overflow: 'hidden', background: '#1c1812' }}>
                <video
                  src="/surface/recap.mp4"
                  poster="/surface/recap-poster.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Photo gallery ── */}
        <div style={{ margin: '72px 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 26,
              margin: 0,
              color: '#130D01',
              whiteSpace: 'nowrap',
            }}>The night, in photos</h2>
            <div style={{ flex: 1, height: 3, background: '#130D01', borderRadius: 2 }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}>
            {gallery.map(photo => (
              <div key={photo.src} style={{
                border: '3px solid #130D01',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '6px 6px 0 0 #F3B952',
                aspectRatio: '3 / 4',
              }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <section style={{
          background: '#F16147',
          border: '3px solid #130D01',
          borderRadius: 20,
          padding: '44px 36px',
          textAlign: 'center',
          boxShadow: '10px 10px 0 0 #F3B952',
          margin: '72px 0 0',
        }}>
          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(24px, 3.4vw, 34px)',
            color: '#fff',
            margin: '0 0 10px',
            lineHeight: 1.12,
          }}>
            Next one's already being planned.
          </h2>
          <p style={{ fontSize: 17, color: '#fff', margin: '0 0 28px', opacity: 0.95 }}>
            Join the WhatsApp community: that's where the next date and venue drop first, and nowhere else.
          </p>
          <a
            href={WHATSAPP_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="gn-cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#F3B952',
              color: '#130D01',
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              padding: '14px 36px',
              borderRadius: 12,
              border: '2.5px solid #130D01',
              boxShadow: '6px 6px 0 0 #130D01',
              textDecoration: 'none',
              transition: 'transform 0.18s ease, box-shadow 0.15s ease',
            }}
          >
            <WaIcon color="#130D01" />
            Join the WhatsApp community
          </a>
        </section>

        {/* ── Footer link ── */}
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link
            to="/game-night"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: '#F16147',
              textDecoration: 'underline',
              letterSpacing: '0.02em',
            }}
          >
            ← Back to all game nights
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default SurfaceGameNight;
