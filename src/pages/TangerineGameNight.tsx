import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WHATSAPP_INVITE = 'https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE';
const TANGERINE_MENU = 'https://www.tangerinebrunchandbar.com/menus';

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
  'Skull',
  'Love Letter',
  'Race to Tundikhel',
  'Bluff Momo',
  'Secret Hitler',
  'Scout',
  'Danger Danger',
  'Cluedo',
  'Magical Athlete',
];

const TangerineGameNight = () => {
  React.useEffect(() => {
    const title = 'The Place That Feels Like Narnia · Tangerine, Sep 2026 | Tumlet';
    const description = "Around 60 players packed into Tangerine Brunch & Bar in Bakhundole, our least-advertised game night yet. Guess the Price got a twist, Skull won the room.";
    const image = 'https://tumlet.com/tangerine-september-2026-thumb.png';
    const url = 'https://tumlet.com/game-night/tangerine-september-2026/';

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
              { label: 'September 2026', filled: true },
              { label: 'Tangerine Brunch & Bar', filled: false },
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
            Tumlet Game Night: The Place That Feels Like Narnia
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
                9 September 2026 · 3 min read
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
              src="/tangerine-september-2026-thumb.png"
              alt="Tumlet Game Night at Tangerine Brunch & Bar, Bakhundole, September 2026"
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
            { k: 'Date', v: 'Wed, 9 Sep 2026' },
            { k: 'Where', v: 'Tangerine Brunch & Bar, Bakhundole' },
            { k: 'Turnout', v: '~60 players' },
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
            If you've ever walked past Bakhundole, you've probably seen{' '}
            <a
              href={TANGERINE_MENU}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F16147', textDecoration: 'underline' }}
            >
              Tangerine
            </a>{' '}
            without really seeing it. It's the kind of place you register from the outside and keep walking past, month after month, until one day you actually go in.
          </p>
          <p style={{ marginBottom: 20 }}>
            That's exactly what happened to us. And once you're through the door, the place opens right up. It's got a bit of a Narnia effect: small from the street, then suddenly a whole world once you step in.
          </p>
          <p style={{ marginBottom: 20 }}>
            We barely advertised this one. Slots still filled up faster than any game night we've run, and about 60 people showed up to play, matching our biggest turnout yet. Thank you to everyone who came out.
          </p>
          <p style={{ marginBottom: 20 }}>
            This easily became one of our favorite game nights so far. Cute space, good crowd, and it kept getting funnier as the night went on.
          </p>

          <h2 style={h2Style}>Guess the Price, now with chura and sanitary pads</h2>

          <p style={{ marginBottom: 20 }}>
            We brought back Guess the Price, one of our most-loved games, with a twist this time around: chura and sanitary pads went into the lineup of items.
          </p>
          <p style={{ marginBottom: 20 }}>
            Only the guys in the room got to guess. Nilesh took both rounds. Still not sure if that means he does the household shopping or just got lucky twice.
          </p>

          <h2 style={h2Style}>Skull steals the night</h2>

          <p style={{ marginBottom: 20 }}>
            First time we've brought Skull to a game night, and it walked straight into game of the night. Full of bluffs, dares, and constant second-guessing, it was an instant hit at every table that picked it up.
          </p>

          <h2 style={h2Style}>Everything on the table</h2>

          <p style={{ marginBottom: 20 }}>
            Between the regulars and a few debuts, here's what got played:
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
            ...and a few more we're still trying to remember the names of.
          </p>
        </div>

        {/* ── Why it worked ── */}
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
            }}>Why Tangerine worked</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { num: '01', strong: 'Sixty people, barely any advertising.', rest: ' Slots filled up faster than any game night we\'ve run, without us pushing it.' },
                { num: '02', strong: 'Bigger on the inside.', rest: ' A quiet spot from the street in Bakhundole that opens into a genuinely huge space once you\'re in.' },
                { num: '03', strong: 'Guess the Price got a twist.', rest: ' Chura and sanitary pads joined the guessing lineup, guys-only round, and Nilesh swept both.' },
                { num: '04', strong: 'Skull debuted as game of the night.', rest: ' First appearance at a game night, and it was an instant favorite.' },
                { num: '05', strong: 'One of our favorite nights yet.', rest: ' The space, the crowd, and the games all came together.' },
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
            {[
              '/tangerine/tangerine-sept-2026-1.jpg',
              '/tangerine/tangerine-sept-2026-3.jpg',
              '/tangerine/tangerine-sept-2026-4.jpg',
              '/tangerine/tangerine-sept-2026-5.jpg',
              '/tangerine/tangerine-sept-2026-6.jpg',
              '/tangerine/tangerine-sept-2026-2.jpg',
              '/tangerine/tangerine-sept-2026-7.jpg',
              '/tangerine/tangerine-sept-2026-8.jpg',
            ].map(src => (
              <div key={src} style={{
                border: '3px solid #130D01',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '6px 6px 0 0 #F3B952',
                aspectRatio: '3 / 4',
              }}>
                <img
                  src={src}
                  alt="Tumlet Game Night at Tangerine Brunch & Bar, September 2026"
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

export default TangerineGameNight;
