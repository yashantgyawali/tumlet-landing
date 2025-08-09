
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import GameHero from '../components/GameHero';
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

const Index = () => {
  const bluffMomoMeta = [
    { icon: "/player.svg", text: "2-6 players" },
    { icon: "/age.svg", text: "age 13+" },
    { icon: "/time.svg", text: "11 minutes" }
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
      sameAs: [
        'https://www.instagram.com/tumlet.boardgames/'
      ],
      foundingDate: '2022',
      foundingLocation: {
        '@type': 'Place',
        name: 'Kathmandu, Nepal'
      },
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Nepali Board Games',
          category: 'Board Games'
        }
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-12">
          <GameHero 
            backgroundClass="bluff-background"
            logoSrc="/bluff-momo-logo.png"
            imageSrc="/char-combined.webp"
            imageClass=" w-[145%] self-center rounded-2xl"
            description="bluff momo is a card game based in the street of kathmandu, where players bluff, deceive, and outsmart their friends to steal the most momo and poison their way to victory!"
            metaItems={bluffMomoMeta}
            ctaLink="https://www.instagram.com/tumlet.boardgames/"
            ctaText="dm us to order"
            ctaIcon="/insta-draw-white.svg"
            ctaColorClass="color-red"
            youtubeEmbedUrl='https://www.youtube.com/embed/di6Ek8Nf4mQ?si=QPyyUvBOyPjzArWc'
          />
        </section>
        
        {/* <section className="container mx-auto px-4 md:px-12 mt-8">
          <GameHero 
            backgroundClass="ganthan-background"
            logoSrc="/ganthan.svg"
            imageSrc="/questions.png"
            imageClass="w-[75%] md:w-[36%] self-center rounded-2xl"
            description="ganthan is a nudge for you and your friends to dive into conversations that truly connect. we are talking about the chats that spark unexpected laughter, and bring out thoughts you didn't even know you had."
            metaItems={[]}
            ctaLink="http://ganthan.tumlet.com/"
            ctaText="spark connection"
            ctaIcon="/spark.svg"
            ctaColorClass="color-red"
            textColorClass="text-white"
          />
        </section>
         */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
