import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  UtensilsCrossed,
  RefreshCw,
  Users,
  MessageSquare,
  Flame,
  ListChecks,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Shield,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import AudioPlayer from './bluff-momo-manual/AudioPlayer';

const ASSET = '/bluff-momo-manual';

const PAGES = [
  { slug: 'start', label: 'Start here', Icon: Rocket },
  { slug: 'setup', label: 'Setting up', Icon: UtensilsCrossed },
  { slug: 'turn', label: 'Your turn', Icon: RefreshCw },
  { slug: 'characters', label: 'The five characters', Icon: Users },
  { slug: 'bluffing', label: 'Bluffing and challenges', Icon: MessageSquare },
  { slug: 'poison', label: 'Poison and double trouble', Icon: Flame },
  { slug: 'reference', label: 'Quick reference', Icon: ListChecks },
] as const;

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

const CARD = 'bg-white rounded-xl border-2 border-tumlet-text/10 p-6 md:p-7';
const CARD_POP = `${CARD} shadow-[6px_6px_0px_0px_#F3B952]`;
const SECTION = 'px-6 md:px-12 lg:px-24 max-w-5xl mx-auto';
const H2 = 'font-baloo font-extrabold text-2xl md:text-3xl text-tumlet-text';
const LEAD = 'text-lg md:text-xl text-tumlet-text/70 max-w-[56ch] leading-relaxed';
const BODY = 'text-tumlet-text/80 leading-relaxed';

function BluffMomoManual() {
  const [page, setPage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [dur, setDur] = useState(0);
  const [missing, setMissing] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.title = 'Bluff Momo Manual | The Full Rulebook, Explained';
    setMetaTag('description', 'A plain-English, page-by-page guide to Bluff Momo: setup, turns, characters, bluffing, poison, and a quick reference sheet.');
    setMetaTag('keywords', 'bluff momo manual, bluff momo rulebook, how to play bluff momo, nepali card game, tumlet');
    setCanonical('https://tumlet.com/bluff-momo-manual/');
    setPropertyTag('og:title', 'Bluff Momo Manual | The Full Rulebook, Explained');
    setPropertyTag('og:description', 'A plain-English, page-by-page guide to Bluff Momo: setup, turns, characters, bluffing, poison, and a quick reference sheet.');
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', 'https://tumlet.com/bluff-momo-manual/');
    setPropertyTag('og:image', 'https://tumlet.com/unfurl.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Bluff Momo Manual | The Full Rulebook, Explained');
    setMetaTag('twitter:image', 'https://tumlet.com/unfurl.png');
  }, []);

  const goTo = (i: number) => {
    audioRef.current?.pause();
    setPlaying(false);
    setT(0);
    setDur(0);
    setMissing(false);
    setPage(i);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const playPause = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
      return;
    }
    setMissing(false);
    const p = a.play();
    if (p && p.catch) {
      p.then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      setPlaying(true);
    }
  };

  const seek = (ratio: number) => {
    const a = audioRef.current;
    if (!a || !dur) return;
    a.currentTime = ratio * dur;
    setT(a.currentTime);
  };

  const audioProps = { playing, missing, t, dur, onPlayPause: playPause, onSeek: seek };
  const current = PAGES[page];

  return (
    <div className="min-h-screen flex flex-col font-baloo text-tumlet-text bg-white">
      <Navbar />

      {page !== 6 && <audio
        key={current.slug}
        ref={audioRef}
        src={`${ASSET}/audio/bluff-momo-${current.slug}.m4a`}
        preload="none"
        className="hidden"
        onLoadedMetadata={(e) => {
          setDur(e.currentTarget.duration || 0);
          setMissing(false);
        }}
        onTimeUpdate={(e) => setT(e.currentTarget.currentTime)}
        onEnded={() => {
          setPlaying(false);
          setT(0);
        }}
        onError={() => {
          setPlaying(false);
          setMissing(true);
          setDur(0);
        }}
      />}

      {/* Chapter picker */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-y-2 border-tumlet-text/10">
        <div className={`${SECTION} py-3 flex gap-2 overflow-x-auto no-scrollbar`}>
          {PAGES.map((p, i) => {
            const active = i === page;
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => goTo(i)}
                aria-current={active ? 'page' : undefined}
                className={`flex-none flex items-center gap-2 rounded-xl border-2 px-4 py-2 font-outfit text-sm font-semibold whitespace-nowrap transition-colors duration-150 ${
                  active
                    ? 'bg-tumlet-primaryRed text-white border-tumlet-primaryRed'
                    : 'bg-tumlet-beige text-tumlet-text border-transparent hover:border-tumlet-primaryYellow'
                }`}
              >
                <p.Icon size={16} />
                {p.label}
              </button>
            );
          })}
        </div>
      </div>

      <main className="flex-1 pt-12 md:pt-16">
        {page === 0 && <StartPage onNext={() => goTo(1)} />}
        {page === 1 && <SetupPage onNext={() => goTo(2)} />}
        {page === 2 && <TurnPage onNext={() => goTo(3)} />}
        {page === 3 && <CharactersPage onNext={() => goTo(4)} />}
        {page === 4 && <BluffingPage onNext={() => goTo(5)} />}
        {page === 5 && <PoisonPage onNext={() => goTo(6)} />}
        {page === 6 && <ReferencePage onBack={() => goTo(0)} />}

        {/* Docked to the bottom of the viewport while you read. Because it is
            really the last thing in the flow, it comes to rest at the end of the
            page instead of covering the last of the content. */}
        {page !== 6 && (
          <div className="sticky bottom-0 z-20 mt-16 bg-tumlet-beige border-t-2 border-tumlet-primaryYellow/60 shadow-[0_-6px_24px_rgba(22,27,50,0.13)]">
            <div className={SECTION}>
              <AudioPlayer {...audioProps} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function PageEyebrow({ n }: { n: number }) {
  return (
    <span className="inline-block font-outfit text-xs font-bold uppercase tracking-[0.16em] text-tumlet-primaryRed bg-tumlet-beige rounded-full px-3 py-1">
      Page {n} of 7
    </span>
  );
}

function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-baloo font-extrabold leading-tight mt-4 mb-3 text-3xl md:text-5xl text-tumlet-text">
      {children}
    </h1>
  );
}

function NextButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="cta-button color-red mt-14 !px-8 md:!px-12">
      {children}
      <ArrowRight size={18} />
    </button>
  );
}

function Callout({
  tone,
  icon,
  children,
}: {
  tone: 'yellow' | 'red';
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const skin =
    tone === 'red'
      ? 'bg-[#FDECEA] border-tumlet-primaryRed/30 text-tumlet-primaryRed'
      : 'bg-tumlet-beige border-tumlet-primaryYellow/50 text-tumlet-brown';
  return (
    <div className={`flex gap-3 rounded-xl border-2 p-5 md:p-6 max-w-[70ch] ${skin}`}>
      <span className="flex-none mt-0.5">{icon}</span>
      <div className={BODY}>{children}</div>
    </div>
  );
}

function StartPage({ onNext }: { onNext: () => void }) {
  const stats = [
    ['15', 'character cards'],
    ['5', 'characters, 3 of each'],
    ['2', 'cards and 2 momo each'],
  ];
  return (
    <div className={SECTION}>
      <div className="flex flex-wrap items-center gap-10 md:gap-12">
        <div className="flex-1 basis-[420px] min-w-0">
          <span className="inline-block font-outfit text-xs font-bold uppercase tracking-[0.16em] text-tumlet-primaryRed bg-tumlet-beige rounded-full px-3 py-1">
            The 60-second version
          </span>
          <h1 className="font-baloo font-extrabold leading-none tracking-tight mt-4 mb-6 text-5xl md:text-7xl text-tumlet-text">
            Bluff Momo
          </h1>

          <div className="flex flex-wrap gap-3">
            {stats.map(([n, label]) => (
              <div key={label} className="rounded-xl bg-tumlet-beige border-2 border-tumlet-primaryYellow/40 px-5 py-3 min-w-[130px]">
                <div className="font-baloo font-extrabold text-3xl text-tumlet-primaryRed leading-none">{n}</div>
                <div className="text-sm text-tumlet-text/70 mt-1">{label}</div>
              </div>
            ))}
          </div>

            </div>
        <div className="flex-1 basis-[220px] flex justify-center">
          <img
            src={`${ASSET}/images/hante-no-bg.png`}
            alt="हन्त, grabbing a whole bowl of momo"
            className="w-full max-w-[300px] h-auto object-contain"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className={H2}>The goal</h2>
        <p className={`${LEAD} mt-3`}>
          Be the last one standing. Use momo and character cards to knock out other people's cards while protecting your own. Lose both of your cards and you are out.
        </p>
      </div>

      <div className="mt-12">
        <Callout tone="yellow" icon={<Lightbulb size={20} />}>
          <span className="font-bold">Key rule.</span> You do not need to hold the card to use its power.
        </Callout>
      </div>

      <div className="mt-12">
        <p className={BODY}>
          Prefer to watch instead? The{' '}
          <Link to="/bluff-momo-rules/" className="underline font-semibold">
            Bluff Momo rules page
          </Link>{' '}
          has the gameplay video and the character table.
        </p>
      </div>

      <NextButton onClick={onNext}>Next: setting up</NextButton>
    </div>
  );
}

function MomoToken({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <img
      src={`${ASSET}/images/momo.png`}
      alt=""
      aria-hidden="true"
      width={256}
      height={259}
      className={`${className} object-contain drop-shadow-[0_1px_2px_rgba(59,36,19,0.3)]`}
    />
  );
}

/* ── The round table ───────────────────────────────────────────────
   Drawn at 520x470 and scaled by the viewBox. The four seats share one
   layout: each is drawn at the bottom of the table, then rotated around
   the centre. Labels are placed separately so they stay upright.        */

const TABLE_CX = 260;
const TABLE_CY = 235;
const CARD_W = 26;
const CARD_H = 36;

// rotate 0 = bottom, 90 = left, 180 = top, 270 = right
const SEATS = [
  { rotate: 0, label: 'You', lx: 260, ly: 430, you: true },
  { rotate: 90, label: 'Player 2', lx: 52, ly: 238, you: false },
  { rotate: 180, label: 'Player 3', lx: 260, ly: 46, you: false },
  { rotate: 270, label: 'Player 4', lx: 468, ly: 238, you: false },
];

function SvgCard({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate})`}>
      <g clipPath="url(#bm-card-clip)">
        <image href={`${ASSET}/images/card-back.png`} x={0} y={0} width={CARD_W} height={CARD_H} preserveAspectRatio="xMidYMid slice" />
      </g>
      <rect x={0} y={0} width={CARD_W} height={CARD_H} rx={3} fill="none" stroke="#6B4226" strokeOpacity={0.3} />
    </g>
  );
}

const MOMO_R = 5;

function Momo({ cx, cy, r = MOMO_R }: { cx: number; cy: number; r?: number }) {
  return (
    <image
      href={`${ASSET}/images/momo.png`}
      x={cx - r}
      y={cy - r}
      width={r * 2}
      height={r * 2}
      preserveAspectRatio="xMidYMid meet"
      filter="url(#bm-momo-shadow)"
    />
  );
}

/* The steamer: 40 momo in the game, 8 dealt out to four players, so 32 heaped
   in the middle. Rings are drawn back to front so the pile reads as a pile. */
const STEAMER_CX = 276;
const STEAMER_CY = 234;

const STEAMER_PILE = [
  { count: 1, radius: 0 },
  { count: 6, radius: 8 },
  { count: 11, radius: 15 },
  { count: 14, radius: 22 },
]
  .flatMap((ring, ri) =>
    Array.from({ length: ring.count }, (_, i) => {
      const angle = (i / ring.count) * Math.PI * 2 + ri * 0.55;
      const wobble = ((i % 3) - 1) * 1.1;
      return {
        x: STEAMER_CX + Math.cos(angle) * (ring.radius + wobble),
        y: STEAMER_CY + Math.sin(angle) * (ring.radius + wobble) * 0.84,
      };
    }),
  )
  .sort((a, b) => a.y - b.y);

function RoundTable() {
  return (
    <svg
      viewBox="0 0 520 456"
      role="img"
      aria-labelledby="bm-table-title bm-table-desc"
      className="w-full h-auto"
    >
      <title id="bm-table-title">A four-player Bluff Momo table</title>
      <desc id="bm-table-desc">
        Four players sit around a round table. Each has two face-down cards and two momo in front of them. The
        face-down deck and the momo pile sit in the middle.
      </desc>

      <defs>
        <clipPath id="bm-card-clip">
          <rect x={0} y={0} width={CARD_W} height={CARD_H} rx={3} />
        </clipPath>
        <clipPath id="bm-table-clip">
          <circle cx={TABLE_CX} cy={TABLE_CY} r={162} />
        </clipPath>
        <filter id="bm-momo-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="1.2" floodColor="#3B2413" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Table */}
      <g clipPath="url(#bm-table-clip)">
        <image
          href={`${ASSET}/images/table-texture.jpg`}
          x={17}
          y={73}
          width={486}
          height={324}
          preserveAspectRatio="xMidYMid slice"
        />
      </g>
      <circle cx={TABLE_CX} cy={TABLE_CY} r={162} fill="none" stroke="#F3B952" strokeWidth={5} />
      <circle cx={TABLE_CX} cy={TABLE_CY} r={148} fill="none" stroke="#F3B952" strokeOpacity={0.4} strokeWidth={1.5} />

      {/* Middle: the deck and the steamer */}
      <SvgCard x={201} y={222} rotate={-12} />
      <SvgCard x={207} y={219} rotate={-6} />
      <SvgCard x={213} y={217} />
      {STEAMER_PILE.map((m, i) => (
        <Momo key={i} cx={m.x} cy={m.y} />
      ))}
      {/* Seats */}
      {SEATS.map((s) => (
        <g key={s.label} transform={`rotate(${s.rotate}, ${TABLE_CX}, ${TABLE_CY})`}>
          <SvgCard x={232} y={314} rotate={-4} />
          <SvgCard x={262} y={314} rotate={4} />
          <Momo cx={252} cy={366} />
          <Momo cx={268} cy={366} />
        </g>
      ))}

      {/* Labels stay upright */}
      {SEATS.map((s) => (
        <text
          key={s.label}
          x={s.lx}
          y={s.ly}
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-baloo"
          fontSize={16}
          fontWeight={700}
          fill={s.you ? '#F16146' : '#161B32'}
          fillOpacity={s.you ? 1 : 0.6}
        >
          {s.label}
        </text>
      ))}
    </svg>
  );
}

function SetupPage({ onNext }: { onNext: () => void }) {
  const steps = [
    { n: 1, title: 'Pile the momo in the middle', body: 'All of them, in one pile everyone can reach. This is the steamer.' },
    { n: 2, title: 'Everyone takes 2 momo', body: 'From the middle pile. Keep them where people can see them, because momo counts are public.' },
    { n: 3, title: 'Shuffle 15 cards, deal 2 each', body: 'Five characters, three copies of each. Deal two to every player and put the rest face-down in the centre as the deck. Look at your own two, then set them face-down in front of you.' },
    { n: 4, title: 'Start to the right of the dealer', body: 'That player takes the first turn, and play carries on around the table. One action each, every turn.' },
  ];
  return (
    <div className={SECTION}>
      <PageEyebrow n={2} />
      <PageTitle>Setting up</PageTitle>
      <p className={LEAD}>Four steps, about a minute. Do them in this order.</p>

      <ol className="mt-14 space-y-8 list-none">
        {steps.map((s) => (
          <li key={s.n} className="flex gap-5">
            <span className="flex-none w-11 h-11 rounded-full bg-tumlet-primaryRed text-white font-baloo font-extrabold text-lg flex items-center justify-center">
              {s.n}
            </span>
            <div className="pt-1.5">
              <h3 className="font-baloo font-bold text-xl text-tumlet-text">{s.title}</h3>
              <p className={`${BODY} mt-1 max-w-[58ch]`}>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className={`${H2} mt-20 mb-6`}>What is on the table</h2>
      <RoundTable />

      <NextButton onClick={onNext}>Next: taking your turn</NextButton>
    </div>
  );
}

function TurnPage({ onNext }: { onNext: () => void }) {
  return (
    <div className={SECTION}>
      <PageEyebrow n={3} />
      <PageTitle>Your turn</PageTitle>
      <p className={LEAD}>On your turn you take exactly one action. Two of them nobody can touch. The rest are character actions, and those can be doubted.</p>

      <h2 className={`${H2} mt-16`}>Basic actions</h2>
      <p className={`${BODY} mt-2 mb-6 max-w-[56ch]`}>Nobody can block these or challenge them, so there is nothing to argue about.</p>
      <div className="grid gap-5 md:grid-cols-2">
        <div className={CARD_POP}>
          <MomoToken className="w-8 h-8" />
          <h3 className="font-baloo font-bold text-lg mt-3">चुपचाप move</h3>
          <p className={`${BODY} mt-1`}>Take 1 momo from the middle pile.</p>
        </div>
        <div className={CARD_POP}>
          <div className="flex items-center gap-2">
            <Flame size={24} className="text-tumlet-primaryRed" />
            <span className="font-outfit text-sm font-semibold text-tumlet-text/60">7 momo</span>
          </div>
          <h3 className="font-baloo font-bold text-lg mt-3">Food-poison</h3>
          <p className={`${BODY} mt-1`}>If you have 7 momo, spend them to poison any player. They lose a card of their choice. Nobody can block it and nobody can challenge it, because you are not claiming a character.</p>
        </div>
      </div>

      <div className="mt-8">
        <Callout tone="red" icon={<AlertTriangle size={20} />}>
          <span className="font-bold">The full plate rule.</span> If you have collected 10 or more momo, you must food-poison another player on your next turn. You cannot sit on a pile that big.
        </Callout>
      </div>

      <NextButton onClick={onNext}>Next: the five characters</NextButton>
    </div>
  );
}

function CharactersPage({ onNext }: { onNext: () => void }) {
  const characters = [
    { img: 'hante-no-bg', name: 'हन्त', action: 'Take 3 momo from the middle pile in one move.', blocks: 'Nothing.' },
    { img: 'chor-no-bg', name: 'चोर', action: 'Steal 2 momo from any player.', blocks: 'चोर\'s attempt to steal your momo.' },
    { img: 'bhattikodai-no-bg', name: 'भट्टीको दाई', action: 'Use 3 momo to poison any player. They lose one card.', blocks: 'Nothing.' },
    { img: 'aama-no-bg', name: 'आमा', action: 'None.', blocks: 'भट्टीको दाई\'s poison attempt.' },
    { img: 'mantri-no-bg', name: 'मन्त्री', action: 'Force any player to show you one of their cards, or draw a new card from the deck, look at it, and put back any 1 of your cards.', blocks: 'चोर\'s attempt to steal your momo, and मन्त्री\'s attempt to look at your card.' },
  ];
  return (
    <div className={SECTION}>
      <PageEyebrow n={4} />
      <PageTitle>The five characters</PageTitle>
      <p className={LEAD}>Three copies of each in the deck. Every character does one thing on your turn, blocks one thing on someone else's, or both.</p>

      <div className="mt-14 space-y-5">
        {characters.map((c) => (
          <div key={c.name} className={`${CARD_POP} flex flex-wrap items-center gap-6 md:gap-8`}>
            <img src={`${ASSET}/images/${c.img}.png`} alt={c.name} className="w-[140px] h-[170px] object-contain flex-none" />
            <div className="flex-1 basis-[320px] min-w-0">
              <h3 className="font-baloo font-extrabold text-2xl text-tumlet-text">{c.name}</h3>
              <p className={`${BODY} mt-2`}>
                <span className="font-bold text-tumlet-text">Action.</span> {c.action}
              </p>
              <p className={`${BODY} mt-1`}>
                <span className="font-bold text-tumlet-text">Blocks.</span> {c.blocks}
              </p>
            </div>
          </div>
        ))}
      </div>

      <NextButton onClick={onNext}>Next: bluffing and challenges</NextButton>
    </div>
  );
}

function BluffingPage({ onNext }: { onNext: () => void }) {
  const blockRows = [
    ['चोर steals 2 momo', 'चोर or मन्त्री'],
    ['भट्टीको दाई poisons you for 3 momo', 'आमा'],
    ['मन्त्री looks at one of your cards', 'मन्त्री'],
    ['हन्त takes 3 momo', 'Nobody. Challenge it or let it go'],
    ['चुपचाप move, or food-poison with 7 momo', 'Nobody, and no challenge either'],
  ];
  return (
    <div className={SECTION}>
      <PageEyebrow n={5} />
      <PageTitle>Bluffing and challenges</PageTitle>
      <p className={LEAD}>
        You can claim any character to take an action or block one, whether or not you hold it. Any player can challenge you to reveal the card.
      </p>

      <h2 className={`${H2} mt-16 mb-6`}>What happens when you are challenged</h2>
      <div className="grid gap-5 md:grid-cols-2">
        <div className={`${CARD} border-tumlet-blue/50 shadow-[6px_6px_0px_0px_#BAC1E1]`}>
          <CheckCircle2 size={26} className="text-tumlet-darkBlue" />
          <h3 className="font-baloo font-bold text-xl mt-3">You were telling the truth</h3>
          <p className={`${BODY} mt-2`}>The challenger loses 1 card of their choice and returns it face-down to the deck. You swap the revealed card with a random card from the deck, so nobody knows what you hold now. Your action still goes through.</p>
        </div>
        <div className={`${CARD} border-tumlet-primaryRed/50 shadow-[6px_6px_0px_0px_#F16146]`}>
          <XCircle size={26} className="text-tumlet-primaryRed" />
          <h3 className="font-baloo font-bold text-xl mt-3">You were bluffing</h3>
          <p className={`${BODY} mt-2`}>You lose 1 card of your choice and return it face-down to the deck. The challenger wins 1 momo from the pile. Your action does not happen.</p>
        </div>
      </div>

      <h2 className={`${H2} mt-20`}>Blocking is also a claim</h2>
      <p className={`${BODY} mt-2 mb-6 max-w-[56ch]`}>
        Saying "आमा, you can't poison me" is a claim like any other, and anyone at the table can challenge it. Read the block table before you say it.
      </p>
      <div className="overflow-x-auto rounded-xl border-2 border-tumlet-text/10">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead className="bg-tumlet-beige">
            <tr>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Action against you</th>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Who can block it</th>
            </tr>
          </thead>
          <tbody>
            {blockRows.map(([action, who]) => (
              <tr key={action} className="border-t-2 border-tumlet-text/10">
                <td className="px-5 py-4 font-semibold">{action}</td>
                <td className={`px-5 py-4 ${BODY}`}>{who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <NextButton onClick={onNext}>Next: the double trouble rule</NextButton>
    </div>
  );
}

function PoisonPage({ onNext }: { onNext: () => void }) {
  const options = [
    { title: 'Take it', body: <>Lose one card of your choice and move on. Boring, and often correct if you already believe they have the card.</> },
    { title: 'Challenge their claim', body: <>If they were telling the truth and show भट्टीको दाई, you lose <span className="font-bold text-tumlet-text">both</span> your cards: one for the poison, one for the failed challenge.</> },
    { title: 'Claim आमा to block it', body: <>If nobody challenges you, the poison is blocked and you keep everything. But if someone challenges you to show आमा and you cannot, you lose both cards: one for the poison, one for the failed bluff.</> },
  ];
  return (
    <div className={SECTION}>
      <PageEyebrow n={6} />
      <PageTitle>Poison and double trouble</PageTitle>
      <p className={LEAD}>A wrong guess when poisoned can cost you two cards instead of one.</p>

      <div className="mt-12">
        <Callout tone="red" icon={<Flame size={20} />}>
          <span className="font-bold">The double trouble rule.</span> If someone poisons you using भट्टीको दाई, you can lose both of your cards in one turn: one for the poison itself, and one for guessing wrong about how to escape it.
        </Callout>
      </div>

      <h2 className={`${H2} mt-16 mb-6`}>Your three options when poison lands</h2>
      <div className="space-y-4">
        {options.map((o, i) => (
          <div key={o.title} className={CARD_POP}>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-tumlet-beige border-2 border-tumlet-primaryYellow font-baloo font-extrabold text-sm flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="font-baloo font-bold text-xl">{o.title}</h3>
            </div>
            <p className={`${BODY} mt-2 max-w-[62ch]`}>{o.body}</p>
          </div>
        ))}
      </div>

      <h2 className={`${H2} mt-20 mb-6`}>Two habits that keep you alive</h2>
      <div className="grid gap-5 md:grid-cols-2">
        <div className={CARD_POP}>
          <Lightbulb size={26} className="text-tumlet-primaryYellow" />
          <h3 className="font-baloo font-bold text-xl mt-3">Count momo, not faces</h3>
          <p className={`${BODY} mt-2`}>Three momo means poison is possible. Seven means it is coming whether or not they hold a card, and ten means they have to use it on their next turn.</p>
        </div>
        <div className={CARD_POP}>
          <Shield size={26} className="text-tumlet-darkBlue" />
          <h3 className="font-baloo font-bold text-xl mt-3">Keep your bluff consistent</h3>
          <p className={`${BODY} mt-2`}>Only three of each character exist. If two people have already shown आमा, your आमा block is a lot less believable than it feels.</p>
        </div>
      </div>

      <NextButton onClick={onNext}>Next: quick reference</NextButton>
    </div>
  );
}

function ReferencePage({ onBack }: { onBack: () => void }) {
  const rows = [
    ['हन्त', 'Take 3 momo from the middle pile in one move', 'Nothing', false],
    ['चोर', 'Steal 2 momo from any player', 'चोर\'s attempt to steal your momo', false],
    ['भट्टीको दाई', 'Use 3 momo to poison any player. They lose one card', 'Nothing', false],
    ['आमा', 'None', 'भट्टीको दाई\'s poison attempt', false],
    ['मन्त्री', 'Force any player to show one of their cards, or draw a new card from the deck, look at it, and put back any 1 of your cards', 'चोर\'s attempt to steal your momo, and मन्त्री\'s attempt to look at your card', false],
    ['चुपचाप move', 'Take 1 momo from the middle. Nobody can block or challenge it', 'Nothing', true],
    ['Food-poison', 'Use 7 momo to food-poison another player. They lose one card. Nobody can block or challenge it', 'Nothing', true],
  ] as const;
  const glossary = [
    ['Momo', 'The currency. You start with 2 and take more from the middle pile.'],
    ['The steamer', 'The momo pile in the middle of the table. Spent momo go back into it.'],
    ['Claim', 'Saying you have a character, whether or not you do, in order to act or to block.'],
    ['Challenge', 'Demanding someone reveal the card they claimed. Whoever turns out to be wrong loses a card.'],
    ['Block', 'Cancelling an action aimed at you by claiming the right character. A block can itself be challenged.'],
    ['Full plate', '10 or more momo. You must food-poison someone on your next turn.'],
    ['Double trouble', 'Losing two cards at once by guessing wrong about a भट्टीको दाई poison.'],
  ];
  return (
    <div className={`${SECTION} pb-20`}>
      <PageEyebrow n={7} />
      <PageTitle>Quick reference</PageTitle>
      <p className={LEAD}>Everything on one screen. Put this in front of the table and stop explaining.</p>

      <div className="mt-12 overflow-x-auto rounded-xl border-2 border-tumlet-text/10">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead className="bg-tumlet-beige">
            <tr>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Character</th>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Action</th>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Blocks</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, action, blocks, muted]) => (
              <tr key={name} className={`border-t-2 border-tumlet-text/10 ${muted ? 'bg-tumlet-beige/40' : ''}`}>
                <td className="px-5 py-4 font-bold whitespace-nowrap">{name}</td>
                <td className={`px-5 py-4 ${BODY}`}>{action}</td>
                <td className={`px-5 py-4 ${BODY}`}>{blocks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className={`${H2} mt-20 mb-2`}>Words you will hear</h2>
      <dl className="divide-y-2 divide-tumlet-text/10 border-t-2 border-b-2 border-tumlet-text/10">
        {glossary.map(([term, def]) => (
          <div key={term} className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-6 py-5">
            <dt className="font-bold">{term}</dt>
            <dd className={BODY}>{def}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 text-tumlet-text/80 leading-relaxed">
        <p>
          Playing with your team? We host{' '}
          <Link to="/corporate-game-night/" className="underline font-semibold">
            corporate game nights
          </Link>{' '}
          and bring the games to your office.
        </p>
      </div>

      <button type="button" onClick={onBack} className="cta-button color-yellow mt-12 !px-8 md:!px-12">
        <ArrowLeft size={18} />
        Back to the start
      </button>
    </div>
  );
}

export default BluffMomoManual;
