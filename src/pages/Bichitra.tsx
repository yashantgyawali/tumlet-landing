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

const STEPS = [
  {
    icon: '1',
    title: 'An image appears.',
    body: "Something in it is the last name. Look closely. It might be obvious. It might take a minute. That's the whole game.",
  },
  {
    icon: '2',
    title: 'Type the थर.',
    body: "No options. No hints to start. Just you and the image. Trust what you see — or think you see.",
  },
  {
    icon: '3',
    title: 'Getting close?',
    body: "You'll get a nudge. Still stuck? Three wrong guesses unlocks an extra hint — but by then your pride is already on the line.",
  },
  {
    icon: '4',
    title: "Can't move on until you crack it.",
    body: "That's the rule. That's also why people finish every round.",
  },
  {
    icon: '5',
    title: 'Six packs to play.',
    body: 'Different themes, same satisfying click when it lands.',
  },
];

const Bichitra = () => {
  useEffect(() => {
    document.title = 'Bichitra | Guess the Nepali Last Name';
    setMetaTag('description', 'Bichitra is a Nepali last name puzzle from Tumlet. A photo hides a थर somewhere inside it — can you find it? No options, no shortcuts. Play free online now.');
    setMetaTag('keywords', 'bichitra, nepali last name quiz, nepali thar puzzle, tumlet, nepali game online, guess nepali last name');
    setCanonical('https://tumlet.com/bichitra');
    setPropertyTag('og:title', 'Bichitra | Guess the Nepali Last Name');
    setPropertyTag('og:description', 'A photo. A hidden clue. Can you guess the Nepali last name? No options — just you and the image. Play free online.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/bichitra');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Bichitra | Guess the Nepali Last Name');
    setMetaTag('twitter:description', 'A photo. A hidden clue. Can you guess the Nepali last name? No options — just you and the image. Play free online.');
    setMetaTag('twitter:image', 'https://tumlet.com/tumlet-logo.png');

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Bichitra',
      description: 'A Nepali last name puzzle. A photo hides a थर somewhere inside it — no options, type your guess and find it.',
      url: 'https://bichitra.tumlet.com/',
      applicationCategory: 'Game',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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
            style={{ fontFamily: "'Outfit', sans-serif", color: '#364587', background: '#BAC1E1', letterSpacing: '0.18em' }}
          >
            Tumlet · Free to play
          </span>

          <h1
            className="font-extrabold mb-5 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(32px, 5vw, 58px)', letterSpacing: '-0.01em' }}
          >
            Bichitra — Guess the Nepali Last Name
          </h1>

          <p
            className="font-semibold mb-7 leading-snug"
            style={{ color: '#4B5563', fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(18px, 2.5vw, 24px)' }}
          >
            It's not about reading faces. The थर is hiding somewhere in the image — you just have to find it.
          </p>

          <div className="flex justify-center items-center gap-8 flex-wrap mb-14">
            <a
              href="https://bichitra.tumlet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-12 py-4 rounded-xl text-white cursor-pointer transition-all duration-200 whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '1.1rem',
                background: '#364587',
                boxShadow: '8px 8px 0px #F3B952',
                transform: 'rotate(-0.88deg)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-4px,-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
            >
              Play Bichitra free →
            </a>
            <a href="#how-it-works" className="underline font-medium text-base" style={{ color: '#364587' }}>
              How it works →
            </a>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="max-w-[760px] mx-auto px-6 mb-20">
          <div
            className="grid grid-cols-3 rounded-2xl overflow-hidden"
            style={{ border: '3px solid #7184BE', background: '#FAF1E4' }}
          >
            {[
              { num: '6', lbl: 'packs' },
              { num: 'Free', lbl: 'to play' },
              { num: 'Viral', lbl: 'in Nepal' },
            ].map(({ num, lbl }, i) => (
              <div
                key={lbl}
                className="py-6 text-center"
                style={{ borderRight: i < 2 ? '2px solid #7184BE' : undefined }}
              >
                <div className="font-extrabold text-3xl leading-none" style={{ fontFamily: "'Outfit', sans-serif", color: '#364587' }}>{num}</div>
                <div className="text-sm font-semibold uppercase tracking-wider mt-1.5" style={{ color: '#6B6B6B', letterSpacing: '0.04em' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY IT'S ADDICTIVE ── */}
        <article className="max-w-[760px] mx-auto px-6 mb-24">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: '#364587', background: '#BAC1E1', letterSpacing: '0.18em' }}
          >
            Why it's addictive
          </span>
          <h2
            className="font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
          >
            The moment it clicks, you can't unsee it.
          </h2>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            Each image hides a Nepali last name inside it — visually, cleverly, sometimes maddeningly. Type your guess. Too far off? You're stuck. Getting warm? You'll know. Three wrong answers and you earn a hint — but by then your pride is already on the line.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            It's the kind of puzzle that makes you feel genius when you crack it and unreasonably frustrated when you don't. Nepalis have been dropping it in group chats with zero context and watching friends spiral.
          </p>
        </article>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="max-w-[1180px] mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", color: '#364587', letterSpacing: '0.18em' }}
            >
              How it works
            </span>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
            >
              Simple rules. 2 maddening puzzles.
            </h2>
          </div>

          <div
            style={{ border: '3px solid #7184BE', background: '#FAF1E4', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
            className="rounded-2xl overflow-hidden"
          >
            {STEPS.map(({ icon, title, body }, i) => (
              <div
                key={i}
                className="flex gap-5 items-start p-8"
                style={{
                  borderBottom: i < STEPS.length - 2 ? '2px solid #7184BE' : undefined,
                  borderRight: i % 2 === 0 ? '2px solid #7184BE' : undefined,
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl"
                  style={{ width: 56, height: 56, fontFamily: "'Outfit', sans-serif", background: '#BAC1E1', border: '2px solid #7184BE', color: '#364587' }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1.5 leading-tight" style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3a3225' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA CARD ── */}
        <section className="max-w-[760px] mx-auto mb-24 px-6">
          <div
            style={{ background: '#F3B952', border: '3px solid #130D01', boxShadow: '12px 12px 0 #130D01', transform: 'rotate(-0.5deg)' }}
            className="text-center px-8 py-14 rounded-[20px]"
          >
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", color: '#130D01', letterSpacing: '0.16em' }}
            >
              Free · No signup · Play now
            </div>
            <h2
              className="font-extrabold leading-tight mb-4"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
            >
              Think you can guess the Nepali last name?
            </h2>
            <p className="text-lg leading-relaxed mb-7" style={{ color: '#130D01' }}>
              Most people need at least one hint. Prove them wrong.
            </p>
            <a
              href="https://bichitra.tumlet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-12 py-4 rounded-xl text-white cursor-pointer transition-all duration-200 whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '1.1rem',
                background: '#130D01',
                boxShadow: '8px 8px 0px #364587',
                transform: 'rotate(-0.88deg)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-4px,-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
            >
              Play Bichitra free →
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Bichitra;
