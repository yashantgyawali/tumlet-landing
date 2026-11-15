import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WHATSAPP_INVITE = 'https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE';
const SPARK_URL = 'https://www.seekdiscomfort.com/products/spark-by-seek-discomfort-2nd-edition';
const BOARDGAMES_NEPAL_URL = 'https://boardgamenepal.com/';
const THE_LAB_URL = 'https://www.instagram.com/thelab_np/';

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

const linkStyle: React.CSSProperties = { color: '#F16147', textDecoration: 'underline' };

const gamesPlayed = [
  'Bluff Momo',
  'Scout',
  'Race to Tundikhel',
  'Secret Hitler',
  'Firiri',
  'Taco Cat Goat Cheese Pizza',
  'Codenames',
  'Flip 7',
  'Magical Athlete',
];

const gallery = [
  { src: '/the-lab/the-lab-nov-2026-1.jpg', alt: 'The Lab sign on the vinyl wall at The Lab, Labim Mall' },
  { src: '/the-lab/the-lab-nov-2026-2.jpg', alt: 'A player hiding her face behind a fan of cards' },
  { src: '/the-lab/the-lab-nov-2026-3.jpg', alt: 'A crowded table leaning over a board game under warm lamps' },
  { src: '/the-lab/the-lab-nov-2026-4.jpg', alt: 'A player laughing by the bar at The Lab' },
  { src: '/the-lab/the-lab-nov-2026-5.jpg', alt: 'A player grinning across the table under a lamp' },
  { src: '/the-lab/the-lab-nov-2026-6.jpg', alt: 'Two players throwing peace signs from the couch' },
  { src: '/the-lab/the-lab-nov-2026-7.jpg', alt: 'Two friends posing in front of the fairy-light windows' },
  { src: '/the-lab/the-lab-nov-2026-8.jpg', alt: 'Arms in the air in the middle of the room' },
  { src: '/the-lab/the-lab-nov-2026-9.jpg', alt: 'The DJ spinning vinyl in front of the record wall' },
];

const TheLabGameNight = () => {
  React.useEffect(() => {
    const title = 'We Took It to The Lab · The Lab, Nov 2026 | Tumlet';
    const description = '65+ players at The Lab, a cocktail and vinyl bar in Labim Mall. Our biggest game night yet, Poker Momo came back, and Magical Athlete won the crowd.';
    const image = 'https://tumlet.com/the-lab-november-2026-thumb.webp';
    const url = 'https://tumlet.com/game-night/the-lab-november-2026/';

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
              { label: 'November 2026', filled: true },
              { label: 'The Lab', filled: false },
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
            Tumlet Game Night: We Took It to The Lab
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
                15 November 2026 · 3 min read
              </div>
            </div>
          </div>
        </header>

        {/* ── Cover ── */}
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
              src="/the-lab-november-2026-thumb.webp"
              alt="Tumlet Game Night at The Lab, Labim Mall, 4 November 2026"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
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
            { k: 'Date', v: 'Wed, 4 Nov 2026' },
            { k: 'Where', v: 'The Lab, Labim Mall' },
            { k: 'Turnout', v: '65+ players (a record)' },
            { k: 'Top game', v: 'Magical Athlete' },
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
            For November we took game night to{' '}
            <a href={THE_LAB_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              The Lab
            </a>
            , a cocktail and vinyl bar in Labim Mall. It's a beautiful place, with a wall of records behind the DJ and a bar that glows at night. Since it's a bar, we figured the night should get a little tipsy.
          </p>
          <p style={{ marginBottom: 20 }}>
            More than 65 people came. That's the highest turnout we've ever had.
          </p>

          <h2 style={h2Style}>A reunion with our Spark cards</h2>

          <p style={{ marginBottom: 20 }}>
            I picked up a deck of{' '}
            <a href={SPARK_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Spark conversation cards
            </a>{' '}
            when I was in the States. I love Yes Theory and what they stand for, so I had to get it. After that it lived in my backpack and came with me everywhere.
          </p>
          <p style={{ marginBottom: 20 }}>
            Then Chau borrowed it, and the deck ended up at The Lab. On game night we got it back, so the night doubled as a little reunion for The Lab and our Spark cards. The bartender bhai told us a lot of people had really enjoyed it while it was there. Two people even cried while answering a prompt to each other.
          </p>
          <p style={{ marginBottom: 20 }}>
            After hearing that, we left Spark at the bar. It's sitting at The Lab now, waiting for the next good conversation.
          </p>

          <figure style={{ margin: '36px auto 40px', maxWidth: 340 }}>
            <div style={{
              border: '3px solid #130D01',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '6px 6px 0 0 #F3B952',
              aspectRatio: '3 / 4',
              transform: 'rotate(1deg)',
            }}>
              <img
                src="/the-lab/the-lab-nov-2026-bartender.jpg"
                alt="A bartender at The Lab holding up a bottle of bourbon"
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
              Behind the bar at The Lab.
            </figcaption>
          </figure>

          <h2 style={h2Style}>Board Game Nepal came to play</h2>

          <p style={{ marginBottom: 20 }}>
            Our friends from{' '}
            <a href={BOARDGAMES_NEPAL_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Board Game Nepal
            </a>{' '}
            were there and brought so much energy to the room. They also brought a really cool collection of games. If you're looking to buy board games in Nepal, they have great quality at very fair prices, so hit them up.
          </p>

          <h2 style={h2Style}>Everything on the table</h2>

          <p style={{ marginBottom: 20 }}>
            Magical Athlete was the crowd's new favorite. We also learned that Firiri gets very, very chaotic once you have 12 or more players. Here's everything that got played:
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
          <p style={{ marginBottom: 20 }}>
            New to <Link to="/bluff-momo-rules" style={linkStyle}>Bluff Momo</Link> or <Link to="/tundikhel" style={linkStyle}>Race to Tundikhel</Link>? Both are ours, and the rules are up on the site.
          </p>

          <h2 style={h2Style}>We brought back Poker Momo</h2>

          <p style={{ marginBottom: 20 }}>
            Poker Momo was our game for the second half, when the whole room plays one game together.
          </p>
          <p style={{ marginBottom: 20 }}>
            Every team starts with 10 momos. Each round, teams secretly put in as many as they want, and whoever puts in the most wins the round. Win two rounds and you win the game. The catch: if you put momos in and lose, you don't get them back. And we only ever revealed the winning team's number.
          </p>
          <p style={{ marginBottom: 20 }}>
            It was the highlight of the night. The team that won lost the first round on a 4-momo tie. After that they put in just 1 momo every round, and they won the last two rounds with a single momo each.
          </p>
          <p style={{ marginBottom: 20 }}>
            They celebrated with free shots from The Lab.
          </p>

          <h2 style={h2Style}>Thank you</h2>

          <p style={{ marginBottom: 20 }}>
            Huge thanks to Chau, to The Lab, and to Board Game Nepal for making this game night such a success.
          </p>
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
            }}>Nov 4, 2026</span>
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
                  src="/the-lab/recap.mp4"
                  poster="/the-lab/recap-poster.jpg"
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
            Join the WhatsApp community. The next date and venue are posted there first, and nowhere else.
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

export default TheLabGameNight;
