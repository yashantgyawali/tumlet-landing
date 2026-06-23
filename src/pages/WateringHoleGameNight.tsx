import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WHATSAPP_INVITE = 'https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE';
const ACCENT = '#F16147';

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

const PolaroidSlot = ({
  rotation,
  caption,
  dark = true,
  src,
  alt,
}: {
  rotation: string;
  caption: string;
  dark?: boolean;
  src?: string;
  alt?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: '#f5f1ea',
        padding: '10px 10px 48px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.09)',
        transform: hovered ? 'rotate(0deg) scale(1.03)' : `rotate(${rotation})`,
        transition: 'transform 0.22s ease, box-shadow 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        height: 340,
        boxSizing: 'border-box',
        cursor: 'default',
        zIndex: hovered ? 10 : 1,
        position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        flex: 1,
        overflow: 'hidden',
        background: dark
          ? 'linear-gradient(135deg, #1c1812 0%, #272017 100%)'
          : 'linear-gradient(135deg, #e8dece 0%, #d0c4ae 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        {src
          ? <img src={src} alt={alt || caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(1) contrast(1.08)' }} />
          : (
            <span style={{
              color: dark ? 'rgba(255,255,255,0.14)' : '#9e9080',
              fontSize: 11,
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Photo coming soon
            </span>
          )
        }
      </div>
      <p style={{
        fontFamily: "'Permanent Marker', cursive",
        fontSize: 13,
        color: '#130D01',
        textAlign: 'center',
        margin: '14px 0 0',
        lineHeight: 1.3,
      }}>
        {caption}
      </p>
    </div>
  );
};

const WateringHoleGameNight = () => {
  useEffect(() => {
    const title = 'At the Heart of Jhamsikhel · The Watering Hole, May 2026 | Tumlet Game Night';
    const description = "Our highest attendance yet — 35+ players, new faces, Bluff Momo all night, a Catan group that never played Catan, and Guess the Price (Nepali Edition) to close it out. A recap of Tumlet Game Night at The Watering Hole, Jhamsikhel.";
    const image = 'https://tumlet.com/watering-hole-may-2026-thumb.webp';
    const url = 'https://tumlet.com/game-night/watering-hole-may-2026/';

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

        @media (min-width: 700px) {
          .gn-gallery {
            display: flex !important;
            flex-wrap: wrap;
            justify-content: center;
            gap: 28px;
          }
          .gn-gallery > div {
            width: calc(30% - 14px);
          }
        }

        @media (max-width: 699px) {
          .gn-gallery {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }
          .gn-gallery > div {
            width: 82%;
          }
        }

        .gn-back:hover { color: ${ACCENT} !important; }
        .gn-cta-btn:hover {
          transform: translate(-3px, -3px) !important;
          box-shadow: 9px 9px 0 0 #130D01 !important;
        }

        .gn-intro-wrap {
          display: flex;
          gap: 32px;
          align-items: flex-end;
          margin-bottom: 8px;
        }
        .gn-text-col {
          flex: 1;
          min-width: 0;
        }
        @media (max-width: 640px) {
          .gn-intro-wrap {
            flex-direction: column;
            align-items: center;
          }
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
              { label: 'May 2026', filled: true },
              { label: 'The Watering Hole, Jhamsikhel', filled: false },
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
            Tumlet Game Night — At the Heart of Jhamsikhel
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
            }}>T</div>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14 }}>Tumlet</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#7a6e60', marginTop: 2 }}>
                8 May 2026 · 3 min read
              </div>
            </div>
          </div>
        </header>

        {/* ── Cover photo ── */}
        <div style={{ margin: '36px 0 0' }}>
          <div style={{
            width: '100%',
            height: 'clamp(240px, 44vw, 500px)',
            border: '3px solid #130D01',
            borderRadius: 16,
            boxShadow: '10px 10px 0 0 #F3B952',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #1c1812 0%, #272017 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src="/watering-hole-may-2026-thumb.webp"
              alt="Game night at The Watering Hole, Jhamsikhel — June 2026"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Article body ── */}
        <div style={{ maxWidth: 680, margin: '52px auto 0', fontSize: 18, lineHeight: 1.72, color: '#2a241a' }}>

          {/* Intro: video left, first paragraphs right (desktop) / stacked (mobile) */}
          <div className="gn-intro-wrap">
            <div
              style={{
                width: 220,
                flexShrink: 0,
                border: '3px solid #130D01',
                borderRadius: 20,
                overflow: 'hidden',
                background: '#FAF1E4',
                boxShadow: '8px 8px 0 #F3B952',
                transform: 'rotate(-1.5deg)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'rotate(-1.5deg) translate(-3px,-3px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '11px 11px 0 #F3B952';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'rotate(-1.5deg)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '8px 8px 0 #F3B952';
              }}
            >
              <div style={{ width: '100%', aspectRatio: '9/16', overflow: 'hidden', background: '#1c1812' }}>
                <video
                  src="/watering-hole/recap.mp4"
                  controls
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            <div className="gn-text-col">
              <p style={{ marginBottom: 20 }}>
                Jhamsikhel has a way of hiding things in plain sight.
              </p>
              <p style={{ marginBottom: 20 }}>
                The Watering Hole sits right at the heart of it — but the kind of place you walk past because you're looking for a sign, and the sign isn't the point. We'd been wanting to host a game night here for a while. It just felt right.
              </p>
              <p style={{ marginBottom: 20 }}>
                We had to move it to a Friday. The Watering Hole hosts Salsa on Wednesdays, and we weren't going to compete with that. Fridays, as it turned out, were exactly the right call.
              </p>
            </div>
          </div>

          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 28,
            margin: '44px 0 16px',
            color: '#130D01',
            letterSpacing: '-0.01em',
          }}>A new crowd</h2>

          <p style={{ marginBottom: 20 }}>
            This was our first time working with Keeping Up with Kathmandu, and it changed the room from the start. New faces — a lot of them. Highest attendance we've ever had at a game night. By a significant margin.
          </p>
          <p style={{ marginBottom: 20 }}>
            We were especially happy to see a group in their mid-30s who'd come specifically to play Catan. They set it up, opened the box, looked at the board — and then got drawn into Firiri, Bluff Momo, and basically everything else on the table. Catan sat there very patiently. It'll get its turn eventually.
          </p>
          <p style={{ marginBottom: 20 }}>
            Bluff Momo, Tundikhel, and Firiri ran throughout the entire night — the three games that just kept pulling people back. Codenames and Dixit held their own corners of the room for hours without slowing down.
          </p>

          {/* ── Manang Valley sponsor callout ── */}
          <div style={{
            margin: '36px 0',
            background: '#F3F7F0',
            border: '2px solid #130D01',
            borderRadius: 14,
            padding: '10px 24px',
            boxShadow: '5px 5px 0 0 #130D01',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
          }}>
            <img
              src="/watering-hole/manang-bottle.webp"
              alt="Manang Valley wine"
              style={{
                width: 88,
                flexShrink: 0,
                marginTop: -90,
                marginBottom: -20,
                marginLeft: -8,
                transform: 'rotate(-7deg)',
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(3px 8px 14px rgba(0,0,0,0.28))',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 10.5,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#5a7a4a',
              }}>Sponsor of the night</span>
              <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 16, lineHeight: 1.6, margin: 0, color: '#130D01' }}>
                <strong style={{ fontWeight: 700 }}>Wines were sponsored by{' '}
                  <a
                    href="https://manangbeverages.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#5a7a4a', textDecoration: 'underline' }}
                  >
                    Manang Valley
                  </a>.
                </strong>{' '}
                And honestly? It showed. The confidence to bluff went up with every glass. We're not saying the wine won Bluff Momo — but we're not saying it didn't either.
              </p>
            </div>
          </div>

          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 28,
            margin: '44px 0 16px',
            color: '#130D01',
            letterSpacing: '-0.01em',
          }}>Guess the Price — Nepali Edition</h2>

          <p style={{ marginBottom: 20 }}>
            For the second half of the night, we ran Guess the Price — Nepali Edition. Turns out, people have very strong — and very wrong — opinions about what things cost in Kathmandu. The room had opinions. The room was mostly incorrect. It was chaotic and brilliant.
          </p>
          <p style={{ marginBottom: 20 }}>
            And the food. Order the mutton taas. It was cheap, it was good, and we're still thinking about it. The Watering Hole has a kitchen that clearly cares.
          </p>
          <p style={{ marginBottom: 20 }}>
            One thing didn't go exactly as planned: another group was added to the venue at the last minute. We ended up sharing the space, the tables got tighter, and a little bit of rain didn't help either. We made it work — but there's a real difference between having the whole place and splitting it. The Watering Hole had promised us the full venue, and we'll make sure that's the case next time.
          </p>
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
          margin: '56px auto 0',
          maxWidth: 680,
        }}>
          {[
            { k: 'Date', v: 'Fri, 8 May 2026' },
            { k: 'Where', v: 'The Watering Hole, Jhamsikhel' },
            { k: 'Turnout', v: '35+ players' },
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
                color: '#130D01',
              }}>{item.v}</span>
            </div>
          ))}
          <div style={{ gridColumn: '1 / -1', borderTop: '1.5px solid rgba(19,13,1,0.18)', marginTop: 8, paddingTop: 14 }}>
            <a
              href="https://www.instagram.com/wateringhole.gastropub/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: '#130D01',
                textDecoration: 'none',
                opacity: 0.8,
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
              The Watering Hole
            </a>
          </div>
        </div>

        {/* ── Why it worked ── */}
        <div style={{ maxWidth: 680, margin: '56px auto 0' }}>
          <div style={{
            background: '#FEF3E2',
            border: '2px solid #130D01',
            borderRadius: 16,
            padding: '28px 32px',
            boxShadow: `6px 6px 0 0 ${ACCENT}`,
          }}>
            <h3 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 21,
              margin: '0 0 18px',
              color: '#130D01',
            }}>Why The Watering Hole worked</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { num: '01', strong: 'The crowd.', rest: " First time partnering with Keeping Up with Kathmandu — and the room showed it. New faces, new energy, record turnout." },
                { num: '02', strong: 'The mutton taas.', rest: " Order it. Just order it." },
                { num: '03', strong: 'The Catan group.', rest: " They didn't play Catan. They played everything else instead. That's the game night doing exactly what it's supposed to." },
                { num: '04', strong: 'Manang Valley wines.', rest: " Free-flowing and sponsored. Absolutely correlated with the bluffing getting messier and more confident." },
                { num: '05', strong: 'Guess the Price.', rest: " Better second-half format than we expected. Nepali Edition hit different." },
              ].map(item => (
                <div key={item.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize: 17,
                    color: ACCENT,
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

        {/* ── Gallery ── */}
        <div style={{ margin: '72px 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 26,
              margin: 0,
              color: '#130D01',
              whiteSpace: 'nowrap',
            }}>The night in photos</h2>
            <div style={{ flex: 1, height: 3, background: '#130D01', borderRadius: 2 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#7a6e60',
              whiteSpace: 'nowrap',
            }}>May 8, 2026</span>
          </div>

          <div className="gn-gallery" style={{ gap: 18 }}>
            <PolaroidSlot
              rotation="-1.4deg"
              src="/watering-hole/g1.jpg"
              alt="Game night at The Watering Hole"
              caption="Record crowd. Record chaos."
            />
            <PolaroidSlot
              rotation="2.0deg"
              src="/watering-hole/g2.jpg"
              alt="Players at The Watering Hole game night"
              caption="Firiri going all night long."
              dark={false}
            />
            <PolaroidSlot
              rotation="-0.8deg"
              src="/watering-hole/g3.jpg"
              alt="Board games at The Watering Hole"
              caption="The Catan group that never played Catan."
            />
            <PolaroidSlot
              rotation="1.6deg"
              src="/watering-hole/g4.jpg"
              alt="Guess the Price Nepali Edition"
              caption="Guess the Price — and guess again."
              dark={false}
            />
            <PolaroidSlot
              rotation="-2.2deg"
              src="/watering-hole/g5.jpg"
              alt="Bluff Momo at The Watering Hole"
              caption="Bluff Momo, always Bluff Momo."
            />
            <PolaroidSlot
              rotation="1.2deg"
              src="/watering-hole/g6.jpg"
              alt="Players enjoying game night"
              caption="Manang Valley helping the cause."
              dark={false}
            />
            <PolaroidSlot
              rotation="-1.8deg"
              src="/watering-hole/g7.jpg"
              alt="Game night crowd at Jhamsikhel"
              caption="New faces, same energy."
            />
            <PolaroidSlot
              rotation="0.6deg"
              src="/watering-hole/g8.jpg"
              alt="Board game night Kathmandu"
              caption="Friday was the right call."
              dark={false}
            />
          </div>
        </div>

        {/* ── CTA ── */}
        <section style={{
          background: ACCENT,
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
            Join the WhatsApp community — that's where the next date and venue drop first, and nowhere else.
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
              color: ACCENT,
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

export default WateringHoleGameNight;
