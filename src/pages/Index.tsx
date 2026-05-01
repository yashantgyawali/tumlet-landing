import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';
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

const games = [
  {
    name: 'Bluff Momo',
    coverClass: 'bg-[#F3B952] text-[#130D01]',
    description: 'Kathmandu streets. Bluff your way to the biggest momo pile.',
    href: '/bluff-momo-rules',
  },
  {
    name: 'Ganthan',
    coverClass: 'bg-[#F16147] text-white',
    description: 'For the family group chat. Questions that spark more than "khanu bhayo?"',
    href: '/ganthan',
  },
  {
    name: 'Bichitra',
    coverClass: 'bg-[#FAF1E4] text-[#130D01] border-b-2 border-[#130D01]',
    description: 'A Nepali quiz game. How well do you know your own culture?',
    href: '/bichitra',
  },
  {
    name: 'Farak',
    coverClass: 'bg-[#130D01] text-white',
    description: 'Spot the odd one out — before someone spots you.',
    href: '/farak',
  },
  {
    name: 'Thug',
    coverClass: 'bg-[#4a6a3e] text-white',
    description: 'Social deduction, rooted in Nepali categories. Who\'s the thug?',
    href: '/thug',
  },
  {
    name: 'Kobadi',
    coverClass: 'bg-[#7184BE] text-white',
    description: 'The classic Nepali team sport, now a card game.',
    href: 'https://kobadi.tumlet.com/',
    external: true,
  },
];

const Index = () => {
  const bluffMomoMeta = [
    { icon: '/player.svg', text: '2–6 players' },
    { icon: '/age.svg',    text: 'age 13+' },
    { icon: '/time.svg',   text: '11 minutes' },
  ];

  useEffect(() => {
    document.title = 'Tumlet | Spreading Playfulness Across Nepal';
    setMetaTag('description', 'Play, laugh, repeat! Tumlet crafts games that spark connection, nostalgia, and pure fun for young Nepali adults.');
    setCanonical('https://tumlet.com/');
    setPropertyTag('og:title', 'Tumlet | Spreading Playfulness Across Nepal');
    setPropertyTag('og:description', 'Play, laugh, repeat! Tumlet crafts games that spark connection, nostalgia, and pure fun for young Nepali adults.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/');
    setPropertyTag('og:image', 'https://tumlet.com/unfurl.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Tumlet | Spreading Playfulness Across Nepal');
    setMetaTag('twitter:description', 'Play, laugh, repeat! Tumlet crafts games that spark connection, nostalgia, and pure fun for young Nepali adults.');
    setMetaTag('twitter:image', 'https://tumlet.com/unfurl.png');

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Tumlet',
      description: 'Nepali board game company spreading playfulness across Nepal',
      url: 'https://tumlet.com',
      logo: 'https://tumlet.com/tumlet-logo.png',
      sameAs: ['https://www.instagram.com/tumlet.boardgames/'],
      foundingDate: '2022',
      foundingLocation: { '@type': 'Place', name: 'Kathmandu, Nepal' },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-tumlet-beige">
      <Navbar />

      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-12 pt-8 md:pt-14">
          <GameHero
            backgroundClass="bluff-background"
            logoSrc="/bluff-momo-logo.png"
            imageSrc="/char-combined.webp"
            imageClass=" w-[145%] self-center rounded-2xl"
            description="Bluff momo is a card game based in the street of kathmandu, where players bluff, deceive, and outsmart their friends to steal the most momo and poison their way to victory!"
            metaItems={bluffMomoMeta}
            ctaLink="https://www.instagram.com/tumlet.boardgames/"
            ctaText="DM us to order"
            ctaIcon="/insta-draw-white.svg"
            secondaryLink={{ text: 'Learn who we are', href: '/about' }}
            imageSrc="/char-combined.webp"
            imageAlt="Bluff Momo characters"
            priceTag="Rs. 1490"
            cardCaption={"five characters.\none winner."}
          />
        </section>
        
        <section className="container mx-auto px-4 md:px-12 mt-12 mb-16">
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Explore our online games: <Link to="/bichitra" className="underline hover:text-tumlet-text/80 text-tumlet-text">bichitra</Link>, <Link to="/farak" className="underline hover:text-tumlet-text/80 text-tumlet-text">farak</Link>, <Link to="/ganthan" className="underline hover:text-tumlet-text/80 text-tumlet-text">ganthan</Link>, <Link to="/thug" className="underline hover:text-tumlet-text/80 text-tumlet-text">thug</Link>, and <a href="https://kobadi.tumlet.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-tumlet-text/80 text-tumlet-text">kobadi</a>. Or race through Kathmandu with <Link to="/tundikhel" className="underline hover:text-tumlet-text/80 text-tumlet-text">race to tundikhel</Link>.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section className="container mx-auto px-4 md:px-12 mt-14 mb-4">
          <div
            className="rounded-2xl px-8 py-12 text-center"
            style={{ background: '#F16147', color: 'white' }}
          >
            <p
              className="mx-auto mb-4 max-w-2xl"
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3.5vw, 40px)',
                lineHeight: 1.15,
              }}
            >
              Play, laugh, repeat. Every game night, every momo order, every group chat that finally turns into a hangout.
            </p>
            <span
              style={{
                fontFamily: '"Patrick Hand", cursive',
                fontSize: '26px',
                display: 'inline-block',
                transform: 'rotate(-2deg)',
                marginTop: '8px',
              }}
            >
              — Sarina &amp; Yashant
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
