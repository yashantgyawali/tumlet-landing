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

const ACCENT = '#F16147';
const ACCENT_MID = '#F79A80';
const PEACH = '#FDE8E4';
const CREAM = '#FAF1E4';
const YELLOW = '#F3B952';
const INK = '#130D01';
const MUTED = '#4B5563';
const PAPER = '#FFFFFF';

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
    s += `<path d="M ${cx} ${cy} L ${lx.toFixed(1)} ${ly.toFixed(1)} A ${R} ${R} 0 0 1 ${rx.toFixed(1)} ${ry.toFixed(1)} Z" fill="none" stroke="${ACCENT}" stroke-width="3" stroke-dasharray="7 7"/>`;
    s += `</g>`;
    const [qx, qy] = pt(cx, cy, R * 0.6, o.target);
    s += `<text x="${qx.toFixed(1)}" y="${(qy + 16).toFixed(1)}" font-family="Outfit, sans-serif" font-weight="800" font-size="58" fill="${ACCENT}" text-anchor="middle" opacity="0.85">?</text>`;
  } else {
    s += wedge(cx, cy, R, o.target + 30, o.target - 30, PEACH);
    s += wedge(cx, cy, R, o.target + 17, o.target - 17, ACCENT_MID);
    s += wedge(cx, cy, R, o.target + 7, o.target - 7, ACCENT);
    const band = (a: number, txt: string, col: string) => {
      const [x, y] = pt(cx, cy, R * 0.82, a);
      return `<text x="${x.toFixed(1)}" y="${(y + 5).toFixed(1)}" font-family="Outfit, sans-serif" font-weight="800" font-size="16" fill="${col}" text-anchor="middle">${txt}</text>`;
    };
    s += band(o.target, '4', '#fff');
    s += band(o.target + 12, '3', '#fff');
    s += band(o.target - 12, '3', '#fff');
    s += band(o.target + 23.5, '2', ACCENT);
    s += band(o.target - 23.5, '2', ACCENT);
  }

  const [alx, aly] = pt(cx, cy, R, 180);
  const [arx, ary] = pt(cx, cy, R, 0);
  s += `<path d="M ${alx} ${aly} A ${R} ${R} 0 0 1 ${arx} ${ary}" fill="none" stroke="${INK}" stroke-width="4"/>`;
  s += `<line x1="${alx}" y1="${aly}" x2="${arx}" y2="${ary}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;

  for (let a = 0; a <= 180; a += 15) {
    const [x1, y1] = pt(cx, cy, R, a);
    const [x2, y2] = pt(cx, cy, R - 11, a);
    s += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${INK}" stroke-width="2" opacity="0.4"/>`;
  }

  if (o.needle !== null) {
    const [nx, ny] = pt(cx, cy, R - 16, o.needle);
    s += `<g class="${o.spin ? 'needle-spin' : ''}">`;
    s += `<line x1="${cx}" y1="${cy}" x2="${nx.toFixed(1)}" y2="${ny.toFixed(1)}" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>`;
    s += `<circle cx="${nx.toFixed(1)}" cy="${ny.toFixed(1)}" r="7" fill="${YELLOW}" stroke="${INK}" stroke-width="2.5"/>`;
    s += `</g>`;
  }

  s += `<circle cx="${cx}" cy="${cy}" r="15" fill="${ACCENT}" stroke="${INK}" stroke-width="3"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="4" fill="${INK}"/>`;

  if (o.score !== null && o.needle !== null) {
    const [sx, sy] = pt(cx, cy, R - 16, o.needle);
    s += `<g transform="translate(${(sx + 14).toFixed(1)}, ${(sy - 18).toFixed(1)}) rotate(-6)">`;
    s += `<rect x="-4" y="-20" width="58" height="34" rx="9" fill="${ACCENT}" stroke="${INK}" stroke-width="2.5"/>`;
    s += `<text x="25" y="3" font-family="Outfit, sans-serif" font-weight="800" font-size="20" fill="#fff" text-anchor="middle">+${o.score}</text>`;
    s += `</g>`;
  }

  if (o.poleL) s += `<text x="6" y="${H - 6}" font-family="Baloo 2, sans-serif" font-weight="700" font-size="17" fill="${INK}" text-anchor="start">◄ ${o.poleL}</text>`;
  if (o.poleR) s += `<text x="${W - 6}" y="${H - 6}" font-family="Baloo 2, sans-serif" font-weight="700" font-size="17" fill="${ACCENT}" text-anchor="end">${o.poleR} ►</text>`;

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
    setMetaTag('description', "One player gives a clue, the rest spin the dial to guess. A free Tumlet party game for reading your friends' minds. Play online.");
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
    <div className="min-h-screen flex flex-col" style={{ background: PAPER, color: INK, fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
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
          border-top: 13px solid ${INK};
        }
        .wl-mini { height: 132px; display: flex; align-items: center; justify-content: flex-start; }
      `}</style>

      <Navbar />

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="max-w-[760px] mx-auto px-6 pt-16 pb-0 mb-0 text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, background: PEACH, letterSpacing: '0.18em' }}
          >
            Tumlet · Free to play
          </span>

          <h1
            className="font-extrabold mb-3 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: INK, fontSize: 'clamp(32px, 5vw, 58px)', letterSpacing: '-0.01em' }}
          >
            Wavelength: read your friends' minds
          </h1>

          <svg
            viewBox="0 0 460 18"
            fill="none"
            stroke="currentColor"
            strokeWidth={6}
            strokeLinecap="round"
            style={{ width: 'clamp(200px, 40vw, 340px)', height: 16, color: ACCENT, display: 'block' }}
            className="mx-auto mb-5"
          >
            <path d="M5 11 Q35 -4 65 11 T125 11 T185 11 T245 11 T305 11 T365 11 T425 11 T455 11" />
          </svg>

          <p
            className="font-semibold mb-7 leading-snug"
            style={{ color: MUTED, fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(18px, 2.5vw, 24px)' }}
          >
            One player sees a secret spot on the dial and gives a clue. Everyone else argues, debates, and spins.
          </p>

          <div className="flex justify-center items-center gap-8 flex-wrap mb-12">
            <a
              href="https://wavelength.tumlet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="wl-btn inline-flex items-center gap-2 font-bold px-12 py-4 rounded-xl text-white cursor-pointer whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '1.1rem',
                background: ACCENT,
                boxShadow: `8px 8px 0px ${YELLOW}`,
                transform: 'rotate(-0.88deg)',
              }}
            >
              Play Wavelength free →
            </a>
            <a href="#how" className="underline font-medium text-base" style={{ color: ACCENT }}>
              How to play →
            </a>
          </div>

          <div className="max-w-[520px] mx-auto mb-14">
            <Dial target={112} needle={96} spin poleL="overrated" poleR="underrated" />
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="max-w-[760px] mx-auto px-6 mb-20">
          <div
            className="grid grid-cols-3 rounded-2xl overflow-hidden"
            style={{ border: `3px solid ${ACCENT}`, background: CREAM }}
          >
            {[
              { num: '2–12', lbl: 'players' },
              { num: '13+', lbl: 'age' },
              { num: '10 min', lbl: 'a round' },
            ].map(({ num, lbl }, i) => (
              <div
                key={lbl}
                className="py-6 text-center"
                style={{ borderRight: i < 2 ? `2px solid ${ACCENT}` : undefined }}
              >
                <div className="font-extrabold text-3xl leading-none" style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT }}>{num}</div>
                <div className="text-sm font-semibold uppercase tracking-wider mt-1.5" style={{ color: '#6B6B6B', letterSpacing: '0.04em' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW TO PLAY ── */}
        <section id="how" className="max-w-[1180px] mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, letterSpacing: '0.18em' }}
            >
              How to play
            </span>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: INK, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
            >
              Three turns and you're playing.
            </h2>
            <p className="text-lg mt-4 mx-auto" style={{ maxWidth: 560, color: '#2a241a' }}>
              Think of the dial as a scale between two opposites. Somewhere on it is a hidden target. Your job as a team: find it.
            </p>
          </div>

          <div
            style={{ border: `3px solid ${ACCENT}`, background: CREAM, display: 'grid' }}
            className="rounded-2xl overflow-hidden grid-cols-1 lg:grid-cols-3"
          >
            {[
              {
                visual: <Dial mini target={70} mystery poleL="" poleR="" />,
                title: 'One player gets a secret',
                body: (<>The dial shows a spectrum, like <b style={{ color: ACCENT }}>overrated ↔ underrated</b>. One teammate, the <b style={{ color: ACCENT }}>Psychic</b>, secretly sees where the target sits. Nobody else can.</>),
              },
              {
                visual: (
                  <div className="flex flex-col items-start gap-2.5">
                    <div
                      className="wl-clue-bubble relative"
                      style={{
                        background: ACCENT,
                        color: PAPER,
                        fontWeight: 700,
                        fontSize: 17,
                        padding: '12px 20px',
                        borderRadius: 14,
                        transform: 'rotate(-1.5deg)',
                        boxShadow: `3px 3px 0 0 ${INK}`,
                        border: `2px solid ${INK}`,
                      }}
                    >
                      "...sutkeri ko khana?"
                    </div>
                    <div className="flex gap-2.5 items-center" style={{ fontSize: 13, color: INK, fontWeight: 700 }}>
                      <span>bland</span>
                      <span style={{ width: 86, height: 8, borderRadius: 6, background: `linear-gradient(90deg, ${PEACH}, ${ACCENT})` }} />
                      <span>tasty</span>
                    </div>
                  </div>
                ),
                title: 'They drop one clue',
                body: (<>The Psychic names <b style={{ color: ACCENT }}>one thing</b> that fits that exact spot on the scale. Just a word or a phrase: no pointing, no winking.</>),
              },
              {
                visual: <Dial mini target={70} needle={78} score={3} />,
                title: 'The team spins & guesses',
                body: (<>Everyone debates the clue and turns the dial together. Land <b style={{ color: ACCENT }}>bang on the target</b> for 4 points, close for 2 or 3. Then you swap and do it again.</>),
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex flex-col p-8"
                style={{ borderRight: `2px solid ${ACCENT}`, borderBottom: `2px solid ${ACCENT}` }}
              >
                <div className="wl-mini mb-6">
                  {step.visual}
                </div>
                <div className="flex gap-5 items-start">
                  <div
                    className="flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl"
                    style={{ width: 56, height: 56, fontFamily: "'Outfit', sans-serif", background: PEACH, border: `2px solid ${ACCENT}`, color: ACCENT }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1.5 leading-tight" style={{ fontFamily: "'Baloo 2', sans-serif", color: INK }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#3a3225' }}>{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SPECTRUMS ── */}
        <section className="max-w-[1180px] mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, background: PEACH, letterSpacing: '0.18em' }}
            >
              The spectrums
            </span>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: INK, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
            >
              The spectrums you'll fight over.
            </h2>
            <p className="text-lg mt-4 mx-auto" style={{ maxWidth: 560, color: '#2a241a' }}>
              The dial is split between two extremes. Where does it land? Nobody agrees. That's the whole point.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {SPECS.map((x, i) => (
              <div
                key={i}
                className="flex flex-col gap-3.5 rounded-2xl"
                style={{ background: CREAM, border: `2px solid ${ACCENT}`, padding: '20px 22px' }}
              >
                <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 18, color: INK }}>
                  {x.subj}
                  <span style={{ color: '#6B6B6B', fontWeight: 500, fontSize: 14, display: 'block' }}>{x.note}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span style={{ fontSize: 13, fontWeight: 700, color: INK, whiteSpace: 'nowrap' }}>{x.l}</span>
                  <span
                    className="flex-1 relative"
                    style={{
                      height: 10,
                      borderRadius: 6,
                      background: `linear-gradient(90deg, ${PAPER}, ${PEACH}, ${ACCENT})`,
                      border: `1px solid ${ACCENT}`,
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
                        background: ACCENT,
                        border: `2px solid ${PAPER}`,
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 1px 4px rgba(0,0,0,.25)',
                      }}
                    />
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: ACCENT, whiteSpace: 'nowrap' }}>{x.r}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="max-w-[760px] mx-auto px-6 mb-24">
          <div
            className="text-center px-8 py-14 rounded-[20px]"
            style={{
              background: YELLOW,
              border: `3px solid ${INK}`,
              boxShadow: `12px 12px 0 ${INK}`,
              transform: 'rotate(-0.5deg)',
            }}
          >
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", color: INK, letterSpacing: '0.16em' }}
            >
              Free · No download · 2–12 players
            </div>
            <h2
              className="font-extrabold leading-tight mb-4"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: INK, fontSize: 'clamp(26px, 4vw, 42px)', letterSpacing: '-0.01em' }}
            >
              Gather the group. Spin the dial.
            </h2>
            <p className="text-lg leading-relaxed mb-7" style={{ color: INK }}>
              No app to download, no setup. Open it on one phone or the TV, pass it around, and find out who's actually on your wavelength.
            </p>
            <a
              href="https://wavelength.tumlet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="wl-btn inline-flex items-center gap-2 text-white font-bold px-12 py-4 rounded-xl cursor-pointer whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '1.1rem',
                background: INK,
                boxShadow: `8px 8px 0px ${ACCENT}`,
                transform: 'rotate(-0.88deg)',
              }}
            >
              Play Wavelength free →
            </a>
          </div>
        </section>

        {/* ── GAMES NOTE ── */}
        <section className="text-center my-16 px-6">
          <p style={{ fontSize: 18, color: '#4a423c' }}>
            more of our online games:{' '}
            <a href="/bichitra/" className="underline">bichitra</a>,{' '}
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
