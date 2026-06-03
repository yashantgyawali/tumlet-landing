import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const STEPS = [
  {
    num: '01',
    title: 'First',
    body: 'All drivers secretly choose a number for how far they want to move on the board.',
  },
  {
    num: '02',
    title: 'Then',
    body: 'On the count of three, everyone reveals their number at the same time. NO CHEATING!!',
  },
  {
    num: '03',
    title: 'Finally',
    body: 'If two or more drivers pick the same number, they\'re stuck. Only unique numbers move forward. Only yellow would move 2 steps ahead if everyone else picked the same number — they\'re stuck because their numbers clashed.',
  },
  {
    num: '04',
    title: 'Complete one loop to win',
    body: 'First player to race all the way around Tundikhel and cross the finish wins. No dice. No luck. Just timing, bluff, and battery.',
  },
];

const TundikhElHow = () => {
  const rulesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'How to Play Race to Tundikhel | Instruction Video & Rules';
    setMetaTag('description', 'Watch the instruction video and learn how to play Race to Tundikhel — the Nepali board game by Tumlet. No dice, no luck, just bluff and battery.');
    setMetaTag('keywords', 'how to play race to tundikhel, tundikhel rules, nepali board game instructions, tumlet');
    setCanonical('https://tumlet.com/tundikhel-how/');
    setPropertyTag('og:title', 'How to Play Race to Tundikhel | Instruction Video & Rules');
    setPropertyTag('og:description', 'Watch the instruction video and learn how to play Race to Tundikhel — the Nepali board game by Tumlet.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/tundikhel-how/');
    setPropertyTag('og:image', 'https://tumlet.com/unfurl.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'How to Play Race to Tundikhel | Instruction Video & Rules');
    setMetaTag('twitter:description', 'Watch the instruction video and learn how to play Race to Tundikhel — the Nepali board game by Tumlet.');
    setMetaTag('twitter:image', 'https://tumlet.com/unfurl.png');
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#ffffff', color: '#130D01', fontFamily: "'Baloo 2', system-ui, sans-serif" }}>

      {/* ── NAV ── */}
      <nav className="flex flex-row justify-between items-center px-6 md:px-12 lg:px-24 py-5 border-b" style={{ borderColor: '#E5E5E5' }}>
        <Link to="/">
          <img className="w-[120px] md:w-[160px]" src="/tumlet-logo.png" alt="Tumlet Logo" />
        </Link>
        <button
          onClick={() => rulesRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="font-semibold text-sm px-5 py-2.5 rounded-xl border-2 transition-all duration-150"
          style={{ fontFamily: "'Outfit', sans-serif", borderColor: '#1F5F3A', color: '#1F5F3A', background: 'transparent' }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = '#1F5F3A';
            (e.currentTarget as HTMLElement).style.color = '#ffffff';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = '#1F5F3A';
          }}
        >
          Rules Reference
        </button>
      </nav>

      <main className="flex-1 px-6 md:px-12 lg:px-24 py-10">

        {/* ── HEADING ── */}
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", color: '#2D7A4F', background: '#EDF5DD', letterSpacing: '0.16em' }}
          >
            tumlet.com/tundikhel-how
          </span>
          <h1
            className="font-extrabold leading-tight mb-3"
            style={{ fontFamily: "'Baloo 2', sans-serif", color: '#1F5F3A', fontSize: 'clamp(26px, 5vw, 48px)', letterSpacing: '-0.01em' }}
          >
            How to Play Race to Tundikhel
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#3a3225' }}>
            Watch the video below — it's the fastest way to learn. Scroll down for a quick rules reference once you're done.
          </p>
        </div>

        {/* ── VIDEO ── */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '3px solid #1F5F3A', boxShadow: '8px 8px 0 #F3B952', aspectRatio: '16/9' }}
          >
            <iframe
              className="w-full h-full"
              src="https://drive.google.com/file/d/1TdYXJFCyP2mrr9zSUOmOFdj7bRrK7Gps/preview"
              title="How to play Race to Tundikhel — instruction video"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>

        {/* ── HOW TO PLAY ── */}
        <div ref={rulesRef} className="max-w-5xl mx-auto mb-16">
          <div className="mb-8 text-center">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", color: '#2D7A4F', letterSpacing: '0.18em' }}
            >
              Quick rules
            </span>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#1F5F3A', fontSize: 'clamp(24px, 4vw, 40px)', letterSpacing: '-0.01em' }}
            >
              How the game works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {STEPS.map(({ num, title, body }) => (
              <div
                key={num}
                className="rounded-2xl p-7 flex gap-5"
                style={{ background: '#FAF1E4', border: '2.5px solid #1F5F3A' }}
              >
                <div
                  className="flex-shrink-0 font-black leading-none"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: 48, color: '#C8E2B4', lineHeight: 1 }}
                >
                  {num}
                </div>
                <div>
                  <h3
                    className="font-bold text-xl mb-2 leading-tight"
                    style={{ fontFamily: "'Baloo 2', sans-serif", color: '#1F5F3A' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3a3225' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="max-w-2xl mx-auto mb-10">
          <div
            className="px-8 py-10 rounded-[20px] text-center"
            style={{
              background: '#F3B952',
              border: '3px solid #130D01',
              boxShadow: '8px 8px 0 #130D01',
              transform: 'rotate(-0.5deg)',
            }}
          >
            <h2
              className="font-extrabold mb-3 leading-tight"
              style={{ fontFamily: "'Baloo 2', sans-serif", color: '#130D01', fontSize: 'clamp(22px, 3vw, 34px)', letterSpacing: '-0.01em' }}
            >
              Follow us for launch updates
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#130D01' }}>
              Race to Tundikhel is coming soon. Follow us on Instagram to be first in line when it ships.
            </p>
            <a
              href="https://www.instagram.com/tumlet.boardgames/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-medium px-10 py-3.5 rounded-xl transition-all duration-200 whitespace-nowrap"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                background: '#130D01',
                boxShadow: '6px 6px 0px #F16147',
                transform: 'rotate(-0.88deg)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-3px,-3px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.6" fill="white"/>
              </svg>
              @tumlet.boardgames
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default TundikhElHow;
