import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

function setJsonLd(structuredData: object) {
  let script = document.querySelector("script[type='application/ld+json']");
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(structuredData);
}

const TEAL = '#1B9C90';
const TEAL_DEEP = '#0E5F58';
const TEAL_MID = '#45B9AD';
const TEAL_SOFT = '#B7E3DD';
const CREAM = '#FBEFD8';
const BROWN = '#5A3A1F';
const INK = '#130D01';
const YELLOW = '#F3B952';
const RED = '#F16147';
const PAPER = '#FFFFFF';
const BEIGE = '#FAF1E4';

const D2R = Math.PI / 180;
function pt(cx: number, cy: number, r: number, a: number): [number, number] {
  return [cx + r * Math.cos(a * D2R), cy - r * Math.sin(a * D2R)];
}
function wedge(cx: number, cy: number, r: number, a1: number, a2: number, fill: string) {
  const [x1, y1] = pt(cx, cy, r, a1);
  const [x2, y2] = pt(cx, cy, r, a2);
  return `<path d="M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z" fill="${fill}"/>`;
}

type DialOpts = {
  target: number;
  needle?: number | null;
  mystery?: boolean;
  poleL?: string;
  poleR?: string;
  score?: number | null;
  spin?: boolean;
  mini?: boolean;
};

function dialSvg(opts: DialOpts): string {
  const o = { needle: null as number | null, mystery: false, poleL: '', poleR: '', score: null as number | null, spin: false, mini: false, ...opts };
  const W = 400, H = o.mini ? 232 : 250;
  const cx = 200, cy = 214, R = 178;
  let s = '';

  s += wedge(cx, cy, R, 180, 0, CREAM);

  if (o.mystery) {
    s += `<g opacity="0.55">`;
    const [lx, ly] = pt(cx, cy, R, o.target + 30);
    const [rx, ry] = pt(cx, cy, R, o.target - 30);
    s += `<path d="M ${cx} ${cy} L ${lx.toFixed(1)} ${ly.toFixed(1)} A ${R} ${R} 0 0 1 ${rx.toFixed(1)} ${ry.toFixed(1)} Z" fill="none" stroke="${TEAL}" stroke-width="3" stroke-dasharray="7 7"/>`;
    s += `</g>`;
    const [qx, qy] = pt(cx, cy, R * 0.6, o.target);
    s += `<text x="${qx.toFixed(1)}" y="${(qy + 16).toFixed(1)}" font-family="Outfit, sans-serif" font-weight="800" font-size="58" fill="${TEAL}" text-anchor="middle" opacity="0.85">?</text>`;
  } else {
    s += wedge(cx, cy, R, o.target + 30, o.target - 30, TEAL_SOFT);
    s += wedge(cx, cy, R, o.target + 17, o.target - 17, TEAL_MID);
    s += wedge(cx, cy, R, o.target + 7, o.target - 7, TEAL_DEEP);
    const band = (a: number, txt: string, col: string) => {
      const [x, y] = pt(cx, cy, R * 0.82, a);
      return `<text x="${x.toFixed(1)}" y="${(y + 5).toFixed(1)}" font-family="Outfit, sans-serif" font-weight="800" font-size="16" fill="${col}" text-anchor="middle">${txt}</text>`;
    };
    s += band(o.target, '4', '#fff');
    s += band(o.target + 12, '3', '#fff');
    s += band(o.target - 12, '3', '#fff');
    s += band(o.target + 23.5, '2', TEAL_DEEP);
    s += band(o.target - 23.5, '2', TEAL_DEEP);
  }

  const [alx, aly] = pt(cx, cy, R, 180);
  const [arx, ary] = pt(cx, cy, R, 0);
  s += `<path d="M ${alx} ${aly} A ${R} ${R} 0 0 1 ${arx} ${ary}" fill="none" stroke="${BROWN}" stroke-width="4"/>`;
  s += `<line x1="${alx}" y1="${aly}" x2="${arx}" y2="${ary}" stroke="${BROWN}" stroke-width="4" stroke-linecap="round"/>`;

  for (let a = 0; a <= 180; a += 15) {
    const [x1, y1] = pt(cx, cy, R, a);
    const [x2, y2] = pt(cx, cy, R - 11, a);
    s += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${BROWN}" stroke-width="2" opacity="0.4"/>`;
  }

  if (o.needle !== null) {
    const [nx, ny] = pt(cx, cy, R - 16, o.needle);
    s += `<g class="${o.spin ? 'needle-spin' : ''}">`;
    s += `<line x1="${cx}" y1="${cy}" x2="${nx.toFixed(1)}" y2="${ny.toFixed(1)}" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>`;
    s += `<circle cx="${nx.toFixed(1)}" cy="${ny.toFixed(1)}" r="7" fill="${RED}" stroke="${INK}" stroke-width="2.5"/>`;
    s += `</g>`;
  }

  s += `<circle cx="${cx}" cy="${cy}" r="15" fill="${YELLOW}" stroke="${INK}" stroke-width="3"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="4" fill="${INK}"/>`;

  if (o.score !== null && o.needle !== null) {
    const [sx, sy] = pt(cx, cy, R - 16, o.needle);
    s += `<g transform="translate(${(sx + 14).toFixed(1)}, ${(sy - 18).toFixed(1)}) rotate(-6)">`;
    s += `<rect x="-4" y="-20" width="58" height="34" rx="9" fill="${RED}" stroke="${INK}" stroke-width="2.5"/>`;
    s += `<text x="25" y="3" font-family="Outfit, sans-serif" font-weight="800" font-size="20" fill="#fff" text-anchor="middle">+${o.score}</text>`;
    s += `</g>`;
  }

  if (o.poleL) s += `<text x="6" y="${H - 6}" font-family="Baloo 2, sans-serif" font-weight="700" font-size="17" fill="${BROWN}" text-anchor="start">◄ ${o.poleL}</text>`;
  if (o.poleR) s += `<text x="${W - 6}" y="${H - 6}" font-family="Baloo 2, sans-serif" font-weight="700" font-size="17" fill="${TEAL_DEEP}" text-anchor="end">${o.poleR} ►</text>`;

  const svgStyle = o.mini ? 'display:block;height:100%;width:auto' : 'display:block;width:100%;height:auto';
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wavelength dial" style="${svgStyle}">${s}</svg>`;
}

const Dial: React.FC<DialOpts> = (opts) => {
  const wrapperStyle: React.CSSProperties = opts.mini
    ? { height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }
    : { width: '100%' };
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: dialSvg(opts) }} />;
};

const SPECS = [
  { subj: 'an umbrella in monsoon', note: 'is it though?', l: 'pointless', r: 'life-saving', pos: 90 },
  { subj: 'dalle khursani', note: 'handle with care', l: 'mild', r: 'deadly', pos: 86 },
  { subj: 'Kathmandu traffic at 5pm', note: 'every single day', l: 'calm', r: 'chaos', pos: 80 },
  { subj: 'a trip to Pokhara', note: 'worth the bus ride?', l: 'overrated', r: 'underrated', pos: 58 },
  { subj: 'aloo paratha for dinner', note: 'controversial, we know', l: 'sad meal', r: 'elite meal', pos: 66 },
  { subj: 'gifting socks for Dashain', note: 'be honest', l: 'terrible gift', r: 'perfect gift', pos: 30 },
];

const Wavelength: React.FC = () => {
  useEffect(() => {
    document.title = "Wavelength | Read your friends' minds | Tumlet";
    setMetaTag('description', "Wavelength is a Tumlet party game about getting on the same wavelength as your friends. One player gives a clue, the rest spin the dial to guess. Free to play online.");
    setMetaTag('keywords', 'wavelength, tumlet party game, nepali party game, board game online, dial game, group game nepal');
    setCanonical('https://tumlet.com/wavelength/');
    setPropertyTag('og:title', "Wavelength | Read your friends' minds | Tumlet");
    setPropertyTag('og:description', "A team party game about how alike you really think. One clue, one dial, one shared brain. Play free online.");
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/wavelength/');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', "Wavelength | Read your friends' minds | Tumlet");
    setMetaTag('twitter:description', "A team party game about how alike you really think. One clue, one dial, one shared brain. Play free online.");
    setMetaTag('twitter:image', 'https://tumlet.com/tumlet-logo.png');

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Wavelength',
      description: "A team party game about getting on the same wavelength as your friends. One player gives a clue, the rest spin the dial to guess.",
      url: 'https://wavelength.tumlet.com/',
      applicationCategory: 'Game',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      creator: { '@type': 'Organization', name: 'Tumlet', url: 'https://tumlet.com' },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: BEIGE, color: INK, fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
      <style>{`
        @keyframes wl-settle {
          0%   { transform: rotate(-46deg); }
          55%  { transform: rotate(14deg); }
          78%  { transform: rotate(-6deg); }
          100% { transform: rotate(0deg); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .needle-spin { transform-box: fill-box; transform-origin: bottom center; animation: wl-settle 2.4s cubic-bezier(.2,.9,.2,1) 0.3s both; }
        }
        .wl-btn { transition: transform 0.2s ease, box-shadow 0.15s ease; }
        .wl-btn:hover { transform: rotate(-0.88deg) translate(-4px, -4px) !important; }
        .wl-clue-bubble::after {
          content: ""; position: absolute; bottom: -11px; left: 26px;
          border-left: 11px solid transparent; border-right: 0 solid transparent;
          border-top: 13px solid ${TEAL};
        }
        .wl-final::before, .wl-final::after {
          content: ""; position: absolute; border-radius: 50%; border: 14px solid rgba(255,255,255,0.10); pointer-events: none;
        }
        .wl-final::before { width: 240px; height: 240px; top: -120px; left: -60px; }
        .wl-final::after  { width: 320px; height: 320px; bottom: -200px; right: -60px; }
        .wl-mini { height: 132px; display: flex; align-items: center; justify-content: flex-start; }
      `}</style>

      <Navbar />

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="max-w-[1180px] mx-auto px-6 md:px-12 pt-8 md:pt-14">
          <div
            className="flex flex-col items-center gap-6 rounded-[20px] sm:rounded-3xl py-8 px-5 sm:p-12 lg:flex-row lg:items-center lg:gap-12 lg:py-14 lg:px-[60px] relative overflow-hidden"
            style={{
              background: CREAM,
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(27,156,144,0.05) 0 1px, transparent 1px 26px)',
              border: `4px solid ${TEAL}`,
            }}
          >
            <div className="flex flex-col items-center text-center gap-5 lg:flex-1 lg:basis-[48%] lg:items-start lg:text-left">
              <span
                className="inline-flex items-center gap-2 whitespace-nowrap"
                style={{ fontFamily: "'Caveat', 'Baloo 2', cursive", fontWeight: 600, fontSize: 26, color: TEAL_DEEP, transform: 'rotate(-1.6deg)' }}
              >
                <svg viewBox="0 0 60 28" width={30} height={14} fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round">
                  <path d="M3 14 Q12 2 21 14 T39 14 T57 14" />
                </svg>
                a Tumlet party game
              </span>

              <div className="relative">
                <h1
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(46px, 8vw, 84px)',
                    lineHeight: 0.92,
                    letterSpacing: '-0.03em',
                    color: INK,
                  }}
                >
                  wavelength
                </h1>
                <svg
                  viewBox="0 0 460 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={6}
                  strokeLinecap="round"
                  style={{ width: 'clamp(200px, 46vw, 400px)', height: 16, marginTop: 4, color: TEAL, display: 'block' }}
                  className="mx-auto lg:ml-0"
                >
                  <path d="M5 11 Q35 -4 65 11 T125 11 T185 11 T245 11 T305 11 T365 11 T425 11 T455 11" />
                </svg>
              </div>

              <div className="max-w-[520px]">
                <p style={{ fontSize: 'clamp(17px, 2.2vw, 20px)', color: '#2c2521' }}>
                  It's a board game about <span style={{ color: TEAL_DEEP, fontWeight: 700 }}>how alike you really think.</span> One player sees a secret spot on the dial and gives a clue. Everyone else argues, debates, and spins to land as close as they can.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-7 gap-y-3.5 justify-center lg:justify-start">
                <div className="flex items-center gap-2.5" style={{ fontSize: 17, fontWeight: 500 }}>
                  <img src="/player.svg" alt="" width={28} height={28} />
                  2–12 players
                </div>
                <div className="flex items-center gap-2.5" style={{ fontSize: 17, fontWeight: 500 }}>
                  <img src="/age.svg" alt="" width={28} height={28} />
                  age 13+
                </div>
                <div className="flex items-center gap-2.5" style={{ fontSize: 17, fontWeight: 500 }}>
                  <img src="/time.svg" alt="" width={28} height={28} />
                  10 minutes
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-7 gap-y-4 justify-center lg:justify-start">
                <a href="https://wavelength.tumlet.com/" target="_blank" rel="noopener noreferrer">
                  <button
                    className="wl-btn inline-flex items-center justify-center gap-3 rounded-xl cursor-pointer"
                    style={{
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 600,
                      fontSize: 18,
                      padding: '16px 42px',
                      border: 0,
                      background: TEAL,
                      color: PAPER,
                      boxShadow: `8px 8px 0 0 ${TEAL_DEEP}`,
                      transform: 'rotate(-0.88deg)',
                    }}
                  >
                    <svg width={22} height={22} viewBox="0 0 24 24" fill="white">
                      <path d="M7 5.5v13a1 1 0 0 0 1.52.86l10.5-6.5a1 1 0 0 0 0-1.72L8.52 4.64A1 1 0 0 0 7 5.5z" />
                    </svg>
                    Play now — it's free
                  </button>
                </a>
                <a href="#how" className="underline" style={{ fontSize: 16, fontWeight: 600 }}>
                  how do you play? ↓
                </a>
              </div>
            </div>

            <div className="w-full max-w-[560px] lg:flex-1 lg:basis-[52%]">
              <Dial target={112} needle={96} spin poleL="overrated" poleR="underrated" />
            </div>
          </div>
        </section>

        {/* ── HOW TO PLAY ── */}
        <section id="how" className="max-w-[1180px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-2">
          <div className="text-center mb-11">
            <span
              style={{ fontFamily: "'Caveat', 'Baloo 2', cursive", fontWeight: 600, fontSize: 24, color: RED, transform: 'rotate(-1.4deg)', display: 'inline-block' }}
            >
              never played before? hajur, it's easy
            </span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, letterSpacing: '-0.02em', fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.12, marginTop: 6 }}>
              How to play, in 3 turns
            </h2>
            <p style={{ maxWidth: 560, margin: '14px auto 0', fontSize: 18, color: '#4a423c' }}>
              Think of the dial as a scale between two opposites. Somewhere on it is a hidden target. Your job as a team — find it.
            </p>
          </div>

          <div className="grid gap-6 md:gap-7 grid-cols-1 lg:grid-cols-3">
            {[
              {
                shadow: TEAL_SOFT,
                visual: <Dial mini target={70} mystery poleL="" poleR="" />,
                title: 'One player gets a secret',
                body: (<>The dial shows a spectrum — like <b style={{ color: TEAL_DEEP }}>overrated ↔ underrated</b>. One teammate, the <b style={{ color: TEAL_DEEP }}>Psychic</b>, secretly sees where the target sits. Nobody else can.</>),
              },
              {
                shadow: YELLOW,
                visual: (
                  <div className="flex flex-col items-center gap-2.5">
                    <div
                      className="wl-clue-bubble relative"
                      style={{
                        background: TEAL,
                        color: PAPER,
                        fontWeight: 700,
                        fontSize: 17,
                        padding: '12px 20px',
                        borderRadius: 14,
                        transform: 'rotate(-1.5deg)',
                        boxShadow: `3px 3px 0 0 ${TEAL_DEEP}`,
                        border: `2px solid ${TEAL_DEEP}`,
                      }}
                    >
                      "...sutkeri ko khana?"
                    </div>
                    <div className="flex gap-2.5 items-center" style={{ fontSize: 13, color: BROWN, fontWeight: 700 }}>
                      <span>bland</span>
                      <span style={{ width: 86, height: 8, borderRadius: 6, background: `linear-gradient(90deg, ${TEAL_SOFT}, ${TEAL})` }} />
                      <span>tasty</span>
                    </div>
                  </div>
                ),
                title: 'They drop one clue',
                body: (<>The Psychic names <b style={{ color: TEAL_DEEP }}>one thing</b> that fits that exact spot on the scale. Just a word or a phrase — no pointing, no winking.</>),
              },
              {
                shadow: '#F4C0B4',
                visual: <Dial mini target={70} needle={78} score={3} />,
                title: 'The team spins & guesses',
                body: (<>Everyone debates the clue and turns the dial together. Land <b style={{ color: TEAL_DEEP }}>bang on the target</b> for 4 points, close for 2 or 3. Then you swap and do it again.</>),
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-3.5 rounded-2xl"
                style={{
                  background: PAPER,
                  border: `2px solid ${BROWN}`,
                  padding: '26px 24px 28px',
                  boxShadow: `6px 6px 0 0 ${step.shadow}`,
                }}
              >
                <span
                  className="absolute"
                  style={{
                    top: -18,
                    left: 22,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: TEAL,
                    color: PAPER,
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: 20,
                    display: 'grid',
                    placeItems: 'center',
                    border: `2px solid ${INK}`,
                    transform: 'rotate(-4deg)',
                    boxShadow: `2px 2px 0 0 ${INK}`,
                  }}
                >
                  {i + 1}
                </span>
                <div className="wl-mini mt-1.5">
                  {step.visual}
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 21 }}>{step.title}</h3>
                <p style={{ fontSize: 16, color: '#4a423c' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SPECTRUMS ── */}
        <section className="max-w-[1180px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-2">
          <div className="text-center mb-11">
            <span
              style={{ fontFamily: "'Caveat', 'Baloo 2', cursive", fontWeight: 600, fontSize: 24, color: RED, transform: 'rotate(-1.4deg)', display: 'inline-block' }}
            >
              warning: friendships will be tested
            </span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, letterSpacing: '-0.02em', fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.12, marginTop: 6 }}>
              The spectrums you'll fight over
            </h2>
            <p style={{ maxWidth: 560, margin: '14px auto 0', fontSize: 18, color: '#4a423c' }}>
              The dial is split between two extremes. Where does it land? Nobody agrees — that's the whole point.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {SPECS.map((x, i) => (
              <div
                key={i}
                className="flex flex-col gap-3.5 rounded-2xl"
                style={{ background: PAPER, border: `2px solid ${BROWN}`, padding: '20px 22px' }}
              >
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18 }}>
                  {x.subj}
                  <span style={{ color: '#6B6B6B', fontWeight: 500, fontSize: 14, display: 'block', fontFamily: "'Baloo 2', sans-serif" }}>{x.note}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span style={{ fontSize: 13, fontWeight: 700, color: BROWN, whiteSpace: 'nowrap' }}>{x.l}</span>
                  <span
                    className="flex-1 relative"
                    style={{
                      height: 10,
                      borderRadius: 6,
                      background: `linear-gradient(90deg, #EBD9BC, ${TEAL_SOFT}, ${TEAL})`,
                      border: '1px solid rgba(90,58,31,0.25)',
                    }}
                  >
                    <span
                      className="absolute"
                      style={{
                        top: '50%',
                        left: `${x.pos}%`,
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: RED,
                        border: `2px solid ${PAPER}`,
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 1px 4px rgba(0,0,0,.25)',
                      }}
                    />
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: TEAL_DEEP, whiteSpace: 'nowrap' }}>{x.r}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="max-w-[1180px] mx-auto px-6 md:px-12 pt-12 md:pt-16">
          <div
            className="wl-final text-center relative overflow-hidden rounded-3xl"
            style={{
              background: TEAL,
              color: PAPER,
              border: `4px solid ${TEAL_DEEP}`,
              padding: '52px 28px',
            }}
          >
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 5vw, 44px)', letterSpacing: '-0.02em', position: 'relative' }}>
              Gather the group. Spin the dial.
            </h2>
            <p style={{ fontSize: 19, margin: '12px auto 28px', maxWidth: 520, opacity: 0.95, position: 'relative' }}>
              No app to download, no setup. Open it on one phone or the TV, pass it around, and find out who's actually on your wavelength.
            </p>
            <a href="https://wavelength.tumlet.com/" target="_blank" rel="noopener noreferrer" style={{ position: 'relative' }}>
              <button
                className="wl-btn inline-flex items-center justify-center gap-3 rounded-xl cursor-pointer"
                style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  padding: '16px 42px',
                  border: 0,
                  background: PAPER,
                  color: TEAL_DEEP,
                  boxShadow: `8px 8px 0 0 ${TEAL_DEEP}`,
                  transform: 'rotate(-0.88deg)',
                }}
              >
                <svg width={22} height={22} viewBox="0 0 24 24">
                  <path d="M7 5.5v13a1 1 0 0 0 1.52.86l10.5-6.5a1 1 0 0 0 0-1.72L8.52 4.64A1 1 0 0 0 7 5.5z" fill="currentColor" />
                </svg>
                Play Wavelength now
              </button>
            </a>
          </div>
        </section>

        {/* ── GAMES NOTE ── */}
        <section className="text-center my-16 px-6">
          <p style={{ fontSize: 18, color: '#4a423c' }}>
            more of our online games:{' '}
            <a href="/bichitra/" className="underline">bichitra</a>,{' '}
            <a href="/farak/" className="underline">farak</a>,{' '}
            <a href="/ganthan/" className="underline">ganthan</a>, and{' '}
            <a href="/thug/" className="underline">thug</a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Wavelength;
