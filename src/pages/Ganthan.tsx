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
const SECONDARY = '#7184BE';
const SOFT_BG = '#BAC1E1';

const STEPS = [
  {
    icon: '1',
    title: 'Open Ganthan on your phone.',
    body: 'No login, no setup. Open it when you\'re about to call aama-baba, or right in the middle of dal-bhat.',
  },
  {
    icon: '2',
    title: 'Pick a question — or let it surprise you.',
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
    setMetaTag('description', 'Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories, stories, and more. Free, bilingual, and made with love.');
    setMetaTag('keywords', 'ganthan, nepali family conversations, conversation prompts, nepali diaspora, bilingual questions, tumlet');
    setCanonical('https://tumlet.com/ganthan');
    setPropertyTag('og:title', 'Ganthan | Meaningful Conversation Prompts for Nepali Families');
    setPropertyTag('og:description', 'Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories, stories, and more. Free, bilingual, and made with love.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/ganthan');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Ganthan | Meaningful Conversation Prompts for Nepali Families');
    setMetaTag('twitter:description', 'Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories, stories, and more. Free, bilingual, and made with love.');
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
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-14 mb-20">
          <div
            className="relative rounded-[20px] overflow-hidden border-4"
            style={{ background: '#F0EBF8', borderColor: ACCENT }}
          >
            <div className="px-8 md:px-16 pt-14 pb-12 text-center">
              <span
                className="inline-block text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full border-2 mb-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  background: '#FAF1E4',
                  color: ACCENT,
                  borderColor: ACCENT,
                  letterSpacing: '0.1em',
                }}
              >
                गन्थन · Ganthan
              </span>

              <h1
                className="font-extrabold mb-5 leading-tight"
                style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(30px, 5vw, 58px)', letterSpacing: '-0.01em' }}
              >
                Ganthan — conversations worth having with your family
              </h1>

              <p
                className="font-semibold text-2xl mb-8"
                style={{ fontFamily: "'Outfit', sans-serif", color: SECONDARY }}
              >
                Because "k khanu bhayo?" shouldn't be the only question.
              </p>

              <div className="flex justify-center items-center gap-8 flex-wrap mb-11">
                <a
                  href="https://ganthan.tumlet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-bold px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap text-white"
                  style={{
                    fontFamily: "'Baloo 2', sans-serif",
                    background: ACCENT,
                    boxShadow: '8px 8px 0px #130D01',
                    transform: 'rotate(-0.88deg)',
                    fontSize: '1.1rem',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-4px,-4px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
                >
                  Start a conversation
                </a>
                <a href="#how-it-works" className="underline font-medium text-base" style={{ color: ACCENT }}>
                  See how it works →
                </a>
              </div>

              <p className="text-lg max-w-2xl mx-auto mb-5 leading-relaxed" style={{ color: '#2a241a' }}>
                A lot of Nepalis live far from the people they grew up with. Maybe you're in Kathmandu while baba is in Pokhara. Maybe you're in Australia and aama is back home. The calls happen — sometimes every day — but after a while, they start to sound the same. How's the weather. What did you eat. Sleep well.
              </p>

              <p className="text-lg max-w-2xl mx-auto mb-11 leading-relaxed" style={{ color: '#2a241a' }}>
                Ganthan was made to break that routine. You open the app, get a question, and ask it. That's all. Some questions are light. Some go deep. All of them are more interesting than the weather.
              </p>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 border-t-2" style={{ background: '#FAF1E4', borderColor: ACCENT }}>
              {[
                { num: 'Bilingual', lbl: 'Nepali + English' },
                { num: 'Free', lbl: 'forever' },
                { num: 'Infinite', lbl: 'questions' },
              ].map(({ num, lbl }, i) => (
                <div
                  key={lbl}
                  className="py-5 text-center"
                  style={{ borderRight: i < 2 ? `2px solid ${ACCENT}` : undefined }}
                >
                  <div className="font-extrabold text-2xl leading-none" style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT }}>{num}</div>
                  <div className="text-sm font-semibold uppercase tracking-wider mt-1.5" style={{ color: '#6B6B6B', letterSpacing: '0.04em' }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <article className="max-w-[760px] mx-auto px-6 mb-24">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, background: '#F0EBF8', letterSpacing: '0.18em' }}
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
            There's a specific kind of loneliness in a phone call that ends and you realize you didn't actually learn anything new about the person you called. You know they're fine. You know they ate. You don't know what they were thinking about at 3am last Tuesday, or what they wish they'd done differently, or what memory makes them laugh when no one's watching.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            Ganthan — गन्थन, which means "to weave" or "to connect" — is built on one belief: the right question can open up years of conversation. We wrote questions that aama can answer in Nepali and you can answer in English. Questions about childhood, about what your parents were like before they were parents, about the things that shaped your family without anyone naming them. The app is the easy part. The conversation is yours.
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

          <div style={{ border: `3px solid ${ACCENT}`, background: '#FAF1E4', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }} className="rounded-2xl overflow-hidden">
            {STEPS.map(({ icon, title, body }, i) => (
              <div key={i} className="flex gap-5 items-start p-8" style={{ borderBottom: i < 2 ? `2px solid ${ACCENT}` : undefined, borderRight: i % 2 === 0 ? `2px solid ${ACCENT}` : undefined }}>
                <div className="flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl" style={{ width: 56, height: 56, fontFamily: "'Outfit', sans-serif", background: SOFT_BG, border: `2px solid ${ACCENT}`, color: ACCENT }}>
                  {icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Baloo 2', sans-serif", color: ACCENT }} className="font-bold text-xl mb-1.5 leading-tight">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3a3225' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DARK FEATURE SECTION ── */}
        <section className="py-20 mb-24 relative overflow-hidden" style={{ background: SECONDARY, color: 'white' }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(circle at 75% 70%, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px, 60px 60px',
            }}
          />
          <div className="max-w-[1180px] mx-auto px-6 relative">
            <div className="text-center mb-14">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
                style={{ fontFamily: "'Outfit', sans-serif", color: '#F3B952', letterSpacing: '0.18em' }}
              >
                What makes it different
              </span>
              <h2
                className="font-extrabold leading-tight"
                style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '-0.01em' }}
              >
                Questions that actually go somewhere.
              </h2>
              <p className="text-lg mt-3 max-w-lg mx-auto" style={{ color: SOFT_BG }}>
                Not icebreakers. Not party games. Questions built for families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Bilingual — Nepali and English',
                  body: 'Every question works in both languages so aama can answer in her words and you can answer in yours. No one gets left out of the conversation.',
                },
                {
                  num: '02',
                  title: 'Built for real conversations, not small talk',
                  body: 'These aren\'t conversation starters for strangers. They\'re questions designed to help you actually know the people you love — including sides of them you\'ve never seen.',
                },
                {
                  num: '03',
                  title: 'Works mid-call, mid-meal, mid-anything',
                  body: 'Pull it out during a phone call, a video chat, or dal-bhat on a Sunday. No login, no setup, no waiting. Just press a button and ask.',
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
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: 40, color: '#F3B952' }}
                  >
                    {num}
                  </div>
                  <h3 className="font-bold text-xl mb-3 leading-tight" style={{ fontFamily: "'Baloo 2', sans-serif" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: SOFT_BG }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="max-w-[760px] mx-auto px-6 mb-24">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: ACCENT, background: '#F0EBF8', letterSpacing: '0.18em' }}
          >
            Who it's for
          </span>
          <h2
            className="font-extrabold mb-8 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(26px, 4vw, 40px)', letterSpacing: '-0.01em' }}
          >
            If you have a family you don't talk to deeply enough, this is for you.
          </h2>

          <div className="flex flex-col gap-5">
            {[
              { who: 'Students abroad missing home', desc: 'You call every week and the call is fine. Ganthan helps you make it mean something.' },
              { who: 'Couples learning each other\'s childhoods', desc: 'You know the big stories. Ganthan gets to the small ones — the ones that actually shaped who they are.' },
              { who: 'Friends who want to go deeper', desc: 'Not every conversation has to be banter. Some nights you want to actually know what your people are carrying.' },
            ].map(({ who, desc }) => (
              <div
                key={who}
                className="flex gap-5 items-start p-6 rounded-xl"
                style={{ background: '#F0EBF8', border: `2px solid ${SOFT_BG}` }}
              >
                <div className="flex-shrink-0" style={{ width: 12, height: 12, borderRadius: '50%', background: ACCENT, marginTop: 6 }} />
                <div>
                  <p className="font-bold text-lg leading-tight mb-1" style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01' }}>{who}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#3a3225' }}>{desc}</p>
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
                background: '#130D01',
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
