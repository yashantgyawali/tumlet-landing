import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const aboutText = [
  "Play runs deep in our culture. We see it during Holi when we’re throwing colors, in card games during Dashain, in playing Bhailo in Tihar. It's there.",
  "And is it only during festivals? Not really.",
  "When we go on trips with friends, to Nagarkot or anywhere else, we often carry games. Usually UNO, Jenga, or something similar. All fun, but all foreign. “Kati games ko ta slangs pani bujdaina and can’t really relate to them.” Because it was not made for Nepali people.",
  "This is where we see the gap.",
  "Where are the Nepali board games? They’re almost non-existent. There are a few options, but they are targeted towards kids. And if you're a young Nepali living abroad, you can easily buy international games, but not a single one that feels like home.",
  "So when it comes to board games, we hit a wall  🚧",
  "And we want to change that.",
  "",
  "We are a Nepali board game company, plain and simple.",
  "We’re from here.",
  "Our games are too.",
  "",
  "We pull from the way we joke.",
  "The way we argue. The way we play.",
  "We put it into cards, pieces, rules, and laughter.",
  "",
  "We’re not perfect. We don’t want to be.",
  "",
  "We just want to make something that feels like home.",
  "",
  "That’s Tumlet.",
  "A Nepali board game company, trying to take you back to your childhood."
];

const About = () => {
  useEffect(() => {
    document.title = "About Us | Tumlet - Nepali board game company";
    const meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
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