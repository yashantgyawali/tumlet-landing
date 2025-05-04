
import React from 'react';
import Navbar from '../components/Navbar';
import GameHero from '../components/GameHero';
import Footer from '../components/Footer';

const Index = () => {
  const bluffMomoMeta = [
    { icon: "/player.svg", text: "2-6 players" },
    { icon: "/age.svg", text: "age 13+" },
    { icon: "/time.svg", text: "11 minutes" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-12">
        <GameHero 
          backgroundClass="bluff-background"
          logoSrc="/bluff-momo-logo.png"
          imageSrc="/char-combined.webp"
          imageClass=" w-[145%] self-center rounded-2xl"
          description="bluff momo is a card game based in the street of kathmandu, where players bluff, deceive, and outsmart their friends to steal the most momo and poison their way to victory!"
          metaItems={bluffMomoMeta}
          ctaLink="/bluff-momo-rules"
          ctaText="learn how to play"
          ctaIcon="/bulb.svg"
          ctaColorClass="color-yellow"

        />
      </div>
      
      <div className="container mx-auto px-4 md:px-12 mt-8">
        <GameHero 
          backgroundClass="ganthan-background"
          logoSrc="/ganthan.svg"
          imageSrc="/questions.png"
          imageClass=" w-[75%] md:w-[48%] self-center rounded-2xl"
          description="ganthan is a nudge for you and your friends to dive into conversations that truly connect. we are talking about the chats that spark unexpected laughter, and bring out thoughts you didn't even know you had."
          metaItems={[]}
          ctaLink="http://ganthan.tumlet.com/"
          ctaText="spark connection"
          ctaIcon="/spark.svg"
          ctaColorClass="color-red"
          textColorClass="text-white"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
