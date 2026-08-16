import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface CharacterInfo {
  id: string;
  name: string;
  action: string;
  blocks: string;
}

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

const VIDEO_ID = 'di6Ek8Nf4mQ';
const SECTION = 'px-6 md:px-12 lg:px-24 max-w-5xl mx-auto';
const H2 = 'font-baloo font-extrabold text-2xl md:text-3xl text-tumlet-text';
const BODY = 'text-tumlet-text/80 leading-relaxed';

const BluffMomo = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    document.title = 'Bluff Momo Rules | How to Play the Nepali Card Game';
    setMetaTag('description', 'Learn how to play Bluff Momo, the Nepali bluffing card game by Tumlet. Watch the gameplay video and reference every character\'s actions and blocks.');
    setMetaTag('keywords', 'bluff momo rules, how to play bluff momo, nepali card game, tumlet bluff momo');
    setCanonical('https://tumlet.com/bluff-momo-rules/');
    setPropertyTag('og:title', 'Bluff Momo Rules | How to Play the Nepali Card Game');
    setPropertyTag('og:description', 'Learn how to play Bluff Momo, the Nepali bluffing card game by Tumlet. Watch the gameplay video and reference every character\'s actions and blocks.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/bluff-momo-rules/');
    setPropertyTag('og:image', 'https://tumlet.com/unfurl.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Bluff Momo Rules | How to Play the Nepali Card Game');
    setMetaTag('twitter:description', 'Learn how to play Bluff Momo, the Nepali bluffing card game by Tumlet. Watch the gameplay video and reference every character\'s actions and blocks.');
    setMetaTag('twitter:image', 'https://tumlet.com/unfurl.png');
  }, []);

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const characters: CharacterInfo[] = [
    {
      id: 'hante',
      name: 'हन्ते',
      action: 'Take 3 momo from the middle pile in one move',
      blocks: 'Nothing',
    },
    {
      id: 'chor',
      name: 'चोर',
      action: 'Steal 2 momo from any player',
      blocks: 'चोर\'s attempt to steal your momo',
    },
    {
      id: 'bhattiko-dai',
      name: 'भट्टीको दाई',
      action: 'Use 3 momo to poison any player. They lose one card',
      blocks: 'Nothing',
    },
    {
      id: 'aama',
      name: 'आमा',
      action: 'None',
      blocks: 'भट्टीको दाई\'s poison attempt',
    },
    {
      id: 'mantri',
      name: 'मन्त्री',
      action: 'Force any player to show one of their cards, or draw a new card from the deck, look at it, and put back any 1 of your cards',
      blocks: 'चोर\'s attempt to steal your momo, and मन्त्री\'s attempt to look at your card',
    },
  ];

  const basics = [
    ['Any', 'Take 1 momo from the middle', 'Cannot be blocked or challenged'],
    ['Any', 'Use 7 momo to food-poison another player. They lose one card', 'Cannot be blocked or challenged'],
  ];

  return (
    <div className="min-h-screen flex flex-col font-baloo text-tumlet-text bg-white">
      <Navbar />

      <main className="flex-1 py-10 md:py-14">
        {/* Hero */}
        <div className={SECTION}>
          <span className="inline-block font-outfit text-xs font-bold uppercase tracking-[0.16em] text-tumlet-primaryRed bg-tumlet-beige rounded-full px-3 py-1">
            Rules and video
          </span>
          <h1 className="font-baloo font-extrabold leading-tight mt-4 mb-4 text-4xl md:text-6xl text-tumlet-text">
            How to play Bluff Momo
          </h1>
          <p className="text-lg md:text-xl text-tumlet-text/70 max-w-[56ch] leading-relaxed">
            Watch the video below, then keep the character table nearby for your first few rounds.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-8">
            <Link to="/bluff-momo-manual/" className="cta-button color-red !px-8">
              <BookOpen size={18} />
              Read the full manual
            </Link>
            <button
              type="button"
              onClick={scrollToVideo}
              className="font-outfit font-semibold underline underline-offset-4 text-tumlet-text hover:text-tumlet-primaryRed transition-colors"
            >
              Watch the tutorial
            </button>
          </div>
        </div>

        {/* Video */}
        <div className={`${SECTION} mt-14`} ref={videoRef}>
          <div className="border-[3px] border-[#130D01] rounded-2xl shadow-[8px_8px_0_#130D01] overflow-hidden -rotate-[0.5deg]">
            {playing ? (
              <iframe
                className="w-full aspect-video block"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
                title="How to play Bluff Momo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play the How to play Bluff Momo video"
                className="block w-full p-0 border-0 bg-transparent cursor-pointer"
              >
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="How to play Bluff Momo, on Tumlet's YouTube channel"
                  className="w-full block aspect-video object-cover"
                />
              </button>
            )}

            <div className="bg-tumlet-beige px-5 py-4 flex items-center justify-between gap-3">
              <div className="text-left">
                <div className="font-baloo font-bold text-base text-[#130D01]">How to play Bluff Momo</div>
                <a
                  href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-outfit text-[13px] text-[#6B6B6B] hover:text-tumlet-primaryRed"
                >
                  Watch on YouTube →
                </a>
              </div>
              {!playing && (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="flex-none bg-tumlet-primaryRed text-white font-baloo font-bold text-[13px] px-4 py-2 rounded-lg shadow-[3px_3px_0_#130D01] cursor-pointer"
                >
                  ▶ Watch
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Character reference */}
        <div className={`${SECTION} mt-20`}>
          <h2 className={H2}>Character reference</h2>
          <p className={`${BODY} mt-2 mb-6 max-w-[56ch]`}>
            Three copies of each character are in the deck. You can claim any of them whether or not you hold the card.
          </p>

          <div className="overflow-x-auto rounded-xl border-2 border-tumlet-text/10">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-tumlet-beige">
                <tr>
                  <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Character</th>
                  <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Action</th>
                  <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Blocks</th>
                </tr>
              </thead>
              <tbody>
                {basics.map(([who, action, blocks], i) => (
                  <tr key={i} className="border-t-2 border-tumlet-text/10 bg-tumlet-beige/40">
                    <td className="px-5 py-4 font-bold whitespace-nowrap">{who}</td>
                    <td className={`px-5 py-4 ${BODY}`}>{action}</td>
                    <td className={`px-5 py-4 ${BODY}`}>{blocks}</td>
                  </tr>
                ))}
                {characters.map((char) => (
                  <tr key={char.id} className="border-t-2 border-tumlet-text/10">
                    <td className="px-5 py-4 font-bold whitespace-nowrap">{char.name}</td>
                    <td className={`px-5 py-4 ${BODY}`}>{char.action}</td>
                    <td className={`px-5 py-4 ${BODY}`}>{char.blocks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Manual */}
        <div className={`${SECTION} mt-20`}>
          <Link
            to="/bluff-momo-manual/"
            className="group flex flex-wrap items-center gap-6 rounded-xl border-2 border-tumlet-primaryYellow/60 bg-tumlet-beige p-7 md:p-9 shadow-[8px_8px_0px_0px_#F3B952] transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1"
          >
            <span className="flex-none w-14 h-14 rounded-full bg-tumlet-primaryRed text-white flex items-center justify-center">
              <BookOpen size={26} />
            </span>
            <span className="flex-1 basis-[280px] min-w-0">
              <span className="block font-baloo font-extrabold text-2xl">The full manual</span>
              <span className={`block ${BODY} mt-1`}>
                Setup, turns, bluffing, poison and a printable quick reference, page by page. Each page is narrated if
                you would rather listen.
              </span>
            </span>
            <span className="flex-none flex items-center gap-2 font-outfit font-semibold text-tumlet-primaryRed">
              Open
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BluffMomo;
