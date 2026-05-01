import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MarqueeGallery } from '@/components/ui/MarqueeGallery';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
};

const games = [
  {
    name: "Bluff Momo",
    emoji: "🥟",
    description: "Bluff, deceive, and outsmart your way to victory. Based in the streets of Kathmandu.",
    category: "Bluffing",
    bestFor: "Competitive groups",
  },
  {
    name: "Race to Tundikhel",
    emoji: "🏁",
    description: "Think Ludo but psychological. Less luck, more mind games and chaos.",
    category: "Mind Games",
    bestFor: "Thinkers",
  },
  {
    name: "Danger Danger",
    emoji: "⚡",
    description: "Think fast, act faster. High-pressure rounds that get everyone screaming.",
    category: "Fast-paced",
    bestFor: "High-energy groups",
  },
  {
    name: "Cluedo",
    emoji: "🔍",
    description: "Solve a murder mystery. Deduce the weapon, location, and culprit before anyone else.",
    category: "Mystery",
    bestFor: "Wannabe detectives",
  },
  {
    name: "Dixit",
    emoji: "🎨",
    description: "Tell stories through surreal art. Be creative enough to fool some, but not all.",
    category: "Creative",
    bestFor: "Imaginative teams",
  },
  {
    name: "Firiri",
    emoji: "🎵",
    description: "Cards Against Humanity meets Nepali songs. For the playlist lovers who know every lyric.",
    category: "Music",
    bestFor: "Nepali music fans",
  },
  {
    name: "Codenames",
    emoji: "🕵️",
    description: "Give one-word clues. Hope your team gets all your words. Classic smart chaos.",
    category: "Wordplay",
    bestFor: "Wordsmiths",
  },
  {
    name: "Ticket to Ride",
    emoji: "🚂",
    description: "Claim train routes across the map. Block your frenemies. Chill but sneaky.",
    category: "Strategy",
    bestFor: "Planners",
  },
  {
    name: "That's Not a Hat",
    emoji: "🎩",
    description: "Remember what gift you got? No? Bluff anyway. A hilarious memory game.",
    category: "Memory",
    bestFor: "Forgetful friends",
  },
  {
    name: "Carcassonne",
    emoji: "🏰",
    description: "Build medieval landscapes tile by tile. Claim cities, roads, and monasteries.",
    category: "Tile Placement",
    bestFor: "Strategic builders",
  },
  {
    name: "Catan",
    emoji: "🌾",
    description: "Trade resources, build settlements, and negotiate like your career depends on it.",
    category: "Trading",
    bestFor: "Deal-makers",
  },
  {
    name: "Flip 7",
    emoji: "🃏",
    description: "Keep flipping cards. Push your luck. Hit 8 and you're out. Simple, addictive, ruthless.",
    category: "Push Your Luck",
    bestFor: "Risk-takers",
  },
  {
    name: "Secret Hitler",
    emoji: "🗳️",
    description: "Liberals vs fascists. Trust no one. Find the hidden threat before it's too late.",
    category: "Social Deduction",
    bestFor: "Paranoid groups",
  },
  {
    name: "Scout",
    emoji: "🔭",
    description: "Your hand stays as dealt — no rearranging. Recruit cards and build combos to win.",
    category: "Card Climbing",
    bestFor: "Quick learners",
  },
  {
    name: "Startup",
    emoji: "🚀",
    description: "Build your company from nothing, raise funds, hire talent, and crush rival founders.",
    category: "Business",
    bestFor: "Ambitious teams",
  },
  {
    name: "Guess the Price",
    emoji: "🏷️",
    description: "We buy everyday Nepali items. You guess the price. Closest guess wins the item.",
    category: "Add-on",
    bestFor: "Everyone",
  },
];

const steps = [
  {
    num: "01",
    title: "You pick",
    desc: "Choose games from our collection. Or let us surprise you with a curated mix.",
    accent: "#F3B952",
  },
  {
    num: "02",
    title: "We set up",
    desc: "We show up, bring everything, explain the rules, and host the full session.",
    accent: "#F16147",
  },
  {
    num: "03",
    title: "You play",
    desc: "Your team bonds, competes, laughs, and forgets about Jira for two hours.",
    accent: "#2D7A4F",
  },
];

const sampleMedia: MediaItem[] = [
  { type: 'image', src: '/blogs/corporate-game-night/1.jpg', alt: 'Game night photo' },
  { type: 'video', src: '/blogs/corporate-game-night/2.mp4' },
  { type: 'image', src: '/blogs/corporate-game-night/3.jpg', alt: 'Game night photo' },
  { type: 'video', src: '/blogs/corporate-game-night/4.mp4' },
  { type: 'image', src: '/blogs/corporate-game-night/10.jpg', alt: 'Game night photo' },
  { type: 'video', src: '/blogs/corporate-game-night/6.mov' },
  { type: 'image', src: '/blogs/corporate-game-night/7.jpg' },
  { type: 'image', src: '/blogs/corporate-game-night/8.jpg', alt: 'Game night photo' },
  { type: 'image', src: '/blogs/corporate-game-night/9.jpg' },
];

const CorporateGameNight = () => {
  const [ctaHovered, setCtaHovered] = useState(false);
  const [ctaBottomHovered, setCtaBottomHovered] = useState(false);

  useEffect(() => {
    document.title = "Corporate Game Night | Tumlet - Team Building with Board Games";
    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Host a fun corporate game night with Tumlet. We bring board games to your office, set everything up, and run the entire 2-hour session for your team.');
  }, []);

  const handleContact = () => {
    const subject = encodeURIComponent("Corporate Game Night Inquiry");
    const body = encodeURIComponent(`Hi Tumlet team,\n\nI am interested in hosting a corporate game night for my team. Please provide more details.\n\nThanks!`);
    window.open(`mailto:tumletgames@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#ffffff', fontFamily: "'Baloo 2', system-ui, sans-serif", color: '#130D01' }}>
      <Navbar />

      <main className="flex-1">

        {/* ── HERO ── */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '64px 24px 0', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#F16147',
            background: '#FDE8E4',
            padding: '6px 16px',
            borderRadius: 999,
            marginBottom: 24,
          }}>
            Team bonding · Kathmandu
          </span>

          <h1 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 64px)',
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            color: '#130D01',
            marginTop: 0,
            marginBottom: 20,
          }}>
            We bring the games.<br />You bring the team.
          </h1>

          <p style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            lineHeight: 1.55,
            color: '#4B5563',
            maxWidth: 580,
            margin: '0 auto 40px',
          }}>
            We show up at your office with a bunch of board games, set everything up, explain all the rules, and host the entire session. Your team just has to show up and have fun.
          </p>

          <button
            onClick={handleContact}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 700,
              fontSize: 17,
              color: '#ffffff',
              background: '#F16147',
              padding: '14px 36px',
              borderRadius: 12,
              border: 'none',
              boxShadow: '8px 8px 0 #F3B952',
              transform: ctaHovered ? 'rotate(-0.88deg) translate(-3px,-3px)' : 'rotate(-0.88deg)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            Book your game night →
          </button>
        </section>

        {/* ── MARQUEE GALLERY ── */}
        <div style={{ margin: '64px 0 0' }}>
          <MarqueeGallery items={sampleMedia} height={220} />
        </div>

        {/* ── HOW IT WORKS ── */}
        <section style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 24px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{
              display: 'inline-block',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#2D7A4F',
              background: '#EDF5DD',
              padding: '6px 14px',
              borderRadius: 999,
              marginBottom: 16,
            }}>
              How it works
            </span>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 42px)',
              color: '#130D01',
              margin: 0,
            }}>
              Three steps. Zero effort from you.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {steps.map((step) => (
              <div
                key={step.num}
                style={{
                  background: '#FAF1E4',
                  border: '3px solid #130D01',
                  borderRadius: 16,
                  boxShadow: `6px 6px 0 ${step.accent}`,
                  padding: '32px 28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: 48,
                  color: step.accent,
                  opacity: 0.25,
                  position: 'absolute',
                  top: 12,
                  right: 18,
                  lineHeight: 1,
                }}>
                  {step.num}
                </div>
                <h3 style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  fontWeight: 800,
                  fontSize: 24,
                  color: '#130D01',
                  marginTop: 0,
                  marginBottom: 8,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: '#4B5563',
                  margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section style={{ maxWidth: 520, margin: '0 auto', padding: '80px 24px 0', textAlign: 'center' }}>
          <div style={{
            background: '#130D01',
            border: '3px solid #130D01',
            borderRadius: 20,
            boxShadow: '10px 10px 0 #F3B952',
            padding: '48px 36px',
            transform: 'rotate(-0.5deg)',
            color: '#FAF1E4',
          }}>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F3B952',
              marginBottom: 16,
            }}>
              Pricing
            </div>
            <div style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(40px, 5vw, 56px)',
              lineHeight: 1,
              marginBottom: 8,
            }}>
              Rs. 10,000
            </div>
            <p style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: 18,
              color: '#d4c9b5',
              margin: '0 0 24px',
            }}>
              for up to 20 people · 2-hour session
            </p>
            <div style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 10,
            }}>
              {['We bring the games', 'We explain the rules', 'We host the session'].map((item) => (
                <span key={item} style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '6px 14px',
                  borderRadius: 999,
                  background: 'rgba(243,185,82,0.15)',
                  color: '#F3B952',
                }}>
                  ✓ {item}
                </span>
              ))}
            </div>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              color: '#8a8070',
              marginTop: 24,
              marginBottom: 0,
            }}>
              Got a bigger team? Email us for a custom quote.
            </p>
          </div>
        </section>

        {/* ── GAMES COLLECTION ── */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{
              display: 'inline-block',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F16147',
              background: '#FDE8E4',
              padding: '6px 14px',
              borderRadius: 999,
              marginBottom: 16,
            }}>
              Pick your lineup
            </span>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 42px)',
              color: '#130D01',
              margin: '0 0 8px',
            }}>
              Our game collection
            </h2>
            <p style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: 17,
              color: '#6B6B6B',
              margin: 0,
            }}>
              Pick ~3 games for your night. We'll teach all the rules in person.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {games.map((game, i) => (
              <GameCard key={game.name} game={game} index={i} />
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{ maxWidth: 760, margin: '80px auto 96px', padding: '0 24px' }}>
          <div style={{
            background: '#F3B952',
            border: '3px solid #130D01',
            boxShadow: '12px 12px 0 #130D01',
            transform: 'rotate(-0.5deg)',
            borderRadius: 20,
            textAlign: 'center',
            padding: '48px 32px',
          }}>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#130D01',
              marginBottom: 14,
            }}>
              Ready to play?
            </div>
            <h3 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(24px, 3.5vw, 34px)',
              color: '#130D01',
              marginTop: 0,
              marginBottom: 14,
              lineHeight: 1.15,
            }}>
              Email us. Pick a date. We'll handle the rest.
            </h3>
            <p style={{
              fontSize: 17,
              lineHeight: 1.5,
              color: '#130D01',
              marginBottom: 24,
              marginTop: 0,
            }}>
              tumletgames@gmail.com — include your office name, team size, and preferred date.
            </p>
            <button
              onClick={handleContact}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#130D01',
                color: '#ffffff',
                fontFamily: "'Baloo 2', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                padding: '14px 36px',
                borderRadius: 12,
                border: 'none',
                boxShadow: '8px 8px 0 #F16147',
                transform: ctaBottomHovered ? 'rotate(-0.88deg) translateY(-4px)' : 'rotate(-0.88deg)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={() => setCtaBottomHovered(true)}
              onMouseLeave={() => setCtaBottomHovered(false)}
            >
              Book your game night →
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

/* ── GAME CARD ── */

const categoryColors: Record<string, { bg: string; text: string }> = {
  Bluffing: { bg: '#FDE8E4', text: '#F16147' },
  'Mind Games': { bg: '#FFF3D6', text: '#B8860B' },
  'Fast-paced': { bg: '#FFE8D6', text: '#D2691E' },
  Mystery: { bg: '#E8E0F0', text: '#6A0DAD' },
  Creative: { bg: '#EDF5DD', text: '#2D7A4F' },
  Music: { bg: '#FFF3D6', text: '#B8860B' },
  Wordplay: { bg: '#E8E0F0', text: '#6A0DAD' },
  Strategy: { bg: '#D6EEFF', text: '#1565C0' },
  Memory: { bg: '#FFE8F0', text: '#C2185B' },
  'Tile Placement': { bg: '#E0D6C0', text: '#5D4037' },
  Trading: { bg: '#EDF5DD', text: '#2D7A4F' },
  'Push Your Luck': { bg: '#FDE8E4', text: '#F16147' },
  'Social Deduction': { bg: '#E8E0F0', text: '#6A0DAD' },
  'Card Climbing': { bg: '#D6EEFF', text: '#1565C0' },
  Business: { bg: '#D6EEFF', text: '#1565C0' },
  'Add-on': { bg: '#F0F0F0', text: '#666666' },
};

const rotations = [-0.8, 0.5, -0.3, 0.7, -0.6, 0.4, -0.5, 0.8, -0.4, 0.6, -0.7, 0.3, -0.9, 0.5, -0.2, 0.9];

function GameCard({ game, index }: { game: typeof games[number]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cat = categoryColors[game.category] || { bg: '#F0F0F0', text: '#666' };
  const rot = rotations[index % rotations.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#FAF1E4',
        border: '2.5px solid #130D01',
        borderRadius: 14,
        boxShadow: hovered ? '8px 8px 0 #130D01' : '5px 5px 0 #130D01',
        padding: '24px 22px',
        transform: hovered ? `rotate(${rot}deg) translate(-3px,-3px)` : `rotate(${rot}deg)`,
        transition: 'all 0.2s',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: 10,
      }}
    >
      {/* Emoji + Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 28 }}>{game.emoji}</span>
        <h3 style={{
          fontFamily: "'Baloo 2', sans-serif",
          fontWeight: 800,
          fontSize: 19,
          color: '#130D01',
          margin: 0,
        }}>
          {game.name}
        </h3>
      </div>

      {/* Category pill */}
      <span style={{
        display: 'inline-block',
        alignSelf: 'flex-start',
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: cat.text,
        background: cat.bg,
        padding: '3px 10px',
        borderRadius: 999,
      }}>
        {game.category}
      </span>

      {/* Description */}
      <p style={{
        fontFamily: "'Baloo 2', sans-serif",
        fontSize: 15,
        lineHeight: 1.5,
        color: '#4B5563',
        margin: 0,
        flex: 1,
      }}>
        {game.description}
      </p>

      {/* Best-for tag */}
      <div style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 12,
        color: '#9CA3AF',
        fontWeight: 600,
      }}>
        Best for: {game.bestFor}
      </div>
    </div>
  );
}

export default CorporateGameNight;
