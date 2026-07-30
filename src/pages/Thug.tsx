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
const INK = '#130D01';
const CREAM = '#FAF1E4';
const PEACH = '#FDE8E4';
const YELLOW = '#F3B952';
const MUTED = '#4B5563';

const STEPS = [
  {
    icon: '1',
    title: 'Open Thug and pick a category.',
    body: 'Choose from deeply Nepali categories: थर, खाना, स्थान, brands, KTM cafés, जनावर. There\'s no shortage.',
  },
  {
    icon: '2',
    title: 'Pass the phone around, secretly.',
    body: 'Everyone reads the word in turn. Everyone except one person: they see "THUG" instead. They\'ve got nothing. They\'ve got to fake it.',
  },
  {
    icon: '3',
    title: 'Go around: one clue each.',
    body: 'Each player gives a single word clue about the category word. The Thug listens carefully and bluffs their way through. Watch faces. Listen closely.',
  },
  {
    icon: '4',
    title: 'Vote, and find out who was lying.',
    body: 'If the group correctly identifies the Thug, everyone wins. If the Thug survives without being caught, they win. It\'s pure social intelligence.',
  },
];

const Thug = () => {
  useEffect(() => {
    document.title = 'Thug | Social Deduction Game for Nepali Friend Groups';
    setMetaTag('description', 'Thug is a free social deduction game for Nepali friend groups. One person gets a different word. Can you figure out who? Built around Nepali culture.');
    setMetaTag('keywords', 'thug game, nepali social deduction game, nepali party game, tumlet, nepali friend groups');
    setCanonical('https://tumlet.com/thug/');
    setPropertyTag('og:title', 'Thug | Social Deduction Game for Nepali Friend Groups');
    setPropertyTag('og:description', 'Thug is a free social deduction game for Nepali friend groups. One person gets a different word. Can you figure out who? Built around Nepali culture.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/thug/');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Thug | Social Deduction Game for Nepali Friend Groups');
    setMetaTag('twitter:description', 'Thug is a free social deduction game for Nepali friend groups. One person gets a different word. Can you figure out who? Built around Nepali culture.');
    setMetaTag('twitter:image', 'https://tumlet.com/tumlet-logo.png');

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Thug',
      description: 'A free social deduction game for Nepali friend groups. One person gets a different word and must bluff their way through.',
      url: 'https://thug.tumlet.com/',
      applicationCategory: 'Game',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      numberOfPlayers: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 10 },
      creator: { '@type': 'Organization', name: 'Tumlet', url: 'https://tumlet.com' },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#ffffff', color: '#130D01', fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
      <Navbar />

      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="max-w-[760px] mx-auto px-6 pt-16 pb-0 mb-0 text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, background: PEACH, letterSpacing: '0.18em' }}
          >
            Thug · Free to play
          </span>

          <h1
            className="font-extrabold mb-5 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: INK, fontSize: 'clamp(32px, 5vw, 58px)', letterSpacing: '-0.01em' }}
          >
            Thug: the social deduction game for Nepali friend groups
          </h1>

          <p
            className="font-semibold mb-7 leading-snug"
            style={{ color: MUTED, fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(18px, 2.5vw, 24px)' }}
          >
            There is a Thug among you. They're hiding in plain sight.
          </p>

          <div className="flex justify-center items-center gap-8 flex-wrap mb-14">
            <a
              href="https://thug.tumlet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-12 py-4 rounded-xl text-white cursor-pointer transition-all duration-200 whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '1.1rem',
                background: ACCENT,
                boxShadow: `8px 8px 0px ${YELLOW}`,
                transform: 'rotate(-0.88deg)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-4px,-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
            >
              Find the Thug →
            </a>
            <a href="#how-it-works" className="underline font-medium text-base" style={{ color: ACCENT }}>
              See how to play →
            </a>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="max-w-[760px] mx-auto px-6 mb-20">
          <div
            className="grid grid-cols-3 rounded-2xl overflow-hidden"
            style={{ border: `3px solid ${ACCENT}`, background: CREAM }}
          >
            {[
              { num: '3–99+', lbl: 'players' },
              { num: 'Free', lbl: 'to play' },
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

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="max-w-[1180px] mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, letterSpacing: '0.18em' }}
            >
              How to play
            </span>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
            >
              Four steps and you're playing.
            </h2>
          </div>

          <div style={{ border: `3px solid ${ACCENT}`, background: CREAM, display: 'grid' }} className="rounded-2xl overflow-hidden grid-cols-1 md:grid-cols-2">
            {STEPS.map(({ icon, title, body }, i) => (
              <div key={i} className="flex gap-5 items-start p-8" style={{ borderRight: `2px solid ${ACCENT}`, borderBottom: `2px solid ${ACCENT}` }}>
                <div className="flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl" style={{ width: 56, height: 56, fontFamily: "'Outfit', sans-serif", background: PEACH, border: `2px solid ${ACCENT}`, color: ACCENT }}>
                  {icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Baloo 2', sans-serif", color: INK }} className="font-bold text-xl mb-1.5 leading-tight">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3a3225' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DARK FEATURE SECTION ── */}
        <section className="py-20 mb-24 relative overflow-hidden" style={{ background: INK, color: 'white' }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 15% 40%, rgba(255,255,255,0.04) 1px, transparent 1px), radial-gradient(circle at 80% 65%, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '44px 44px, 66px 66px',
            }}
          />
          <div className="max-w-[1180px] mx-auto px-6 relative">
            <div className="text-center mb-14">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
                style={{ fontFamily: "'Outfit', sans-serif", color: YELLOW, letterSpacing: '0.18em' }}
              >
                What makes Thug different
              </span>
              <h2
                className="font-extrabold leading-tight"
                style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '-0.01em' }}
              >
                Built for people who grew up Nepali.
              </h2>
              <p className="text-lg mt-3 max-w-lg mx-auto" style={{ color: CREAM }}>
                The categories are the game. And these categories are ours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'All categories are deeply Nepali',
                  body: 'No generic "animals" or "countries" lists. Every category is something that makes a Nepali person lean forward: last names, foods, places, brands, things you only know if you\'re from here.',
                },
                {
                  num: '02',
                  title: 'No app required during gameplay',
                  body: 'Thug generates the word and distributes it. After that, put the phone down and play. The social part of the game happens offline, in the room, between the people.',
                },
                {
                  num: '03',
                  title: 'Works with any group size 3–99+',
                  body: 'Three friends at a hostel or a huge family gathering, Thug scales either way. Any age that knows their Nepali culture can play. That\'s most of the table.',
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  className="rounded-2xl p-7"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '2px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <div
                    className="font-black leading-none mb-4"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: 40, color: YELLOW }}
                  >
                    {num}
                  </div>
                  <h3 className="font-bold text-xl mb-3 leading-tight" style={{ fontFamily: "'Baloo 2', sans-serif" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: CREAM }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEPALI CATEGORIES ── */}
        <section className="max-w-[760px] mx-auto px-6 mb-24">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, background: PEACH, letterSpacing: '0.18em' }}
          >
            The categories
          </span>
          <h2
            className="font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(26px, 4vw, 40px)', letterSpacing: '-0.01em' }}
          >
            You'll know these. That's the whole point.
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#2a241a' }}>
            The categories in Thug are the reason it works. They're specific enough that everyone has an opinion, familiar enough that giving a clue should be easy, unless you're the Thug.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              'Food · खाना',
              'Location · स्थान',
              'Brands',
              'Lastname · थर',
              'KTM Cafés',
              'Animals · जनावर',
            ].map((cat) => (
              <span
                key={cat}
                className="px-5 py-2.5 rounded-full font-semibold text-sm"
                style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  background: PEACH,
                  border: `2px solid ${ACCENT}`,
                  color: ACCENT,
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
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
              style={{ fontFamily: "'Outfit', sans-serif", color: '#130D01', letterSpacing: '0.16em' }}
            >
              Free · No login · 3–99+ players
            </div>
            <h2
              className="font-extrabold leading-tight mb-4"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(26px, 4vw, 42px)', letterSpacing: '-0.01em' }}
            >
              Someone in your group is lying right now.
            </h2>
            <p className="text-lg leading-relaxed mb-7" style={{ color: '#130D01' }}>
              Thug is free and needs no installation. Open it, pick a category, pass the phone. The game starts the moment everyone looks at their screen.
            </p>
            <a
              href="https://thug.tumlet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-bold px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                background: '#130D01',
                boxShadow: `8px 8px 0px ${ACCENT}`,
                transform: 'rotate(-0.88deg)',
                fontSize: '1.05rem',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-4px,-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
            >
              Find the Thug
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Thug;
