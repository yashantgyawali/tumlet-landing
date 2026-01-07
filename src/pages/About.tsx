import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const aboutText = [
  "Play runs deep in our culture. We see it during Holi when we’re throwing colors, in card games during Dashain, in playing Bhailo in Tihar. It's there.",
  "And is it only during festivals? Not really.",
  "When we go on trips with friends, to Nagarkot or anywhere else, we often carry games. Usually UNO, Jenga, or something similar. All fun, but all foreign. “कति गेम्सको त slangs पनि बुझ्दैन and can’t really relate to them.” Because it was not made for Nepali people.",
  "This is where we see the gap.",
  "Where are the Nepali board games? They’re almost non-existent. There are a few options, but they are targeted towards kids. And if you're a young Nepali living abroad, you can easily buy international games, but not a single one that feels like home.",
  "So when it comes to board games, we hit a wall  🚧",
  "And we want to change that.",
  "",
  "We are a Nepali board game company, plain and simple.",
  "We're from here. Our games are too.",
  "We also bring games to offices and host corporate game nights for teams who want to connect and have fun together.",
  "We pull from the way we joke. The way we argue. The way we play. We put it into cards, pieces, rules, and laughter.",
  "We’re not perfect. We don’t want to be.",
  "",
  "We just want to make something that feels like home.",
  "",
  "That’s Tumlet.",
  "A Nepali board game company, trying to take you back to your childhood."
];

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

const About = () => {
  useEffect(() => {
    document.title = "About Us | Tumlet - Nepali board game company";
    setMetaTag('description', 'Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.');
    setCanonical('https://tumlet.com/about');
    setPropertyTag('og:title', 'About Us | Tumlet - Nepali board game company');
    setPropertyTag('og:description', 'Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/about');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'About Us | Tumlet - Nepali board game company');
    setMetaTag('twitter:description', 'Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.');
    setMetaTag('twitter:image', 'https://tumlet.com/tumlet-logo.png');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-tumlet-beige px-4 pt-2 pb-24">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center mt-16">
        <div className="max-w-3xl w-full">
          <h1 className="text-5xl md:text-6xl font-outfit font-bold uppercase tracking-wide text-tumlet-text mb-16">
            We're Tumlet.
          </h1>
          {aboutText.map((line, i) => {
            if (line.trim() === "") {
              return <div key={i} className="my-12" />;
            }
            // Add link to "Nepali board games" in the specific sentence
            if (line.includes("Where are the Nepali board games?")) {
              const parts = line.split("Nepali board games");
              return (
                <p key={i} className="text-2xl md:text-3xl font-outfit text-tumlet-text !leading-[1.6] mb-12">
                  {parts[0]}
                  <Link to="/blog/best-nepali-board-games" className="underline hover:text-tumlet-text/80">
                    Nepali board games
                  </Link>
                  {parts[1]}
                </p>
              );
            }
            // Add link to "corporate game nights" in the specific sentence
            if (line.includes("corporate game nights")) {
              const parts = line.split("corporate game nights");
              return (
                <p key={i} className="text-2xl md:text-3xl font-outfit text-tumlet-text !leading-[1.6] mb-12">
                  {parts[0]}
                  <Link to="/corporate-game-night" className="underline hover:text-tumlet-text/80">
                    corporate game nights
                  </Link>
                  {parts[1]}
                </p>
              );
            }
            return (
              <p key={i} className="text-2xl md:text-3xl font-outfit text-tumlet-text !leading-[1.6] mb-12">
                {line}
              </p>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About; 