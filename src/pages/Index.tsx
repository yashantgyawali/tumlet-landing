import React from 'react';
import { Link } from 'react-router-dom';
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
      
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-12 pt-8 md:pt-14">
          <GameHero
            backgroundClass="bluff-background"
            logoSrc="/bluff-momo-logo.png"
            logoWidth={1795}
            logoHeight={863}
            imageSrc="/char-combined.webp"
            imageWidth={1200}
            imageHeight={382}
            imageClass=" w-[145%] self-center rounded-2xl"
            description="Bluff momo is a card game set on the streets of Kathmandu, where you bluff, deceive, and outsmart your friends to steal the most momo and poison your way to victory!"
            metaItems={bluffMomoMeta}
            ctaLink="https://www.instagram.com/tumlet.boardgames/"
            ctaText="DM us to order"
            ctaIcon="/insta-draw-white.svg"
            ctaColorClass="color-red"
            youtubeEmbedUrl='https://www.youtube.com/embed/di6Ek8Nf4mQ?si=QPyyUvBOyPjzArWc'
            h1Title="Bluff momo - Board game for Nepali adults"
            secondaryLink={{
              text: "Learn who we are",
              href: "/about/"
            }}
          />
        </section>
        
        <section className="container mx-auto px-4 md:px-12 mt-12 mb-16">
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Explore our online games: <Link to="/ladbad/" className="underline hover:text-tumlet-text/80 text-tumlet-text">ladbad</Link>, <Link to="/bichitra/" className="underline hover:text-tumlet-text/80 text-tumlet-text">bichitra</Link>, <Link to="/ganthan/" className="underline hover:text-tumlet-text/80 text-tumlet-text">ganthan</Link>, <Link to="/thug/" className="underline hover:text-tumlet-text/80 text-tumlet-text">thug</Link>, and <Link to="/wavelength/" className="underline hover:text-tumlet-text/80 text-tumlet-text">wavelength</Link>. Or race through Kathmandu with <Link to="/tundikhel/" className="underline hover:text-tumlet-text/80 text-tumlet-text">race to tundikhel</Link>.
            </p>
          </div>
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