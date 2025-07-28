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

const Ganthan = () => {
  useEffect(() => {
    document.title = 'Ganthan | Connect with Family Through Meaningful Conversations';
    setMetaTag('description', 'Ganthan helps you have deeper conversations with your parents beyond daily check-ins. Get meaningful questions to open up memories and stories in Nepali and English.');
    setCanonical('https://tumlet.com/ganthan');
    setPropertyTag('og:title', 'Ganthan | Connect with Family Through Meaningful Conversations');
    setPropertyTag('og:description', 'Ganthan helps you have deeper conversations with your parents beyond daily check-ins. Get meaningful questions to open up memories and stories in Nepali and English.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/ganthan');
    setPropertyTag('og:image', 'https://tumlet.com/tumlet-logo.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Ganthan | Connect with Family Through Meaningful Conversations');
    setMetaTag('twitter:description', 'Ganthan helps you have deeper conversations with your parents beyond daily check-ins. Get meaningful questions to open up memories and stories in Nepali and English.');
    setMetaTag('twitter:image', 'https://tumlet.com/tumlet-logo.png');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-tumlet-beige">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-tumlet-text mb-4 text-center">Ganthan</h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-8 text-center font-medium">Talk to your parents about more than just k khanu bhayo?</h2>
        <p className="max-w-2xl text-lg md:text-xl text-gray-800 mb-8 text-center leading-relaxed">
          This little app is for those quiet phone calls and video chats with home — the ones where you want to go beyond daily check-ins. Ganthan gives you questions that open up memories, feelings, and stories you didn't know you'd hear. Made for families, across generations, in Nepali and English. Just press call, pick a question, and see where the conversation goes.
        </p>
        <a
          href="https://ganthan.tumlet.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button color-yellow mt-8"
        >
          Try Ganthan Now
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default Ganthan; 