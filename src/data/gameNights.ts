export type GameNightRecap = {
  id: string;
  href: string;
  isLink: boolean;
  when: string;
  title: string;
  desc: string;
  thumbnail?: string;
  publishedAt: string;
  readTime: string;
};

// Every past game night recap. Used on /game-night and listed on /blog.
export const pastNights: GameNightRecap[] = [
  {
    id: 'ev-kcal-nov-2026',
    href: '/game-night/kcal-november-2026',
    publishedAt: '2026-11-15',
    readTime: '5 min read',
    isLink: true,
    when: 'Nov 2026 · Kupondole',
    title: 'Nostalgic game night at KCAL',
    desc: "KCAL x Tumlet. The games we grew up with: guess the price, chungi, a sack, spoon and math relay, Machha Machha Bhyaguta, and a Name Place Animal Thing final.",
    thumbnail: '/kcal-november-2026-thumb.png',
  },
  {
    id: 'ev-the-lab-nov-2026',
    href: '/game-night/the-lab-november-2026',
    publishedAt: '2026-11-15',
    readTime: '3 min read',
    isLink: true,
    when: 'Nov 2026 · Labim Mall',
    title: 'We took it to The Lab',
    desc: "The Lab, a cocktail and vinyl bar. Our biggest turnout yet at 65+, Board Game Nepal in the house, and Poker Momo came back for the second half.",
    thumbnail: '/the-lab-november-2026-thumb.webp',
  },
  {
    id: 'ev-surface-oct-2026',
    href: '/game-night/surface-october-2026',
    publishedAt: '2026-10-07',
    readTime: '3 min read',
    isLink: true,
    when: 'Oct 2026 · Baneshwor',
    title: 'The place that designed us a menu',
    desc: "Surface Coffee & Co. A menu made just for game night, Bluff Momo before the event even started, and a pre-Dashain luck tournament with a Makkusé prize.",
    thumbnail: '/surface-october-2026-thumb.png',
  },
  {
    id: 'ev-tangerine-sep-2026',
    href: '/game-night/tangerine-september-2026',
    publishedAt: '2026-09-09',
    readTime: '3 min read',
    isLink: true,
    when: 'Sep 2026 · Bakhundole',
    title: 'The place that feels like Narnia',
    desc: "Tangerine Brunch & Bar. Barely advertised and still hit ~60 players, Guess the Price came back with a chura-and-pads twist, and Skull was the game of the night.",
    thumbnail: '/tangerine-september-2026-thumb.webp',
  },
  {
    id: 'ev-dhokaima-aug-2026',
    href: '/game-night/dhokaima-august-2026',
    publishedAt: '2026-08-14',
    readTime: '3 min read',
    isLink: true,
    when: 'Aug 2026 · Patan Dhoka',
    title: 'The place with the best chocolate cake',
    desc: "Dhokaima Cafe. Our biggest crowd yet at ~60, Bluff Momo running on every single table, and Race to Tundikhel's game night debut.",
    thumbnail: '/dhokaima-august-2026-thumb.webp',
  },
  {
    id: 'ev-terrys-jul-2026',
    href: '/game-night/terrys-july-2026',
    publishedAt: '2026-07-03',
    readTime: '3 min read',
    isLink: true,
    when: 'Jul 2026 · Terry\'s Pub & Bistro',
    title: 'The whole roof was ours',
    desc: "Terry's Pub & Bistro. Record 50+ turnout, the debut of Momo Psychi, and Saboteur crowned best game of the night.",
    thumbnail: '/terrys-july-2026-thumb.webp',
  },
  {
    id: 'ev-watering-hole-jun-2026',
    href: '/game-night/watering-hole-may-2026',
    publishedAt: '2026-05-08',
    readTime: '3 min read',
    isLink: true,
    when: 'May 2026 · Jhamsikhel',
    title: "At the heart of Jhamsikhel",
    desc: "The Watering Hole. Record turnout, a Catan group that never played Catan, and Guess the Price (Nepali Edition) to close the night.",
    thumbnail: '/watering-hole-may-2026-thumb.webp',
  },
  {
    id: 'ev-misfits-jun-2026',
    href: '/game-night/misfits-june-2026',
    publishedAt: '2026-06-03',
    readTime: '3 min read',
    isLink: true,
    when: 'Jun 2026 · Kanti Path',
    title: "The place with a door that isn't a door",
    desc: "Misfits Kathmandu. A crazy door, intentional drinks, and 40+ players who stayed till the venue pulled the lights.",
    thumbnail: '/misfits-june-2026-thumb.webp',
  },
  {
    id: 'ev-five10-apr-2026',
    href: '/game-night/five10-april-2026',
    publishedAt: '2026-04-01',
    readTime: '4 min read',
    isLink: true,
    when: 'Apr 2026 · Thamel',
    title: "The hidden gem with a hidden parking in Thamel",
    desc: "Five10, Thamel. Matcha, momo, and a 35-person Beast Games tournament, ending in the most intense Bluff Momo final we've ever seen.",
    thumbnail: '/five10-april-2026-thumb.png',
  },
  {
    id: 'ev-bettercoffee-feb-2026',
    href: '/game-night/bettercoffee-february-2026',
    publishedAt: '2026-02-14',
    readTime: '5 min read',
    isLink: true,
    when: 'Feb 2026 · Sanepa',
    title: 'Coffee and Valentine\'s chaos',
    desc: "Better Coffee, Sanepa. Our first Beast-style elimination tournament: 30+ players, Valentine's chaos, and one Bluff Momo champion.",
    thumbnail: '/bettercoffee-february-2026-thumb.png',
  },
];
