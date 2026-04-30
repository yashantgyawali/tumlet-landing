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
    title: 'Everyone opens the app.',
    body: "All players open Farak on their phone. Most see the same question. One person — picked at random — sees something completely different. Nobody knows who got the different one.",
  },
  {
    icon: '2',
    title: 'Everyone points at someone.',
    body: "On three, everyone points at the person who best fits their question. Fingers go up at the same time. Most fingers will go in similar directions. One set might not.",
  },
  {
    icon: '3',
    title: 'The real question is revealed.',
    body: "The original question appears for everyone to see. Now someone's logic starts to sound strange. Their answer made sense for a different question. The crack is there — you just have to find it.",
  },
  {
    icon: '4',
    title: 'Everyone defends their answer.',
    body: "Each person explains who they pointed at and why. The imposter has to lie. They heard a different question, so their reasoning will have a strange edge. They have to make it sound normal.",
  },
  {
    icon: '5',
    title: 'Vote on who got the different question.',
    body: "The group votes. If you catch the imposter, they lose. If they bluff well enough to avoid the vote, they win. Simple. Brutal. Extremely revealing.",
  },
];

const Farak = () => {
  useEffect(() => {
    document.title = "Farak | Who's Most Likely To — With an Imposter Twist";
    setMetaTag('description', "Farak is the imposter edition of Who's Most Likely To. Everyone gets the same question — except one. Can you catch the odd one out? Play free online with friends.");
    setMetaTag('keywords', 'farak, whos most likely to, imposter game, party game online, nepali party game, tumlet');
    setCanonical('https://tumlet.com/farak');
    setPropertyTag('og:title', "Farak | Who's Most Likely To — With an Imposter Twist");
    setPropertyTag('og:description', "Farak is the imposter edition of Who's Most Likely To. Everyone gets the same question — except one. Can you catch the odd one out? Play free online with friends.");
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/farak');
    setPropertyTag('og:image', 'https://tumlet.com/og-farak.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', "Farak | Who's Most Likely To — With an Imposter Twist");
    setMetaTag('twitter:description', "Farak is the imposter edition of Who's Most Likely To. Everyone gets the same question — except one. Can you catch the odd one out? Play free online with friends.");
    setMetaTag('twitter:image', 'https://tumlet.com/og-farak.png');

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Farak',
      description: "The imposter edition of Who's Most Likely To. Everyone gets the same question — except one player who gets something different.",
      url: 'https://farak.tumlet.com/',
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
            style={{ fontFamily: "'Outfit', sans-serif", color: '#F16147', background: '#FDE8E4', letterSpacing: '0.18em' }}
          >
            Tumlet · 3–10 players · Free
          </span>

          <h1
            className="font-extrabold mb-5 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(32px, 5vw, 58px)', letterSpacing: '-0.01em' }}
          >
            Farak — Who's Most Likely To, but with an imposter
          </h1>

          <p
            className="font-semibold mb-7 leading-snug"
            style={{ color: '#4B5563', fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(18px, 2.5vw, 24px)' }}
          >
            One person got a completely different question. They don't know it. You have to find them.
          </p>

          <div className="flex justify-center items-center gap-8 flex-wrap mb-14">
            <a
              href="https://farak.tumlet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-12 py-4 rounded-xl text-white cursor-pointer transition-all duration-200 whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '1.1rem',
                background: '#F16147',
                boxShadow: '8px 8px 0px #F3B952',
                transform: 'rotate(-0.88deg)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-4px,-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
            >
              Play Farak free →
            </a>
            <a href="#how-it-works" className="underline font-medium text-base" style={{ color: '#F16147' }}>
              How it works →
            </a>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="max-w-[760px] mx-auto px-6 mb-20">
          <div
            className="grid grid-cols-3 rounded-2xl overflow-hidden"
            style={{ border: '3px solid #F16147', background: '#FAF1E4' }}
          >
            {[
              { num: '3–10', lbl: 'players' },
              { num: 'Free', lbl: 'to play' },
              { num: '~5 min', lbl: 'a round' },
            ].map(({ num, lbl }, i) => (
              <div
                key={lbl}
                className="py-6 text-center"
                style={{ borderRight: i < 2 ? '2px solid #F16147' : undefined }}
              >
                <div className="font-extrabold text-3xl leading-none" style={{ fontFamily: "'Outfit', sans-serif", color: '#F16147' }}>{num}</div>
                <div className="text-sm font-semibold uppercase tracking-wider mt-1.5" style={{ color: '#6B6B6B', letterSpacing: '0.04em' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY IT WORKS ── */}
        <article className="max-w-[760px] mx-auto px-6 mb-24">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: '#F16147', background: '#FDE8E4', letterSpacing: '0.18em' }}
          >
            Why it works
          </span>
          <h2
            className="font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
          >
            The tension is instant.
          </h2>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            The moment the real question drops and everyone starts explaining their answer — that's where Farak lives. One person's reasoning will have a slightly different shape. Not wrong exactly, just angled differently. The group feels it before they can name it.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            Farak rewards people who read people. It's also a test of how well you know the group you're with — because a good imposter doesn't get caught by hiding. They get caught by someone who knows them well enough to notice that something is <em style={{ color: '#F16147', fontWeight: 600 }}>off</em>.
          </p>

          <p className="text-lg leading-relaxed mb-5" style={{ color: '#2a241a' }}>
            It works best with groups who already have history. The more you know each other, the sharper the reads, the better the bluffs, the louder the reveal. It's a second-or-third-hour-of-the-night game. When everyone's already talking and ready to turn on each other in the most affectionate way possible.
          </p>
        </article>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="max-w-[1180px] mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", color: '#F16147', letterSpacing: '0.18em' }}
            >
              How it works
            </span>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
            >
              One different question. One imposter. Five steps.
            </h2>
          </div>

          <div
            style={{ border: '3px solid #F16147', background: '#FAF1E4', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
            className="rounded-2xl overflow-hidden"
          >
            {STEPS.map(({ icon, title, body }, i) => (
              <div
                key={i}
                className="flex gap-5 items-start p-8"
                style={{
                  borderBottom: i < STEPS.length - 2 ? '2px solid #F16147' : undefined,
                  borderRight: i % 2 === 0 ? '2px solid #F16147' : undefined,
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl"
                  style={{ width: 56, height: 56, fontFamily: "'Outfit', sans-serif", background: '#FDE8E4', border: '2px solid #F16147', color: '#F16147' }}
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
              Free · No signup · Play with friends
            </div>
            <h2
              className="font-extrabold leading-tight mb-4"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.01em' }}
            >
              One of you is already lying. Find out who.
            </h2>
            <p className="text-lg leading-relaxed mb-7" style={{ color: '#130D01' }}>
              No signup. Open it, pass it around, play.
            </p>
            <a
              href="https://farak.tumlet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-12 py-4 rounded-xl text-white cursor-pointer transition-all duration-200 whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '1.1rem',
                background: '#130D01',
                boxShadow: '8px 8px 0px #F16147',
                transform: 'rotate(-0.88deg)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-4px,-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
            >
              Play Farak free →
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Farak;
