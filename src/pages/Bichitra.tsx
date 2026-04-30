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
    title: 'A face appears on screen.',
    body: 'Each round shows you a photo. Could be anyone — a celebrity, a public figure, a random Nepali face. Your job is to look closely and trust your gut.',
  },
  {
    icon: '2',
    title: 'Pick the थर from the options.',
    body: 'Choose from a set of Nepali last names. Thapa? Shrestha? Rai? Tamang? You have one shot. Pick what feels right.',
  },
  {
    icon: '3',
    title: 'Find out how your guess compares.',
    body: 'After you answer, see what everyone else guessed. The distribution is the real game — are you in the majority, or hilariously alone in your read?',
  },
  {
    icon: '4',
    title: 'Share your score and challenge friends.',
    body: 'Post your results. Drop it in the group chat. Find out who among your friends is the true connoisseur of Nepali थर.',
  },
];

const Bichitra = () => {
  useEffect(() => {
    document.title = 'Bichitra | Guess the Nepali Last Name — Viral Quiz by Tumlet';
    setMetaTag('description', 'Bichitra is the viral Nepali last name quiz from Tumlet. Look at a face and guess the थर. Can you tell a Thapa from a Shrestha? Play free online now.');
    setMetaTag('keywords', 'bichitra, nepali last name quiz, nepali thar quiz, thapa shrestha quiz, tumlet, nepali game online');
    setCanonical('https://tumlet.com/bichitra');
    setPropertyTag('og:title', 'Bichitra | Guess the Nepali Last Name — Viral Quiz by Tumlet');
    setPropertyTag('og:description', 'Bichitra is the viral Nepali last name quiz from Tumlet. Look at a face and guess the थर. Can you tell a Thapa from a Shrestha? Play free online now.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/bichitra');
    setPropertyTag('og:image', 'https://tumlet.com/og-bichitra.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Bichitra | Guess the Nepali Last Name — Viral Quiz by Tumlet');
    setMetaTag('twitter:description', 'Bichitra is the viral Nepali last name quiz from Tumlet. Look at a face and guess the थर. Can you tell a Thapa from a Shrestha? Play free online now.');
    setMetaTag('twitter:image', 'https://tumlet.com/og-bichitra.png');

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Bichitra',
      description: 'A viral Nepali last name quiz from Tumlet. Look at a face and guess the थर.',
      url: 'https://bichitra.tumlet.com/',
      applicationCategory: 'Game',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      creator: { '@type': 'Organization', name: 'Tumlet', url: 'https://tumlet.com' },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#FAF1E4', color: '#130D01', fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
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
            Bichitra — the Nepali last name quiz
          </h1>

          <p
            className="font-semibold mb-7 leading-snug"
            style={{ color: '#364587', fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(18px, 2.5vw, 24px)' }}
          >
            Look at a face. Guess the थर. It sounds easy — until it isn't.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            Every Nepali knows the feeling. You see someone — at a party, in your class, across the room at a wedding — and before you even know their name, your brain is already running the calculation. <em style={{ color: '#364587', fontWeight: 600 }}>Thapa? Shrestha? Tamang?</em> We've all done it. We've all been wrong. Bichitra turns that very human instinct into a game.
          </p>

          <p className="text-lg leading-relaxed mb-9" style={{ color: '#2a241a' }}>
            Built in a weekend on a hunch, Bichitra went viral almost immediately — shared across group chats, reposted on TikTok, debated in comment sections. It hit a nerve because it's not really about guessing right. It's about the collective delusion that we all share: the idea that we can read a face and know the थर behind it. Spoiler: most of us can't.
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
              Try Bichitra now
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
              { num: '1 face', lbl: 'per round' },
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

        {/* ── WHY NEPALIS LOVE IT ── */}
        <article className="max-w-[760px] mx-auto px-6 mb-24">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: '#364587', background: '#BAC1E1', letterSpacing: '0.18em' }}
          >
            Why Nepalis love it
          </span>
          <h2
            className="font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
          >
            It taps into something we all carry.
          </h2>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            There's a particular kind of social intelligence that Nepalis develop growing up — an awareness of caste markers, regional features, family names, and the unspoken categories we're sorted into before we can object. <em style={{ color: '#364587', fontWeight: 600 }}>Yo Brahmin ho ki Chettri?</em> It's a question that hangs in the air at every family gathering, every first meeting, every new classroom. Bichitra doesn't invent this curiosity. It just gives it a shape.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            What makes the game stick is the reveal. Not whether you were right — but seeing what everyone else guessed. The distribution is the real joke. When 60% of players are convinced a face is a Rai and 30% say Magar and 8% say Shrestha, that disagreement is the whole experience. It's a mirror held up to collective assumptions, and it's funny and uncomfortable in equal measure.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            Young Nepalis shared it because it felt like an inside joke — the kind you can only get if you grew up navigating the same social terrain. And then it spread beyond that, because the gut feeling of guessing and being wrong is universal enough that even the diaspora, even people who'd never set foot in Nepal, wanted to play.
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
              Four rounds. Zero excuses.
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
                  borderBottom: i < 2 ? '2px solid #7184BE' : undefined,
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
              Think you can read a face?
            </h2>
            <p className="text-lg leading-relaxed mb-7" style={{ color: '#130D01' }}>
              Thousands of Nepalis have tried. Most were overconfident. All had opinions. Come find out where you land.
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
              Try Bichitra now
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Bichitra;
