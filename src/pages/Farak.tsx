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

const Farak = () => {
  useEffect(() => {
    document.title = 'Farak | Who\'s Most Likely To with Imposter Edition';
    setMetaTag('description', 'Farak is the ultimate imposter edition of Who\'s Most Likely To. Everyone gets the same question except one random player who gets a different one. Can you catch the liar?');
    setCanonical('https://tumlet.com/farak');
    setPropertyTag('og:title', 'Farak | Who\'s Most Likely To with Imposter Edition');
    setPropertyTag('og:description', 'Farak is the ultimate imposter edition of Who\'s Most Likely To. Everyone gets the same question except one random player who gets a different one. Can you catch the liar?');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/farak');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Farak | Who\'s Most Likely To with Imposter Edition');
    setMetaTag('twitter:description', 'Farak is the ultimate imposter edition of Who\'s Most Likely To. Everyone gets the same question except one random player who gets a different one. Can you catch the liar?');
    setMetaTag('twitter:image', 'https://tumlet.com/tumlet-logo.png');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-tumlet-beige">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-tumlet-text mb-4 text-center">Farak</h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-8 text-center font-medium">Who's most likely to... with imposter edition</h2>
        <p className="max-w-2xl text-lg md:text-xl text-gray-800 mb-8 text-center leading-relaxed">
          Everyone gets the SAME question... except ONE random player gets a DIFFERENT question. You don't know who the imposter is. Everyone answers their question by pointing at someone. Then the REAL question gets revealed. The imposter and others have to defend why they answered based on their secret question. Everyone votes on who they think is the imposter. Catch them and win!
        </p>

        <div className="flex flex-col items-center gap-4 mt-8">
          <a
            href="https://farak.tumlet.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button color-yellow"
          >
            Play Farak 
          </a>
          <a href="/" className="underline text-tumlet-text text-base">
            Go back home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Farak;
