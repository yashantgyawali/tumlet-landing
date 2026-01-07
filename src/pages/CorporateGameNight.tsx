import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, Clock, Gamepad2, Star } from 'lucide-react';
import { MarqueeGallery } from '@/components/ui/MarqueeGallery';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
};

const games = [
  {
    id: 1,
    name: "Bluff Momo",
    description: "For people who like mind games, reading others, and bluffing.",
    videoUrl: "/bluff-momo-rules",
    availableForSale: true,
    price: "Rs. 1,490",
    category: "Bluffing and deception"
  },
  {
    id: 2,
    name: "Race to Tundikhel",
    description: "Think of it as Ludo but with less luck, pure psychological and chaotic.",
    videoUrl: "https://drive.google.com/file/d/1TdYXJFCyP2mrr9zSUOmOFdj7bRrK7Gps/view?usp=drive_link",
    availableForSale: false,
    category: "Mind games"
  },
  {
    id: 3,
    name: "Danger Danger",
    description: "For someone who can think and act too fast under time pressure.",
    videoUrl: "https://www.youtube.com/watch?v=IRk1hsFjlww",
    availableForSale: false,
    category: "Fast-paced"
  },
  {
    id: 4,
    name: "Cluedo",
    description: "For wannabe detectives who love solving murder mysteries.",
    videoUrl: "https://www.youtube.com/watch?v=LTUFY0URGQo",
    availableForSale: false,
    category: "Mystery"
  },
  {
    id: 5,
    name: "Dixit",
    description: "For the visual thinker who can speak fluent imagination.",
    videoUrl: "https://www.youtube.com/watch?v=Qi4MoW6NuaQ&t=15s",
    availableForSale: false,
    category: "Creative"
  },
  {
    id: 6,
    name: "Firiri",
    description: "Cards Against Humanity meets Nepali songs. For the playlist peeps who know every Nepali lyric that exists.",
    videoUrl: "",
    availableForSale: false,
    category: "Songs"
  },
  {
    id: 7,
    name: "Codenames",
    description: "Say one word. Hope your team gets all. A classic for smart chaos and sly smiles.",
    videoUrl: "",
    availableForSale: false,
    category: "Wordplay"
  },
  {
    id: 8,
    name: "Ticket to Ride",
    description: "Plan routes, claim tracks, block your frenemies. The perfect mix of chill and sneaky.",
    videoUrl: "",
    availableForSale: false,
    category: "Strategy"
  },

  {
    id: 9,
    name: "Guess the Price - Nepali Edition",
    description: "Add-on game where we buy everyday Nepali items and have people guess the price. The closest takes it home.",
    videoUrl: null,
    availableForSale: false,
    category: "Add-on",
    budget: "Rs. 1,000 - 2,000"
  }
];

const sampleMedia: MediaItem[] = [
  { type: 'image', src: '/blogs/corporate-game-night/1.jpg', alt: 'Photo 1' },
  { type: 'video', src: '/blogs/corporate-game-night/2.mp4' },
  { type: 'image', src: '/blogs/corporate-game-night/3.jpg', alt: 'Photo 2' },
  { type: 'video', src: '/blogs/corporate-game-night/4.mp4' },
  { type: 'image', src: '/blogs/corporate-game-night/10.jpg', alt: 'Photo 3' },
  { type: 'video', src: '/blogs/corporate-game-night/6.mov', alt: 'Photo 4' },
  { type: 'image', src: '/blogs/corporate-game-night/7.jpg' },
  { type: 'image', src: '/blogs/corporate-game-night/8.jpg', alt: 'Photo 5' },
  { type: 'image', src: '/blogs/corporate-game-night/9.jpg' },
];

const CorporateGameNight = () => {
  useEffect(() => {
    document.title = "Corporate Game Night | Tumlet - Team Building with Board Games";
    const meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "Host a fun corporate game night with Tumlet. We bring board games to your office, set everything up, and run the entire 2-hour session for your team.";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  const handleContact = () => {
    const subject = encodeURIComponent("Corporate Game Night Inquiry");
    const body = encodeURIComponent(`Hi Tumlet team,

I am interested in hosting a corporate game night for my team. Please provide more details.

Thanks!`);
    window.open(`mailto:hello@tumlet.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-tumlet-beige">
      <Navbar />
      {/* Hero Section */}
      <section className="px-4 pt-16 pb-12 md:px-12 lg:px-36">
        <div className="max-w-4xl mx-auto text-center">
            <div className='mb-2 font-medium'>Break the routine. Bond over board games.</div>
          <h1 className="text-4xl md:text-6xl font-outfit font-bold tracking-wide text-tumlet-text mb-6">
            Corporate game night
          </h1>
          <p className="text-xl md:text-2xl font-outfit text-tumlet-text mb-8 leading-relaxed">
            We host Game Nights at offices where we come in with a bunch of board games, 
            set everything up, and run the whole session. The idea is to help teams take 
            a break, connect, and just have a good time together.
          </p>
          <Button
            onClick={handleContact}
            className="bg-tumlet-text text-tumlet-beige hover:bg-tumlet-text/90 text-lg px-8 py-4"
          >
            Book your game night
          </Button>
        </div>
      </section>
      {/* Marquee Gallery Proof Section */}
      <div className="my-8">
        <MarqueeGallery items={sampleMedia} height={200} />
      </div>
      {/* How It Works Section */}
      <section className="px-4 py-12 md:px-12 lg:px-36 bg-white">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-tumlet-text text-center mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-tumlet-beige">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-tumlet-beige rounded-full flex items-center justify-center mb-4">
                  <Gamepad2 className="w-8 h-8 text-tumlet-text" />
                </div>
                <CardTitle className="text-xl font-outfit text-tumlet-text">You choose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Select the board games from our curated list, or let us bring a mix 
                  that we know your team will love.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-tumlet-beige">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-tumlet-beige rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-tumlet-text" />
                </div>
                <CardTitle className="text-xl font-outfit text-tumlet-text">We host</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We'll bring all the games, explain the rules, and host the entire 
                  2-hour session for you.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-tumlet-beige">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-tumlet-beige rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-tumlet-text" />
                </div>
                <CardTitle className="text-xl font-outfit text-tumlet-text">You play</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Your team gets to unwind, connect, and have fun together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-12 md:px-12 lg:px-36">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-tumlet-text mb-8">
            Pricing
          </h2>
          <Card className="max-w-md mx-auto border-2 border-tumlet-text">
            <CardHeader className="bg-tumlet-text text-tumlet-beige">
              <CardTitle className="text-2xl font-outfit">Standard package</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-tumlet-text mb-4">
                Rs. 10,000
              </div>
              <p className="text-lg text-gray-700 mb-6">
                for up to 20 people
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
                <Clock className="w-5 h-5" />
                <span>2-hour session</span>
              </div>
              <p className="text-sm text-gray-600">
                Got a bigger team? Send us an email for a custom quote.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Games Section */}
      <section className="px-4 py-12 md:px-12 lg:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-tumlet-text text-center mb-4">
            Our game collection
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Pick around 3 games for your game night. We'll explain all the rules in person!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="border-2 border-tumlet-beige hover:border-tumlet-text transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-outfit text-tumlet-text">
                      {game.name}
                    </CardTitle>
                    {game.availableForSale && (
                      <Badge className="bg-green-100 text-green-800">
                        Available for Sale @ {game.price}
                      </Badge>
                    )}
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {game.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    {game.description}
                  </p>
                  
                  {game.availableForSale && (
                    <p className="text-sm text-green-600 font-medium mb-3">
                    
                    </p>
                  )}
                                  
                  {game.videoUrl && (
                    <a 
                      href={game.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-tumlet-text hover:underline"
                    >
                      Watch demo <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:px-12 lg:px-36">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-tumlet-text mb-6">
             Ready to play?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Just email us at tumletgames@gmail.com with your office name, location, number of people and a preferred date and time. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleContact}
              className="bg-tumlet-text text-tumlet-beige hover:bg-tumlet-text/90 text-lg px-8 py-4"
            >
              Email us to book
            </Button>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateGameNight; 