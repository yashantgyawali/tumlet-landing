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
    title: 'Open Ganthan on your phone.',
    body: 'No login, no setup. Open it when you\'re about to call aama-baba, or right in the middle of dal-bhat.',
  },
  {
    icon: '2',
    title: 'Pick a question, or let it surprise you.',
    body: 'Tap through until one lands. Or hit shuffle and trust the app. Every question is available in Nepali and English.',
  },
  {
    icon: '3',
    title: 'Ask your family member and really listen.',
    body: 'Put the question out there. Then stop talking. The best part of Ganthan is what happens after you ask.',
  },
];

const Ganthan = () => {
  useEffect(() => {
    document.title = 'Ganthan | Meaningful Conversation Prompts for Nepali Families';
    setMetaTag('description', 'Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories and stories. Free and bilingual.');
    setMetaTag('keywords', 'ganthan, nepali family conversations, conversation prompts, nepali diaspora, bilingual questions, tumlet');
    setCanonical('https://tumlet.com/ganthan/');
    setPropertyTag('og:title', 'Ganthan | Meaningful Conversation Prompts for Nepali Families');
    setPropertyTag('og:description', 'Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories and stories. Free and bilingual.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/ganthan/');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Ganthan | Meaningful Conversation Prompts for Nepali Families');
    setMetaTag('twitter:description', 'Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories and stories. Free and bilingual.');
    setMetaTag('twitter:image', 'https://tumlet.com/tumlet-logo.png');

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Ganthan',
      description: 'Ganthan gives Nepali families meaningful conversation prompts to go beyond daily check-ins. Bilingual questions in Nepali and English.',
      url: 'https://ganthan.tumlet.com/',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any',
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
            style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, background: PEACH, letterSpacing: '0.18em' }}
          >
            गन्थन · Ganthan
          </span>

          <h1
            className="font-extrabold mb-5 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: INK, fontSize: 'clamp(32px, 5vw, 58px)', letterSpacing: '-0.01em' }}
          >
            Ganthan: conversations worth having with your family
          </h1>

          <p
            className="font-semibold mb-7 leading-snug"
            style={{ color: MUTED, fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(18px, 2.5vw, 24px)' }}
          >
            Because "k khanu bhayo?" shouldn't be the only question.
          </p>

          <div className="flex justify-center items-center gap-8 flex-wrap mb-14">
            <a
              href="https://ganthan.tumlet.com/"
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
              Start a conversation →
            </a>
            <a href="#how-it-works" className="underline font-medium text-base" style={{ color: ACCENT }}>
              See how it works →
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
              { num: 'Bilingual', lbl: 'Nepali + English' },
              { num: 'Free', lbl: 'forever' },
              { num: '500+', lbl: 'questions' },
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

        {/* ── STORY ── */}
        <article className="max-w-[760px] mx-auto px-6 mb-24">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, background: PEACH, letterSpacing: '0.18em' }}
          >
            Why we built it
          </span>
          <h2
            className="font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
          >
            The daily call is a habit. Ganthan makes it a conversation.
          </h2>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            There's a particular kind of emptiness after hanging up and realizing you didn't really learn anything new about the person you just spoke to. You talked about the weather, dinner, work... but not about what they dreamed of when they were twenty, what scared them growing up, or the stories they've quietly carried for years.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            Ganthan (गन्थन — "to weave" or "to connect") was built on a simple belief: the right question can unlock conversations you've never had.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            Inside are thoughtful prompts that families can answer in Nepali or English. Questions about childhood, first jobs, friendships, regrets, traditions, tiny moments, and the people your parents were before they became your parents.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            They're not meant to be finished in one sitting. They're meant to become part of your calls. Over time, they help you start asking these kinds of questions without needing Ganthan at all.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            We genuinely hope Ganthan helps you leave every conversation knowing the people you love just a little better than you did before.
          </p>
        </article>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="max-w-[1180px] mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, letterSpacing: '0.18em' }}
            >
              How it works
            </span>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
            >
              Three steps. One real conversation.
            </h2>
          </div>

          <div style={{ border: `3px solid ${ACCENT}`, background: CREAM, display: 'grid' }} className="rounded-2xl overflow-hidden grid-cols-1 lg:grid-cols-3">
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
              Free · Bilingual · No login needed
            </div>
            <h2
              className="font-extrabold leading-tight mb-4"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(26px, 4vw, 42px)', letterSpacing: '-0.01em' }}
            >
              Call your family. Then actually talk to them.
            </h2>
            <p className="text-lg leading-relaxed mb-7" style={{ color: '#130D01' }}>
              Ganthan is free, always. Open it before your next call and let one question do what a hundred "k chha?" conversations never quite managed.
            </p>
            <a
              href="https://ganthan.tumlet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-bold px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                background: INK,
                boxShadow: `8px 8px 0px ${ACCENT}`,
                transform: 'rotate(-0.88deg)',
                fontSize: '1.05rem',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-4px,-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
            >
              Start a conversation
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Ganthan;
