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

const PRINCIPLES = [
  {
    num: '01',
    title: 'Familiar world first',
    body: 'Before learning the rules, players should recognize the setting. Microbuses, traffic, potholes, landmarks. It should feel like a real place.',
  },
  {
    num: '02',
    title: 'Control over chance',
    body: 'Players should feel responsible for their moves. The board has chaos, but the decisions are yours.',
  },
  {
    num: '03',
    title: 'Fast and replayable',
    body: 'Quick to learn. Quick to play. Enough interaction to create tension every round.',
  },
];

const STEPS = [
  {
    icon: '1',
    title: 'Pick your charge.',
    body: 'Each player chooses a card in secret. Higher numbers move you farther. Lower numbers help you stay flexible.',
  },
  {
    icon: '2',
    title: 'Reveal at the same time.',
    body: 'If two players choose the same number, they both stay where they are. If not, everyone moves based on their card.',
  },
  {
    icon: '3',
    title: 'Resolve the road.',
    body: 'Landing on certain spaces triggers events. You might get a boost. You might hit a pothole. You might get blocked.',
  },
  {
    icon: '4',
    title: 'Complete one loop to win.',
    body: 'First player to go around Tundikhel wins.',
  },
];

const Tundikhel = () => {
  useEffect(() => {
    document.title = 'Race to Tundikhel — A new board game from Tumlet | tumlet.com/tundikhel';
    setMetaTag('description', 'Race to Tundikhel is a new Nepali board game from Tumlet. No dice, no luck — just micro-driver chaos through the streets of Kathmandu. Coming soon.');
    setMetaTag('keywords', 'race to tundikhel, tundikhel board game, nepali board game, kathmandu game, tumlet');
    setCanonical('https://tumlet.com/tundikhel');
    setPropertyTag('og:title', 'Race to Tundikhel — A new board game from Tumlet');
    setPropertyTag('og:description', 'Race to Tundikhel is a new Nepali board game from Tumlet. No dice, no luck — just micro-driver chaos through the streets of Kathmandu. Coming soon.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/tundikhel');
    setPropertyTag('og:image', 'https://tumlet.com/tundikhel/hero-art.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Race to Tundikhel — A new board game from Tumlet');
    setMetaTag('twitter:description', 'Race to Tundikhel is a new Nepali board game from Tumlet. No dice, no luck — just micro-driver chaos through the streets of Kathmandu. Coming soon.');
    setMetaTag('twitter:image', 'https://tumlet.com/tundikhel/hero-art.png');

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Game',
      name: 'Race to Tundikhel',
      description: 'A Nepali board game where players race micro-buses through the streets of Kathmandu to reach Tundikhel first. No dice — pure bluff and battery management.',
      url: 'https://tumlet.com/tundikhel',
      image: 'https://tumlet.com/tundikhel/hero-art.png',
      numberOfPlayers: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 6 },
      typicalAgeRange: '10+',
      creator: { '@type': 'Organization', name: 'Tumlet', url: 'https://tumlet.com' },
      gameLocation: { '@type': 'Place', name: 'Tundikhel, Kathmandu, Nepal' },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#ffffff', color: '#130D01', fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
      <Navbar />

      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-8 md:pt-14 mb-20">
          <div
            className="relative rounded-[20px] overflow-hidden border-4"
            style={{ background: '#EDF5DD', borderColor: '#1F5F3A' }}
          >
            {/* Coming badge */}
            <span
              className="absolute top-6 left-6 z-10 font-bold text-sm uppercase tracking-widest px-4 py-2 rounded-full border-2"
              style={{
                background: '#F3B952',
                color: '#130D01',
                borderColor: '#130D01',
                transform: 'rotate(-3deg)',
                boxShadow: '4px 4px 0 #130D01',
                letterSpacing: '0.08em',
              }}
            >
              Coming Soon · 2026
            </span>

            {/* Hero art */}
            <div style={{ background: '#BDE0B8' }}>
              <img
                src="/tundikhel/hero-art.png"
                alt="Race to Tundikhel — micro-driver racing through Kathmandu, with Dharahara tower in the background, electric microbuses dodging cones and potholes"
                className="w-full block"
              />
            </div>

            {/* Hero copy */}
            <div className="px-8 md:px-16 pt-10 pb-14 text-center">
              <span
                className="inline-block text-sm font-medium px-4 py-1 rounded-full border mb-7"
                style={{
                  fontFamily: "'Outfit', system-ui, monospace",
                  background: '#FAF1E4',
                  color: '#1F5F3A',
                  borderColor: '#1F5F3A',
                  borderWidth: '1.5px',
                }}
              >
                tumlet.com/tundikhel
              </span>

              <h1
                className="font-extrabold mb-5 leading-tight"
                style={{ fontFamily: "'Baloo 2', sans-serif", color: '#1F5F3A', fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: '-0.01em' }}
              >
                Race to Tundikhel — A new Nepali board game from Tumlet
              </h1>

              <p className="text-xl max-w-2xl mx-auto mb-9 leading-relaxed" style={{ color: '#2a3a2a' }}>
                A bus race through the streets of Kathmandu. No dice. No luck. Just you, your battery, and the worst traffic in the world.{' '}
                <em style={{ color: '#2D7A4F', fontWeight: 600 }}>Race to Tundikhel</em> is the next game from Tumlet — and we're letting you in on it early.
              </p>

              <div className="flex justify-center items-center gap-8 flex-wrap">
                <a
                  href="https://www.instagram.com/tumlet.boardgames/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white font-medium px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap"
                  style={{
                    fontFamily: "'Baloo 2', sans-serif",
                    background: '#2D7A4F',
                    boxShadow: '8px 8px 0px #F3B952',
                    transform: 'rotate(-0.88deg)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-4px,-4px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="white"/></svg>
                  Follow for launch
                </a>
                <a href="#story" className="underline font-medium text-base" style={{ color: '#1F5F3A' }}>
                  Read the story →
                </a>
              </div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 border-t-2" style={{ background: '#FAF1E4', borderColor: '#1F5F3A' }}>
              {[
                { num: '2–6', lbl: 'drivers' },
                { num: '0', lbl: 'dice' },
                { num: '15m', lbl: 'a round' },
              ].map(({ num, lbl }, i) => (
                <div
                  key={lbl}
                  className="py-5 text-center"
                  style={{ borderRight: i < 2 ? `2px solid #1F5F3A` : undefined }}
                >
                  <div className="font-extrabold text-3xl leading-none" style={{ fontFamily: "'Outfit', sans-serif", color: '#1F5F3A' }}>{num}</div>
                  <div className="text-sm font-semibold uppercase tracking-wider mt-1.5" style={{ color: '#6B6B6B', letterSpacing: '0.04em' }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <article id="story" className="max-w-[760px] mx-auto px-6 mb-24">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: '#2D7A4F', background: '#EDF5DD', letterSpacing: '0.18em' }}
          >
            The story
          </span>
          <h2
            className="font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: '#1F5F3A', fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-0.01em' }}
          >
            Race to Tundikhel
          </h2>

          {[
            <>We started with one rule: every Nepali should recognize the world instantly.</>,
            <>The traffic. The potholes. The cows blocking the road. The smell of momo from a side gully. The conductor leaning out shouting "Ratnapark!"</>,
            <>That everyday Kathmandu experience became the setting.</>,
            <>So we chose a simple goal: race to Tundikhel.</>,
            <>Everyone has been stuck on that route at some point. Honking. Waiting. Moving inch by inch. We turned that shared experience into a game you can actually win.</>,
          ].map((content, i) => (
            <p key={i} className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>{content}</p>
          ))}

          <h3 className="font-extrabold text-3xl mb-5 mt-10 leading-tight" style={{ color: '#1F5F3A' }}>
            What makes it different
          </h3>

          {[
            <><strong style={{ color: '#1F5F3A' }}>No dice. No luck.</strong><br />Every move is a decision. You choose how far to go. You decide when to push and when to hold back. If something goes wrong, it's not random. It's because of the choices on the table.</>,
            <><strong style={{ color: '#1F5F3A' }}>Simple to learn.</strong><br />The goal is clear: complete one loop around Tundikhel and win. Most players understand the rules in a few minutes.</>,
            <><strong style={{ color: '#1F5F3A' }}>Depth comes from players.</strong><br />The strategy is in reading others, timing your moves, and managing your cards. Not in memorizing rules.</>,
          ].map((content, i) => (
            <p key={i} className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>{content}</p>
          ))}

          <p className="mt-9 text-lg leading-relaxed" style={{ color: '#2a241a' }}>
            We are still playtesting and refining. But this is the core of the game.
          </p>
        </article>

        {/* ── PRINCIPLES ── */}
        <section className="max-w-[1180px] mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", color: '#2D7A4F', letterSpacing: '0.18em' }}
            >
              What we focused on
            </span>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#1F5F3A', fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.01em' }}
            >
              What we focused on
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRINCIPLES.map(({ num, title, body }) => (
              <div
                key={num}
                className="rounded-2xl p-8 transition-transform duration-200 cursor-default"
                style={{
                  background: '#FAF1E4',
                  border: '3px solid #1F5F3A',
                  boxShadow: '8px 8px 0 #1F5F3A',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '10px 10px 0 #1F5F3A';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = '';
                  (e.currentTarget as HTMLElement).style.boxShadow = '8px 8px 0 #1F5F3A';
                }}
              >
                <div
                  className="font-black leading-none mb-4"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: 64, color: '#2D7A4F' }}
                >
                  {num}
                </div>
                <h3
                  className="font-bold text-2xl mb-3 leading-tight"
                  style={{ fontFamily: "'Baloo 2', sans-serif", color: '#1F5F3A' }}
                >
                  {title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#3a3225' }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── GAME PEEK ── */}
        <section className="py-20 mb-24 relative overflow-hidden" style={{ background: '#1F5F3A', color: 'white' }}>
          {/* dot texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04) 1px, transparent 1px), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '40px 40px, 60px 60px',
            }}
          />
          <div className="max-w-[1180px] mx-auto px-6 relative">
            <div className="text-center mb-14">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
                style={{ fontFamily: "'Outfit', sans-serif", color: '#F3B952', letterSpacing: '0.18em' }}
              >
                A peek inside the box
              </span>
              <h2
                className="font-extrabold leading-tight"
                style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.01em' }}
              >
                What you'll be holding.
              </h2>
              <p className="text-lg mt-3 max-w-lg mx-auto" style={{ color: '#C8E2B4' }}>
                Battery cards, road cards, micro-drivers, and a board that's basically Kathmandu after a strike.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                {
                  src: '/tundikhel/cards-set.png',
                  alt: 'Race to Tundikhel road cards: positive, negative, and neutral events including Khaldo Filled, Cows on Road, Sawari, Dharahara, and All Ahead +1',
                  title: 'Road cards',
                  desc: 'Positive, negative, neutral. Sawari, cows, Khaldo, Bharaldo — every Nepali traffic moment, in your hand.',
                  pill: '~30 cards',
                },
                {
                  src: '/tundikhel/battery-charger.png',
                  alt: 'Battery and charger tokens — six-sided dial showing 1 through 6',
                  title: 'Battery dials',
                  desc: 'The heart of the bluff. Pick your charge, hide your hand, reveal at the same time.',
                  pill: '1 per driver',
                },
              ].map(({ src, alt, title, desc, pill }) => (
                <div key={title} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.18)' }}>
                  <div className="flex items-center justify-center" style={{ background: '#1a1a1a', aspectRatio: '4/3' }}>
                    <img src={src} alt={alt} className="object-contain" style={{ maxWidth: '92%', maxHeight: '92%' }} />
                  </div>
                  <div className="px-6 py-5 flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <h4 className="font-bold text-xl leading-tight" style={{ fontFamily: "'Baloo 2', sans-serif" }}>{title}</h4>
                      <p className="text-sm mt-1" style={{ color: '#C8E2B4' }}>{desc}</p>
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full flex-shrink-0"
                      style={{ fontFamily: "'Outfit', sans-serif", color: '#F3B952', border: '1.5px solid #F3B952', letterSpacing: '0.08em' }}
                    >
                      {pill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="max-w-[1180px] mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", color: '#2D7A4F', letterSpacing: '0.18em' }}
            >
              How the game works
            </span>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#1F5F3A', fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.01em' }}
            >
              How the game works
            </h2>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '3px solid #1F5F3A', background: '#FAF1E4', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          >
            {STEPS.map(({ icon, title, body }, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-5 items-start p-8"
                  style={{
                    borderRight: '2px solid #1F5F3A',
                    borderBottom: '2px solid #1F5F3A',
                  }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl"
                    style={{
                      width: 56, height: 56,
                      fontFamily: "'Outfit', sans-serif",
                      background: '#C8E2B4',
                      border: '2px solid #1F5F3A',
                      color: '#1F5F3A',
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1.5 leading-tight" style={{ fontFamily: "'Baloo 2', sans-serif", color: '#1F5F3A' }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#3a3225' }}>{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SIGNUP CTA ── */}
        <section className="max-w-[760px] mx-auto px-6 mb-24">
          <div
            className="text-center px-8 py-14 rounded-[20px]"
            style={{
              background: '#F3B952',
              border: '3px solid #130D01',
              boxShadow: '12px 12px 0 #130D01',
              transform: 'rotate(-0.5deg)',
            }}
          >
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", color: '#130D01', letterSpacing: '0.16em' }}
            >
              Get on the list
            </div>
            <h2
              className="font-extrabold leading-tight mb-4"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
            >
              Be first to know when <em>Race to Tundikhel</em> ships.
            </h2>
            <p className="text-lg leading-relaxed mb-7" style={{ color: '#130D01' }}>
              We're following the same path we did with Bluff Momo — small batches, hand-packed, signed copies for the first run. Follow us on Instagram and you'll be in the front of the line.
            </p>
            <a
              href="https://www.instagram.com/tumlet.boardgames/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-medium px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                background: '#130D01',
                boxShadow: '8px 8px 0px #F16147',
                transform: 'rotate(-0.88deg)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-4px,-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="white"/></svg>
              Follow @tumlet.boardgames
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Tundikhel;
