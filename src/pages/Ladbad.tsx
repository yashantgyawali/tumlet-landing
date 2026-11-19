import React, { useEffect, useState } from 'react';
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

const PLAY_URL = 'https://ladbad.tumlet.com/';
const PRACTICE_URL = 'https://ladbad.tumlet.com/practice/';

const CARD_BG = '#FDE07E';
const BORDER = '#5A2416';
const CORAL = '#FF7B6B';
const INK = '#130D01';
const MUTED = '#6B5E4E';

const TITLE = 'Ladbad | Guess the Gibberish, Nepali Edition | Tumlet';
const DESCRIPTION =
  'Read silly English out loud until it turns into Nepali. Ladbad is a free Nepali gibberish party game you play in teams on your phones.';

const CARDS = [
  { label: '#1 - Nepali poem', decoy: 'Moon? A mad Anne!', np: 'मुना मदन', rom: 'Muna Madan' },
  { label: '#2 - Nepali phrase', decoy: 'The shine cosh? Ooh! Buck a manna!', np: 'दशैंको शुभकामना', rom: 'Dashainko shubhakamana' },
  { label: '#3 - Nepali song', decoy: 'Full cone? Come, Ma! Fool, I sense, sir.', np: 'फूलको आँखामा फूलै संसार', rom: 'Phoolko Aankhama Phoolai Sansar' },
];

const STEPS = [
  'Start a room and share the code.',
  'The reader reads the gibberish out loud.',
  'Their team shouts the Nepali before time runs out.',
];

const cardStyle: React.CSSProperties = {
  background: CARD_BG,
  border: `3px solid ${BORDER}`,
  borderRadius: 28,
};

const GibberishCard: React.FC<(typeof CARDS)[number]> = ({ label, decoy, np, rom }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen(o => !o)}
      aria-pressed={open}
      aria-label={open ? `${decoy}: ${rom}` : `${decoy}. Tap to see the answer`}
      className="lb-card flex flex-col items-center text-center px-6 py-8 cursor-pointer"
      style={{ ...cardStyle, aspectRatio: '3 / 4' }}
    >
      <span style={{ fontSize: 18, fontWeight: 600, color: INK }}>{label}</span>
      <span className="flex-1 flex flex-col items-center justify-center">
        {open ? (
          <>
            <span className="lb-outline" style={{ fontSize: 'clamp(30px, 3.2vw, 38px)', WebkitTextStroke: `3px ${INK}` }}>{np}</span>
            <span style={{ fontSize: 16, fontWeight: 600, color: INK, marginTop: 6 }}>{rom}</span>
          </>
        ) : (
          <span className="lb-outline" style={{ fontSize: 'clamp(28px, 3vw, 34px)' }}>{decoy}</span>
        )}
      </span>
      <span style={{ fontSize: 14, fontWeight: 600, color: MUTED }}>{open ? 'tap to hide' : 'say it fast · tap to check'}</span>
    </button>
  );
};

const Ladbad: React.FC = () => {
  useEffect(() => {
    document.title = TITLE;
    setMetaTag('description', DESCRIPTION);
    setMetaTag('keywords', 'ladbad, लडबड, nepali gibberish game, guess the gibberish nepali, nepali party game, tumlet, nepali game online');
    setCanonical('https://tumlet.com/ladbad/');
    setPropertyTag('og:title', TITLE);
    setPropertyTag('og:description', DESCRIPTION);
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/ladbad/');
    setPropertyTag('og:image', 'https://tumlet.com/ladbad-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', TITLE);
    setMetaTag('twitter:description', DESCRIPTION);
    setMetaTag('twitter:image', 'https://tumlet.com/ladbad-logo.png');

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Ladbad',
      alternateName: 'लडबड',
      description: 'A Nepali gibberish party game for phones. Read silly English out loud until your team hears the Nepali hiding inside it.',
      url: PLAY_URL,
      applicationCategory: 'Game',
      operatingSystem: 'Web',
      inLanguage: ['en', 'ne'],
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      creator: { '@type': 'Organization', name: 'Tumlet', url: 'https://tumlet.com' },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#FFFFFF', color: INK, fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
      <style>{`
        .lb-outline {
          font-family: 'Baloo 2', sans-serif; font-weight: 800; line-height: 1.15;
          color: ${CORAL}; -webkit-text-stroke: 5px ${INK}; paint-order: stroke fill;
        }
        .lb-card { transition: transform 0.15s ease; }
        .lb-card:hover { transform: translateY(-4px) rotate(-0.6deg); }
        .lb-btn { transition: transform 0.15s ease; }
        .lb-btn:hover { transform: translate(-3px, -3px); }
      `}</style>

      <Navbar />

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="max-w-[640px] mx-auto px-6 pt-12 mb-20">
          <div className="flex flex-col items-center text-center px-6 py-12" style={cardStyle}>
            <h1 className="sr-only">Ladbad: guess the gibberish, Nepali edition</h1>
            <img
              src="/ladbad-logo.png"
              alt="लडबड (Ladbad)"
              width={1036}
              height={669}
              className="mb-6"
              style={{ width: 'min(340px, 80%)', height: 'auto' }}
            />
            <p className="mb-8" style={{ fontSize: 'clamp(22px, 3.4vw, 30px)', fontWeight: 600, lineHeight: 1.25 }}>
              Guess the Gibberish<br />Nepali edition
            </p>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lb-btn inline-block font-bold px-10 py-3.5 rounded-xl text-white"
              style={{ fontSize: '1.15rem', background: CORAL, border: `3px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}` }}
            >
              Play free →
            </a>
          </div>
        </section>

        {/* ── CARDS ── */}
        <section className="max-w-[1080px] mx-auto px-6 mb-20">
          <h2 className="text-center font-extrabold mb-8" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)' }}>
            Read it out loud. Faster.
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[360px] sm:max-w-none mx-auto">
            {CARDS.map(c => <GibberishCard key={c.decoy} {...c} />)}
          </div>
        </section>

        {/* ── HOW ── */}
        <section className="max-w-[560px] mx-auto px-6 mb-20">
          <h2 className="text-center font-extrabold mb-6" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)' }}>
            How to play
          </h2>
          <ol className="flex flex-col gap-3">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-4" style={{ fontSize: 18, fontWeight: 500 }}>
                <span
                  className="flex-shrink-0 flex items-center justify-center font-extrabold rounded-full"
                  style={{ width: 36, height: 36, background: CARD_BG, border: `2px solid ${BORDER}` }}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="text-center mt-10" style={{ fontSize: 16, color: MUTED }}>
            Free · one phone each ·{' '}
            <a href={PRACTICE_URL} target="_blank" rel="noopener noreferrer" className="underline">practice solo</a>
          </p>
        </section>

        {/* ── GAMES NOTE ── */}
        <section className="text-center mb-16 px-6">
          <p style={{ fontSize: 16, color: '#4a423c' }}>
            more of our online games:{' '}
            <a href="/bichitra/" className="underline">bichitra</a>,{' '}
            <a href="/ganthan/" className="underline">ganthan</a>,{' '}
            <a href="/thug/" className="underline">thug</a>, and{' '}
            <a href="/wavelength/" className="underline">wavelength</a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ladbad;
