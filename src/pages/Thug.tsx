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

const Thug = () => {
  useEffect(() => {
    document.title = 'Thug | Social Deduction Game Rooted in Nepali Culture';
    setMetaTag('description', 'Thug is a social deduction game where one person gets a word that doesn\'t belong from Nepali categories. Figure out who the Thug is before they blend in!');
    setCanonical('https://tumlet.com/thug');
    setPropertyTag('og:title', 'Thug | Social Deduction Game Rooted in Nepali Culture');
    setPropertyTag('og:description', 'Thug is a social deduction game where one person gets a word that doesn\'t belong from Nepali categories. Figure out who the Thug is before they blend in!');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/thug');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Thug | Social Deduction Game Rooted in Nepali Culture');
    setMetaTag('twitter:description', 'Thug is a social deduction game where one person gets a word that doesn\'t belong from Nepali categories. Figure out who the Thug is before they blend in!');
    setMetaTag('twitter:image', 'https://tumlet.com/tumlet-logo.png');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-tumlet-beige">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-tumlet-text mb-4 text-center">Thug</h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-8 text-center font-medium">There's a Thug among us.</h2>
        <p className="max-w-2xl text-lg md:text-xl text-gray-800 mb-8 text-center leading-relaxed">
          Everyone gets a word from a Nepali category you instantly recognize. Last names, foods, places, brands. One person becomes the Thug and doesn't see the word. Your job is to figure out who it is before they quietly blend in.<br />
          You talk. You point fingers. You defend yourself a little too hard. Someone smiles at the wrong time. Simple, offline, and rooted in Nepali culture. 
        </p>
        <div className="flex flex-col items-center gap-4 mt-8">
          <a
            href="https://thug.tumlet.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button color-yellow"
          >
            Try Thug now
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

export default Thug;
