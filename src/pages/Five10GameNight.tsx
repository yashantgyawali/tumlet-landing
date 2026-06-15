import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WHATSAPP_INVITE = 'https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE';

const FIVE10_BLUE = '#F16147';

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

const Five10GameNight = () => {
  useEffect(() => {
    document.title = "The Hidden Gem with the Hidden Parking in Thamel · Five10, April 2026 | Tumlet Game Night";

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Matcha, momo, and a Tumlet-style Beast Games tournament at Five10 Thamel. A recap of the most intense Bluff Momo final ever — April 1, 2026.');

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    let created = false;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
      created = true;
    }
    canonical.setAttribute('href', 'https://www.tumlet.com/game-night/five10-april-2026');

    return () => {
      if (created && canonical) canonical.remove();
    };
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

        .gn-drop::first-letter {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          float: left;
          font-size: 72px;
          line-height: 0.82;
          padding: 6px 10px 0 0;
          color: ${FIVE10_BLUE};
        }

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

        .gn-back:hover { color: ${FIVE10_BLUE} !important; }
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
              { label: 'April 2026', filled: true },
              { label: 'Five10, Thamel', filled: false },
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
            Tumlet Game Night — The Hidden Gem with the Hidden Parking in Thamel
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
                1 April 2026 · 4 min read
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
            boxShadow: `10px 10px 0 0 ${FIVE10_BLUE}`,
            overflow: 'hidden',
          }}>
            <img
              src="/five10-april-2026-thumb.png"
              alt="Game night at Five10, Thamel — April 2026"
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
            { k: 'Date', v: 'Tue, 1 Apr 2026' },
            { k: 'Where', v: 'Five10, Thamel' },
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
              href="https://www.instagram.com/five10.np/"
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
              Follow @five10.np
            </a>
          </div>
        </div>

        {/* ── Article body ── */}
        <div style={{ maxWidth: 680, margin: '52px auto 0', fontSize: 18, lineHeight: 1.72, color: '#2a241a' }}>
          <p className="gn-drop" style={{ marginBottom: 20 }}>
            It's funny how the best things start so randomly.
          </p>
          <p style={{ marginBottom: 20 }}>
            Rohil was a friend of a friend, one we'd first met at a game night, funnily enough. He'd ordered a copy of Bluff Momo, loved it, and reached out asking if we'd want our game in his new café. We said yes without much deliberation. You just know.
          </p>
          <p style={{ marginBottom: 20 }}>
            We went to meet him at Five10. Walking in felt intentional in a way most cafés in Kathmandu don't. Cozy, considered, and on a street you've probably walked past a hundred times.
          </p>
          <p style={{ marginBottom: 20 }}>
            We pitched the idea: a game night at Five10. Rohil and the team were immediately in. So we decided to do it properly.
          </p>

          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 28,
            margin: '44px 0 16px',
            color: '#130D01',
            letterSpacing: '-0.01em',
          }}>The Open Floor</h2>

          <p style={{ marginBottom: 20 }}>
            The first half was chaos in the best way. Race to Tundikhel drew a crowd from the start. Flip 7 had players lining up in waves, round after round, nobody wanted to stop. Firiri started quietly in a corner of the room, then became the loudest corner in Five10. Bluff Momo was everywhere, at every table, all night.
          </p>

          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 28,
            margin: '44px 0 16px',
            color: '#130D01',
            letterSpacing: '-0.01em',
          }}>The Tumlet Beast Games</h2>

          <p style={{ marginBottom: 20 }}>
            For the second half, we ran something different: a Tumlet-style tournament we'd been building in our heads for a while. Thirty-five players. One winner. We had to get there.
          </p>

          <p style={{ marginBottom: 8 }}>
            <strong style={{ fontWeight: 700, color: '#130D01' }}>Round 1: The Chip Game.</strong> Something we made up that morning. Every team starts with 20 poker chips. Each round, you secretly bet however many chips you want. The team that bets the most wins the round. First to 2 points moves on. Six rounds total. Only the top 3 teams advanced.
          </p>

          <p style={{ marginBottom: 8 }}>
            <strong style={{ fontWeight: 700, color: '#130D01' }}>Round 2: That's Not a Hat.</strong> The surviving teams played in groups. Within each group, half the players were eliminated.
          </p>

          <p style={{ marginBottom: 20 }}>
            <strong style={{ fontWeight: 700, color: '#130D01' }}>Round 3: Poker Drink.</strong> Two shot glasses, one matcha, one water. Player 1 looks at a glass and says "matcha" or "water." Truth or bluff, their call. Player 2 picks which glass they drink. Simple format, nerve-wracking in practice.
          </p>

          <p style={{ marginBottom: 20 }}>
            We had our final six. And we made them play Bluff Momo.
          </p>

          <p style={{ marginBottom: 20 }}>
            It was the most intense round we've ever witnessed. Six people who'd survived three rounds of elimination, sitting around a table, knowing exactly what was at stake. Dead silent between turns. Everyone reading everyone.
          </p>

          <p>
            Five10 were incredible hosts throughout: a curated food menu, the right space, the right energy. The matcha, the team, the vibe — everything came together. We can't wait to go back.
          </p>
        </div>

        {/* ── Why it worked ── */}
        <div style={{ maxWidth: 680, margin: '56px auto 0' }}>
          <div style={{
            background: '#EEF3FF',
            border: '2px solid #130D01',
            borderRadius: 16,
            padding: '28px 32px',
            boxShadow: `6px 6px 0 0 ${FIVE10_BLUE}`,
          }}>
            <h3 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 21,
              margin: '0 0 18px',
              color: '#130D01',
            }}>Why Five10 worked</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { num: '01', strong: 'The matcha.', rest: " Cloud Coconut Matcha. You will not regret it." },
                { num: '02', strong: 'Hidden in plain sight.', rest: " The kind of place you walk past for months before someone finally tells you about it." },
                { num: '03', strong: 'Rohil and the team.', rest: " Genuinely warm. By the end, they were cheering for the final table along with everyone else." },
              ].map(item => (
                <div key={item.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize: 17,
                    color: FIVE10_BLUE,
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
            }}>Apr 1, 2026</span>
          </div>

          <div className="gn-gallery" style={{ gap: 18 }}>
            <PolaroidSlot
              rotation="1.8deg"
              src="/five10/five10-g2.jpg"
              alt="Three people holding Bluff Momo games at Five10"
              caption="The smile, the competitiveness, all in one"
              dark={false}
            />
            <PolaroidSlot
              rotation="-0.6deg"
              src="/five10/five10-g3.jpg"
              alt="Players chatting and playing board games at Five10"
              caption="Tundikhellllll"
            />
            <PolaroidSlot
              rotation="2.2deg"
              src="/five10/five10-g4.jpg"
              alt="Race to Tundikhel board and Farak cards on the table"
              caption="Flip 7 doing it's tinggg."
              dark={false}
            />
            <PolaroidSlot
              rotation="-1.8deg"
              src="/five10/five10-g5.jpg"
              alt="Player concentrating during the Beast Games tournament"
              caption="Laughing our guts out."
            />
            <PolaroidSlot
              rotation="1.0deg"
              src="/five10/five10-g6.jpg"
              alt="Player in bucket hat laughing at Five10 game night"
              caption="And the winner is..."
              dark={false}
            />
          </div>
        </div>

        {/* ── CTA ── */}
        <section style={{
          background: FIVE10_BLUE,
          border: '3px solid #130D01',
          borderRadius: 20,
          padding: '44px 36px',
          textAlign: 'center',
          boxShadow: '10px 10px 0 0 #130D01',
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
          <p style={{ fontSize: 17, color: '#fff', margin: '0 0 28px', opacity: 0.9 }}>
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
              color: FIVE10_BLUE,
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

export default Five10GameNight;
