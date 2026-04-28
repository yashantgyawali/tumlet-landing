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

const HOW_TO_PLAY = [
  {
    step: '01',
    title: 'Pick your starting point',
    desc: 'Each player picks a landmark on the Kathmandu map — from Basantapur to Balaju — and places their token.',
  },
  {
    step: '02',
    title: 'Roll & navigate the streets',
    desc: 'Roll the dice and move through the chaotic alleys, ring roads, and chowks of Kathmandu. Draw event cards to face traffic jams, festivals, and micro-bus surprises.',
  },
  {
    step: '03',
    title: 'Race to Tundikhel',
    desc: 'The first player to reach Tundikhel wins — but watch out for shortcuts through Ason and roadblocks near Ratnapark!',
  },
];

const Tundikhel = () => {
  useEffect(() => {
    document.title = 'Race to Tundikhel | Tumlet Board Game';
    setMetaTag('description', 'Race to Tundikhel is a Nepali board game where you navigate the chaotic streets of Kathmandu to reach the iconic Tundikhel ground first. Perfect for 2–6 players who love Kathmandu.');
    setMetaTag('keywords', 'race to tundikhel, tundikhel board game, nepali board game, kathmandu game, tumlet');
    setCanonical('https://tumlet.com/tundikhel');
    setPropertyTag('og:title', 'Race to Tundikhel | Tumlet Board Game');
    setPropertyTag('og:description', 'Race to Tundikhel is a Nepali board game where you navigate the chaotic streets of Kathmandu to reach the iconic Tundikhel ground first.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/tundikhel');
    setPropertyTag('og:image', 'https://tumlet.com/unfurl.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Race to Tundikhel | Tumlet Board Game');
    setMetaTag('twitter:description', 'Race to Tundikhel is a Nepali board game where you navigate the chaotic streets of Kathmandu to reach the iconic Tundikhel ground first.');
    setMetaTag('twitter:image', 'https://tumlet.com/unfurl.png');

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Game',
      name: 'Race to Tundikhel',
      description: 'A Nepali board game where players race through the streets of Kathmandu to reach the iconic Tundikhel ground first.',
      url: 'https://tumlet.com/tundikhel',
      image: 'https://tumlet.com/tumlet-logo.png',
      numberOfPlayers: {
        '@type': 'QuantitativeValue',
        minValue: 2,
        maxValue: 6,
      },
      typicalAgeRange: '10+',
      inLanguage: 'ne',
      creator: {
        '@type': 'Organization',
        name: 'Tumlet',
        url: 'https://tumlet.com',
      },
      locationCreated: {
        '@type': 'Place',
        name: 'Kathmandu, Nepal',
      },
      gameLocation: {
        '@type': 'Place',
        name: 'Tundikhel, Kathmandu',
        description: 'The iconic open ground in the heart of Kathmandu city.',
      },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-tumlet-beige">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center px-4 pt-20 pb-12 text-center">
          <span className="inline-block bg-tumlet-yellow text-tumlet-text text-sm font-baloo font-bold px-4 py-1 rounded-full mb-6 -rotate-1">
            Kathmandu's favourite race
          </span>
          <h1 className="text-4xl md:text-6xl font-baloo font-bold text-tumlet-text mb-4 leading-tight">
            Race to Tundikhel
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-6 font-medium max-w-2xl">
            Navigate the chaotic streets of Kathmandu and be the first to reach the iconic Tundikhel ground
          </h2>
          <p className="max-w-2xl text-lg text-gray-800 mb-10 leading-relaxed">
            From the narrow lanes of Ason to the ring roads clogged with micro-buses, <strong>Race to Tundikhel</strong> captures everything lovably frustrating about getting across Kathmandu. 2–6 players, age 10+, and endless chaos guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.instagram.com/tumlet.boardgames/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button color-red"
            >
              <img src="/insta-draw-white.svg" alt="Instagram" className="w-5 h-5" />
              DM us to order
            </a>
            <a href="/" className="underline text-tumlet-text text-base">
              Explore all games
            </a>
          </div>
        </section>

        {/* Game stats */}
        <section className="flex justify-center gap-8 flex-wrap px-4 pb-16">
          {[
            { icon: '/player.svg', label: '2–6 players' },
            { icon: '/age.svg', label: 'Age 10+' },
            { icon: '/time.svg', label: '30–45 min' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 bg-white border border-tumlet-yellow rounded-xl px-5 py-3 shadow-sm">
              <img src={icon} alt="" className="w-6 h-6" />
              <span className="font-baloo font-semibold text-tumlet-text">{label}</span>
            </div>
          ))}
        </section>

        {/* About Tundikhel */}
        <section className="max-w-3xl mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-baloo font-bold text-tumlet-text mb-4 text-center">
            Why Tundikhel?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-center">
            Tundikhel is the beating heart of Kathmandu — a vast open ground where armies parade, kites fly, and Nepali history unfolds. It is the one landmark every Kathmanduite recognises, making it the perfect finish line for the city's most chaotic race.
          </p>
        </section>

        {/* How to play */}
        <section className="bg-tumlet-text py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-baloo font-bold text-tumlet-yellow mb-10 text-center">
              How to play Race to Tundikhel
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {HOW_TO_PLAY.map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col gap-3">
                  <span className="text-5xl font-baloo font-bold text-tumlet-yellow opacity-60">{step}</span>
                  <h3 className="text-xl font-baloo font-bold text-white">{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kathmandu landmarks section — good for keyword relevance */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-baloo font-bold text-tumlet-text mb-6 text-center">
            Race through Kathmandu's streets
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed text-center mb-8">
            The board is a lovingly hand-drawn map of central Kathmandu. Weave through <strong>Basantapur Durbar Square</strong>, dodge the jam at <strong>Ratnapark Chowk</strong>, cut through the lanes of <strong>Indrachowk</strong>, and sprint the final stretch to <strong>Tundikhel</strong>. Every route feels familiar — and every shortcut has a catch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Tundikhel', 'Basantapur', 'Ratnapark', 'Ason', 'Indrachowk', 'New Road', 'Balaju', 'Thamel'].map((place) => (
              <span
                key={place}
                className="bg-tumlet-yellow text-tumlet-text font-baloo font-semibold px-4 py-1 rounded-full text-sm"
              >
                {place}
              </span>
            ))}
          </div>
        </section>

        {/* CTA bottom */}
        <section className="flex flex-col items-center px-4 pb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-baloo font-bold text-tumlet-text mb-4">
            Ready to race?
          </h2>
          <p className="text-gray-700 mb-8 max-w-md">
            Race to Tundikhel is available to order via Instagram. Slide into our DMs and we'll get your copy on its way.
          </p>
          <a
            href="https://www.instagram.com/tumlet.boardgames/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button color-red"
          >
            <img src="/insta-draw-white.svg" alt="Instagram" className="w-5 h-5" />
            Order on Instagram
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tundikhel;
