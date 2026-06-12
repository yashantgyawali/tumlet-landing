import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WHATSAPP_INVITE = "https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE";

const WaIcon = ({ color = '#fff' }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ flex: 'none' }}>
    <path fill={color} d="M16.01 4C9.4 4 4.03 9.36 4.03 15.96c0 2.11.55 4.16 1.6 5.98L4 28l6.23-1.63a11.96 11.96 0 0 0 5.78 1.47h.01c6.6 0 11.97-5.36 11.97-11.96 0-3.2-1.25-6.2-3.5-8.46A11.9 11.9 0 0 0 16.01 4Zm5.46 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
  </svg>
);

/* PAST NIGHTS DATA — uncomment when events are ready
const pastNights = [
  {
    id: 'ev-1',
    href: '#',
    isLink: true,
    when: 'May 2026 · Jhamsikhel',
    title: 'The night Bluff Momo got loud',
    desc: "38 players, three tables, one heated argument about whether चोर counts as cheating. (It doesn't. It's the whole game.)",
  },
  {
    id: 'ev-2',
    when: 'Apr 2026 · Thamel',
    title: 'Codenames vs. the language barrier',
    desc: 'Half-Nepali, half-English clues turned every round into beautiful confusion. New record turnout.',
  },
  {
    id: 'ev-3',
    when: 'Mar 2026 · Pulchowk',
    title: 'Rainy night, full house',
    desc: 'Monsoon showed up early; so did 40 of you. Carrom boards out till midnight.',
  },
  {
    id: 'ev-4',
    when: 'Feb 2026 · Boudha',
    title: 'The Catan marathon',
    desc: 'One game ran two and a half hours. Nobody traded sheep. Friendships tested.',
  },
  {
    id: 'ev-5',
    when: 'Jan 2026 · Baluwatar',
    title: 'New year, new bluffers',
    desc: 'A dozen first-timers, a teaching table that never emptied, and a lot of momo.',
  },
  {
    id: 'ev-6',
    when: 'Dec 2025 · Kupondole',
    title: 'The very first game night',
    desc: 'Two friends, one borrowed table, eleven brave strangers. This is where it all started.',
  },
];
*/

const tickerItems = [
  'Free entry ✦',
  'सबैलाई स्वागत छ ✦',
  'No experience needed ✦',
  'New venue every month ✦',
  'We teach the rules ✦',
  'Come solo, leave with a squad ✦',
];

const rules = [
  {
    num: '01',
    title: "It's free. Always.",
    desc: "No tickets, no cover, no \"pay what you like\" guilt. Buy yourself a coffee at the venue if you want. That's it.",
  },
  {
    num: '02',
    title: 'Nobody needs to know the rules.',
    desc: "Never touched a board game? Perfect. There's a teaching table all night. Three minutes of rules, then you're in the round.",
  },
  {
    num: '03',
    title: 'Come solo, leave with a squad.',
    desc: 'Half the room shows up alone. The table does the introductions. You just have to sit down and play.',
  },
];

const EyebrowPill = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <span style={{
    display: 'inline-block',
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: light ? '#F3B952' : '#F16147',
    background: light ? 'rgba(243,185,82,.14)' : '#FBE0D5',
    padding: '6px 14px',
    borderRadius: 999,
  }}>
    {children}
  </span>
);

const PhotoSlot = ({ height = 185, dark = false }: { height?: number | string; dark?: boolean }) => (
  <div style={{
    width: '100%',
    height,
    background: dark
      ? 'linear-gradient(135deg, #2a2318 0%, #1a1710 100%)'
      : 'linear-gradient(135deg, #e8e0d0 0%, #d4c8b4 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: dark ? 'rgba(255,255,255,0.18)' : '#9e9080',
    fontSize: 12,
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderBottom: dark ? 'none' : '3px solid #130D01',
  }}>
    Photo coming soon
  </div>
);

const CtaButton = ({
  children,
  onClick,
  href,
  style: extraStyle,
  shadowColor = '#F3B952',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties;
  shadowColor?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const btn = (
    <button
      onClick={onClick}
      style={{
        color: '#fff',
        fontFamily: "'Baloo 2', sans-serif",
        fontWeight: 600,
        display: 'inline-flex',
        transform: hovered ? 'rotate(-0.88deg) translate(-4px,-4px)' : 'rotate(-0.88deg)',
        padding: '16px 42px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        borderRadius: 12,
        cursor: 'pointer',
        transition: 'transform .2s ease, box-shadow .15s ease',
        border: 'none',
        fontSize: 17,
        background: '#F16147',
        boxShadow: hovered ? '2px 2px 0 0 #A42726' : `8px 8px 0 0 ${shadowColor}`,
        ...extraStyle,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    return isExternal
      ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{btn}</a>
      : <a href={href}>{btn}</a>;
  }
  return btn;
};

const GameNight = () => {
  useEffect(() => {
    document.title = 'Board Game Night: free, every month, all around Kathmandu | Tumlet';

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Tumlet hosts a free board game night every month, somewhere new in Kathmandu. No tickets, no experience needed. We teach the rules. Join the WhatsApp community to catch the next one.');

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    let created = false;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
      created = true;
    }
    canonical.setAttribute('href', 'https://www.tumlet.com/game-night');

    return () => {
      if (created && canonical) canonical.remove();
    };
  }, []);

  const waHref = WHATSAPP_INVITE;
  const waTarget = '_blank';

  return (
    <div style={{ background: '#ffffff', color: '#130D01', fontFamily: "'Baloo 2', system-ui, sans-serif", overflowX: 'hidden' }}>
      <style>{`
        @keyframes gn-tick {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .gn-ticker-track { animation: gn-tick 28s linear infinite; }
        }
        .gn-hl {
          color: #F16147;
          text-decoration: underline wavy #F3B952 4px;
          text-underline-offset: 8px;
        }
        .gn-rule-card:nth-child(1) { transform: rotate(-0.8deg); }
        .gn-rule-card:nth-child(2) { transform: rotate(0.6deg); }
        .gn-rule-card:nth-child(3) { transform: rotate(-0.5deg); }
        .gn-rule-card:hover {
          transform: rotate(0deg) translate(-2px,-2px) !important;
          box-shadow: 11px 11px 0 #F3B952 !important;
        }
        .gn-night-card:nth-child(odd)  { transform: rotate(-0.7deg); }
        .gn-night-card:nth-child(even) { transform: rotate(0.7deg); }
        .gn-night-card:hover {
          transform: rotate(0deg) translate(-3px,-3px) !important;
          box-shadow: 11px 11px 0 #F16147 !important;
        }
        .gn-footer-link:hover { color: #F16147 !important; text-decoration: underline; }
        @media (min-width: 768px)  { .gn-hero-meta { padding: 56px 64px 64px !important; } }
        @media (min-width: 768px)  { .gn-signup-inner { padding: 0 48px !important; } }
      `}</style>

      <Navbar />

      <main>

        {/* ===== HERO ===== */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: '32px 24px 0' }}>
          <div style={{
            position: 'relative',
            background: '#FAF1E4',
            border: '4px solid #130D01',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '12px 12px 0 0 #F3B952',
          }}>
            <span style={{
              position: 'absolute', top: 20, left: 20, zIndex: 5,
              background: '#F3B952', color: '#130D01',
              fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 14,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '10px 18px', borderRadius: 999,
              border: '2px solid #130D01',
              whiteSpace: 'nowrap',
              transform: 'rotate(-3deg)',
              boxShadow: '4px 4px 0 #130D01',
              display: 'inline-block',
            }}>
              Free · Every month
            </span>

            <span style={{
              position: 'absolute', top: 18, right: 22, zIndex: 5,
              width: 54, height: 54, borderRadius: 14,
              background: '#F16147', border: '2px solid #130D01',
              boxShadow: '4px 4px 0 #130D01',
              transform: 'rotate(8deg)',
              display: 'grid', placeItems: 'center',
            }} aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="#fff" strokeWidth="2"/>
                <circle cx="8.2" cy="8.2" r="1.7" fill="#fff"/>
                <circle cx="15.8" cy="8.2" r="1.7" fill="#fff"/>
                <circle cx="8.2" cy="15.8" r="1.7" fill="#fff"/>
                <circle cx="15.8" cy="15.8" r="1.7" fill="#fff"/>
                <circle cx="12" cy="12" r="1.7" fill="#fff"/>
              </svg>
            </span>

            <div className="gn-hero-meta" style={{ padding: '64px 28px 52px', textAlign: 'center' }}>

              <h1 style={{
                fontFamily: "'Baloo 2', sans-serif", fontWeight: 800,
                fontSize: 'clamp(36px, 5.4vw, 60px)',
                lineHeight: 1.08, letterSpacing: '-0.01em',
                color: '#130D01', margin: '40px auto 20px', maxWidth: 880,
              }}>
                A <span className="gn-hl">free board game night</span>, every month, somewhere new in Kathmandu.
              </h1>

              <p style={{ fontSize: 21, maxWidth: 700, margin: '0 auto 34px', color: '#3a3225' }}>
               We bring a mountain of board games and teach you the rules. You just show up. Come solo or drag your whole gang.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
                <CtaButton href={waHref}>
                  <WaIcon />
                  Join the WhatsApp community
                </CtaButton>
                {/* See past nights link — uncomment when past nights section is ready
                <a href="#nights" style={{ textDecoration: 'underline', color: '#130D01', fontSize: 16, fontWeight: 500 }}>
                  See past nights →
                </a>
                */}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '3px solid #130D01', background: '#fff' }}>
              {[
                { num: 'Rs. 0', lbl: 'entry, forever' },
                { num: '30+',   lbl: 'players a night' },
                { num: '1×',    lbl: 'a month, new venue' },
              ].map((stat, i) => (
                <div key={i} style={{ padding: '22px 12px', textAlign: 'center', borderRight: i < 2 ? '3px solid #130D01' : 'none' }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 32, color: '#F16147', lineHeight: 1.1 }}>{stat.num}</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#6B6B6B', letterSpacing: '0.04em', marginTop: 6, textTransform: 'uppercase', fontWeight: 600 }}>{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TICKER ===== */}
        <div style={{
          margin: '72px 0',
          background: '#F3B952',
          borderTop: '3px solid #130D01', borderBottom: '3px solid #130D01',
          overflow: 'hidden', whiteSpace: 'nowrap',
          transform: 'rotate(-0.6deg) scale(1.01)',
        }} aria-hidden="true">
          <div className="gn-ticker-track" style={{ display: 'inline-flex', padding: '12px 0' }}>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} style={{
                fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 18,
                letterSpacing: '0.06em', textTransform: 'uppercase', color: '#130D01',
                padding: '0 18px', flex: 'none',
              }}>{item}</span>
            ))}
          </div>
        </div>

        {/* ===== STORY ===== */}
        <article id="story" style={{ maxWidth: 760, margin: '0 auto 96px', padding: '0 24px' }}>
          <div style={{ marginBottom: 24 }}><EyebrowPill>The story</EyebrowPill></div>

          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif", fontWeight: 800,
            fontSize: 'clamp(36px, 4.8vw, 52px)', lineHeight: 1.1,
            color: '#130D01', marginBottom: 24, letterSpacing: '-0.01em', marginTop: 0,
          }}>
            Why we host a free game night, every single month.
          </h2>

          <p style={{ fontSize: 19, lineHeight: 1.7, color: '#2a241a', marginBottom: 22 }}>
            Somewhere between school, jobs and screens, we stopped gathering around a table just to mess around together. Weekends became scrolling. "Let's catch up" became a text that never turns into a plan.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.7, color: '#2a241a', marginBottom: 22 }}>
            So we made the plan for you. <strong style={{ color: '#F16147', fontWeight: 700 }}>One night a month, somewhere in Kathmandu, we take over a café and fill it with board games.</strong> Bluff Momo, Codenames, Catan, a whole shelf of them. We teach anyone who walks in. People who arrived as strangers argue like cousins by round three.
          </p>

          <blockquote style={{
            fontFamily: "'Baloo 2', sans-serif", fontWeight: 700,
            fontSize: 'clamp(26px, 3.4vw, 34px)', lineHeight: 1.3, color: '#130D01',
            borderLeft: '6px solid #F16147', padding: '10px 0 10px 28px', margin: '36px 0',
          }}>
            "Kathmandu just needs an excuse to play."
          </blockquote>

          <p style={{ fontSize: 19, lineHeight: 1.7, color: '#2a241a', marginBottom: 22 }}>
            It's free because it has to be. The point was never to sell tickets. It's to spread playfulness amongst Nepali young adults, and to build a community that keeps showing up for each other.{' '}
            <em style={{ fontStyle: 'italic', color: '#F16147', fontWeight: 600 }}>खेल्न आउनुस् न!</em>
          </p>

          <p style={{ marginTop: 36, color: '#130D01', fontWeight: 700, fontSize: 20, marginBottom: 0 }}>
            — Sarina Pantha &amp; Yashant Gyawali<br />
            <span style={{ fontWeight: 500, color: '#3a3225', fontSize: 16 }}>Tumlet · Kathmandu</span>
          </p>
        </article>

        {/* ===== THREE RULES ===== */}
        <section style={{ maxWidth: 1180, margin: '0 auto 96px', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ marginBottom: 16 }}><EyebrowPill>House rules</EyebrowPill></div>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif", fontWeight: 800,
              fontSize: 'clamp(34px, 4.4vw, 48px)',
              color: '#130D01', lineHeight: 1.1, letterSpacing: '-0.01em', margin: 0,
            }}>
              The only three rules of game night
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {rules.map((rule, i) => (
              <div key={i} className="gn-rule-card" style={{
                background: '#fff',
                border: '3px solid #130D01', borderRadius: 16, padding: 32,
                boxShadow: '8px 8px 0 #130D01',
                transition: 'transform .2s ease, box-shadow .2s ease',
              }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 64, lineHeight: 1, color: '#F16147', marginBottom: 14 }}>{rule.num}</div>
                <h3 style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 24, marginBottom: 12, color: '#130D01', lineHeight: 1.2, marginTop: 0 }}>{rule.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#3a3225', margin: 0 }}>{rule.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PEEK ===== */}
        <section style={{ background: '#130D01', color: '#fff', padding: '80px 0', marginBottom: 96, position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,.05) 1px, transparent 1px), radial-gradient(circle at 70% 70%, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px, 60px 60px',
          }} aria-hidden="true" />

          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ marginBottom: 16 }}><EyebrowPill light>A peek at the table</EyebrowPill></div>
              <h2 style={{
                fontFamily: "'Baloo 2', sans-serif", fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: '#fff',
                margin: '0 0 12px',
              }}>
                What a night looks like.
              </h2>
            </div>

            <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {[
                { title: 'The teaching table', desc: 'Where first-timers learn a game in three minutes and become liars by the fourth. (Bluff Momo does that.)', img: '/game-night-2.jpg', alt: 'Someone explaining the rules of a board game to players at game night' },
                { title: 'The loud table', desc: 'The sweaty-competitive crowd. Rematches until the café kicks us out.', img: '/game-night-1.jpg', alt: 'Players gathered around a table deep in a card game at night' },
              ].map((comp, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,.05)', border: '2px solid rgba(255,255,255,.18)', borderRadius: 14, overflow: 'hidden' }}>
                  <img src={comp.img} alt={comp.alt} style={{ width: '100%', height: 280, objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                  <div style={{ padding: '22px 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                    <div>
                      <h4 style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.2, color: '#fff', margin: '0 0 4px' }}>{comp.title}</h4>
                      <p style={{ fontSize: 14, color: '#D8CCB8', margin: 0 }}>{comp.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 44, textAlign: 'center' }}>
              <p style={{ color: '#D8CCB8', fontSize: 17, marginBottom: 16 }}>On the shelf, always:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
                {['Bluff Momo', 'Firiri', 'Codenames', 'Catan', 'Dixit', 'Secret Hitler'].map(game => (
                  <span key={game} style={{
                    fontFamily: "'Baloo 2', sans-serif", fontWeight: 600, fontSize: 15,
                    color: '#130D01', background: '#F3B952',
                    border: '2px solid #130D01', borderRadius: 999, padding: '5px 16px', whiteSpace: 'nowrap',
                  }}>{game}</span>
                ))}
                <span style={{
                  fontFamily: "'Baloo 2', sans-serif", fontWeight: 600, fontSize: 15,
                  background: 'transparent', color: '#fff',
                  border: '2px solid rgba(255,255,255,.4)', borderRadius: 999, padding: '5px 16px', whiteSpace: 'nowrap',
                }}>+ whatever you bring</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PAST NIGHTS — uncomment when event recaps are ready =====
        <section id="nights" style={{ maxWidth: 1180, margin: '0 auto 96px', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ marginBottom: 16 }}><EyebrowPill>The growing scrapbook</EyebrowPill></div>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif", fontWeight: 800,
              fontSize: 'clamp(34px, 4.4vw, 48px)',
              color: '#130D01', lineHeight: 1.1, letterSpacing: '-0.01em', margin: '0 0 8px',
            }}>Past nights</h2>
            <p style={{ fontSize: 18, color: '#3a3225', margin: 0 }}>Every game night gets its own little recap. Scroll back through the chaos.</p>
          </div>

          <div style={{ display: 'grid', gap: 28, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {pastNights.map((night) => {
              const cardContent = (
                <>
                  <PhotoSlot height={185} />
                  <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                    <span style={{
                      display: 'inline-flex', alignSelf: 'flex-start', gap: 8, alignItems: 'center',
                      fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12.5,
                      letterSpacing: '0.07em', textTransform: 'uppercase',
                      background: '#F3B952', border: '2px solid #130D01', borderRadius: 999,
                      padding: '4px 12px', whiteSpace: 'nowrap',
                    }}>{night.when}</span>
                    <h3 style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.2, margin: 0 }}>{night.title}</h3>
                    <p style={{ fontSize: 15.5, color: '#3a3225', flex: 1, margin: 0 }}>{night.desc}</p>
                    <span style={{ fontWeight: 700, color: '#F16147', fontSize: 15.5 }}>Read the recap →</span>
                  </div>
                </>
              );

              const cardStyle: React.CSSProperties = {
                background: '#fff', border: '3px solid #130D01', borderRadius: 16,
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
                boxShadow: '7px 7px 0 #F3B952',
                transition: 'transform .2s ease, box-shadow .2s ease',
                textDecoration: 'none', color: 'inherit',
              };

              return night.isLink
                ? <a key={night.id} href={night.href} className="gn-night-card" style={cardStyle}>{cardContent}</a>
                : <div key={night.id} className="gn-night-card" style={cardStyle}>{cardContent}</div>;
            })}

            <div style={{
              borderStyle: 'dashed', borderWidth: 3, borderColor: '#5A3A1F', borderRadius: 16,
              background: 'transparent', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              textAlign: 'center', padding: '40px 24px', minHeight: 320,
            }}>
              <EyebrowPill>Coming soon</EyebrowPill>
              <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 24, margin: '12px 0 6px', color: '#130D01' }}>
                The next one is being planned right now.
              </div>
              <p style={{ fontSize: 15.5, color: '#3a3225', margin: 0 }}>Join the WhatsApp to get the date and venue first.</p>
            </div>
          </div>
        </section>
        ===== END PAST NIGHTS ===== */}

        {/* ===== FOR BRANDS ===== */}
        <section id="brands" style={{ maxWidth: 880, margin: '0 auto 96px', padding: '0 24px' }}>
          <div style={{
            position: 'relative',
            background: '#fff',
            border: '3px solid #130D01', borderRadius: 20,
            padding: '48px 40px 52px',
            boxShadow: '10px 10px 0 #F16147',
            transform: 'rotate(0.4deg)',
            textAlign: 'center',
          }}>
            <span style={{
              position: 'absolute', top: -16, right: 32,
              background: '#F3B952', color: '#130D01',
              padding: '7px 16px', borderRadius: 999, border: '2px solid #130D01',
              fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12,
              letterSpacing: '0.12em', textTransform: 'uppercase', transform: 'rotate(3deg)',
              whiteSpace: 'nowrap',
            }}>We're picky</span>

            <div style={{ marginBottom: 16 }}><EyebrowPill>For brands</EyebrowPill></div>

            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif", fontWeight: 800,
              fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: 1.12,
              color: '#130D01', marginBottom: 16, letterSpacing: '-0.01em', marginTop: 0,
            }}>
              Want your brand at the table?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: '#3a3225', maxWidth: 620, margin: '0 auto 14px' }}>
              Every game night puts <strong style={{ color: '#F16147', fontWeight: 700 }}>40+ young adults</strong> around a table for three hours. Phones down, fully there.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: '#3a3225', maxWidth: 620, margin: '0 auto 14px' }}>
              We're very selective about the sponsors and brands we work with. But if young adults are your people, and you can add fuel to the fun with a venue, snacks, prizes, or momo, we're all ears.
            </p>
            <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
              <CtaButton href="mailto:tumletgames@gmail.com?subject=Game%20Night%20sponsorship" style={{ whiteSpace: 'nowrap', padding: '16px 32px' }}>
                Pitch us your idea →
              </CtaButton>
              <a href="mailto:tumletgames@gmail.com" style={{ textDecoration: 'underline', color: '#130D01', fontSize: 16, fontWeight: 500 }}>
                tumletgames@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* ===== SIGNUP ===== */}
        <section id="join" style={{
          background: '#F3B952',
          borderTop: '3px solid #130D01',
          borderBottom: '3px solid #130D01',
          padding: '56px 0',
          position: 'relative',
        }}>
          <span style={{
            position: 'absolute', top: -16, right: '5%',
            background: '#F16147', color: '#fff',
            padding: '7px 16px', borderRadius: 999, border: '2px solid #130D01',
            fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12,
            letterSpacing: '0.12em', textTransform: 'uppercase', transform: 'rotate(4deg)',
          }}>It's free</span>

          <div className="gn-signup-inner" style={{
            maxWidth: 1180, margin: '0 auto', padding: '0 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 40, flexWrap: 'wrap',
          }}>
            <div style={{ maxWidth: 600, textAlign: 'left' }}>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: '#130D01', marginBottom: 10,
              }}>
                Get on the list
              </div>
              <h2 style={{
                fontFamily: "'Baloo 2', sans-serif", fontWeight: 800,
                fontSize: 'clamp(30px, 3.6vw, 40px)', color: '#130D01', lineHeight: 1.12,
                margin: '0 0 10px', letterSpacing: '-0.01em',
              }}>
                Be there when Kathmandu plays next.
              </h2>
              <p style={{ fontSize: 17, color: '#130D01', margin: 0 }}>
                The date and venue drop in the WhatsApp community a week before every game night, and nowhere else.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column',  gap: 14 }}>
              <CtaButton href={waHref} shadowColor="#130D01">
                <WaIcon />
                Join the WhatsApp community
              </CtaButton>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default GameNight;
