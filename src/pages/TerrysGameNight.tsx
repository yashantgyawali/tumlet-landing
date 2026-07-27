import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WHATSAPP_INVITE = 'https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE';

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

const TerrysGameNight = () => {
  React.useEffect(() => {
    const title = "The Whole Roof Was Ours · Terry's Pub & Bistro, July 2026 | Tumlet Game Night";
    const description = "Our biggest turnout yet: 50+ players took over Terry's rooftop for a full night of Saboteur, Bluff Momo, and the debut of Momo Psychi, our new high-stakes bidding game. A recap of Tumlet Game Night at Terry's Pub & Bistro, July 2026.";
    const image = 'https://tumlet.com/terrys-july-2026-thumb.png';
    const url = 'https://tumlet.com/game-night/terrys-july-2026/';

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
              { label: 'July 2026', filled: true },
              { label: "Terry's Pub & Bistro", filled: false },
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
            Tumlet Game Night: The Whole Roof Was Ours
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
                3 July 2026 · 3 min read
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
          }}>
            <img
              src="/terrys-july-2026-thumb.png"
              alt="Game night at Terry's Pub & Bistro, July 2026"
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
            { k: 'Date', v: 'Fri, 3 Jul 2026' },
            { k: 'Where', v: "Terry's Pub & Bistro" },
            { k: 'Turnout', v: '50+ players' },
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
            Open air, string lights, and for one Friday night, the entire Terry's roof was ours.
          </p>
          <p style={{ marginBottom: 20 }}>
            No other crowd on the side judging us this time. Terry's Pub & Bistro handed over the whole roof, and we filled it with everything we could carry up the stairs.
          </p>
          <p style={{ marginBottom: 20 }}>
            Fifty-plus people showed up. Yep, that's not a typo. It's the biggest crowd we've pulled to a game night yet, comfortably past our previous record at The Watering Hole. And yet we had to say no to so many people.
          </p>

          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 28,
            margin: '44px 0 16px',
            color: '#130D01',
            letterSpacing: '-0.01em',
          }}>The games that made it to the night</h2>

          <p style={{ marginBottom: 20 }}>
            Herd Mentality, Deep Sea Adventure, Secret Hitler, Codenames, Bluff Momo, Tundikhel, Dixit, Scout, and Saboteur were all on the tables. We gauged the room, and the Saboteur table was the loudest all night, with the biggest gasp every now and then.
          </p>

          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 28,
            margin: '44px 0 16px',
            color: '#130D01',
            letterSpacing: '-0.01em',
          }}>Momo Psychi made its debut</h2>

          <p style={{ marginBottom: 20 }}>
            We broke everyone down into groups and brought a bit of psychological tension to every table.
          </p>
          <p style={{ marginBottom: 20 }}>
            Everyone starts with 15 momo. Each round, you bid as a group, and the highest bidder wins the round. Simple enough, except every momo you bid is gone, whether you win or lose. Bid too high and you've burned your stash for nothing. Bid too low and someone else takes it, and you've still lost the momo. Win two rounds before your pile runs out, and you take the whole thing.
          </p>
          <p style={{ marginBottom: 20 }}>
            It was brutal in the best way. Watching people argue and strategize was fun to watch as a host.
          </p>

          <p style={{ marginBottom: 20 }}>
            All participants got 20% off Carlsberg for the night, so pitchers kept arriving long after they should have stopped. By the last game of the night, our own memory of who actually won is, honestly, a little blurry. We're told a good time was had.
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
            }}>Why Terry's worked</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { num: '01', strong: 'The whole roof, ours.', rest: ' No shared tables, no competing groups: the biggest venue we\'ve had entirely to ourselves.' },
                { num: '02', strong: 'Fifty-plus and counting.', rest: ' A new turnout record, past our previous high at The Watering Hole.' },
                { num: '03', strong: 'Momo Psychi debuted.', rest: ' A bidding game that punishes greed and hesitation in equal measure. Instant favorite.' },
                { num: '04', strong: 'Saboteur was the loudest table.', rest: ' Biggest gasps of the night, every round.' },
                { num: '05', strong: '20% off Carlsberg.', rest: ' Pitcher after pitcher. The last game got a little blurry. We regret nothing.' },
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
            }}>Jul 3, 2026</span>
          </div>

          <div className="gn-gallery" style={{ gap: 18 }}>
            <PolaroidSlot
              rotation="-1.4deg"
              src="/terrys/g1.jpg"
              alt="Rooftop crowd at Terry's Pub & Bistro game night"
              caption="The whole roof, packed under prayer flags."
              dark={false}
            />
            <PolaroidSlot
              rotation="2.0deg"
              src="/terrys/g2.jpg"
              alt="Players deep in a card game at Terry's"
              caption="Deep in it already."
            />
            <PolaroidSlot
              rotation="-0.8deg"
              src="/terrys/g3.jpg"
              alt="A full table of players at Terry's game night"
              caption="Full table, no strangers by round two."
              dark={false}
            />
            <PolaroidSlot
              rotation="1.6deg"
              src="/terrys/g4.jpg"
              alt="Players gathered under the string lights at Terry's"
              caption="Backpacks piled, hands full of cards."
            />
            <PolaroidSlot
              rotation="-2.2deg"
              src="/terrys/g5.jpg"
              alt="Momo Psychi bidding round at Terry's game night"
              caption="Bidding it all away: Momo Psychi in progress."
              dark={false}
            />
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

export default TerrysGameNight;
