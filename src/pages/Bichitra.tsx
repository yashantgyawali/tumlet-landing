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

const Bichitra = () => {
  useEffect(() => {
    document.title = 'Bichitra | Guess Nepali Last Name Quiz';
    setMetaTag('description', 'Bichitra is a playful Nepali last name quiz where you guess the Nepali last name just from an image. Try the viral quiz for Nepali young adults!');
    setCanonical('https://tumlet.com/bichitra');
    setPropertyTag('og:title', 'Bichitra | Guess Nepali Last Name Quiz');
    setPropertyTag('og:description', 'Bichitra is a playful Nepali last name quiz where you guess the Nepali last name just from an image. Try the viral quiz for Nepali young adults!');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/bichitra');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Bichitra | Guess Nepali Last Name Quiz');
    setMetaTag('twitter:description', 'Bichitra is a playful Nepali last name quiz where you guess the Nepali last name just from an image. Try the viral quiz for Nepali young adults!');
    setMetaTag('twitter:image', 'https://tumlet.com/tumlet-logo.png');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-tumlet-beige">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-tumlet-text mb-4 text-center">Bichitra</h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-8 text-center font-medium">Guess the Nepali last name just from an image</h2>
        <p className="max-w-2xl text-lg md:text-xl text-gray-800 mb-8 text-center">
          Although I hate the word vibe-coding, I love creating things and AI has enabled me to work on my crazy ideas and made it easier to share them with the world. What started with a simple idea while on a scooter, I was able to use prompts and share playfulness amongst Nepali young adults.
        </p>
        <div className="flex flex-col items-center gap-4 mt-8">
          <a
            href="https://bichitra.tumlet.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button color-yellow"
          >
            Try Bichitra now
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

export default Bichitra; 