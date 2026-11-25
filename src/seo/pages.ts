import { SITE_URL, type PageMeta } from './head';

// Title, description, preview image, structured data and sitemap settings for
// every page except blog posts (those come from each post's frontmatter, see
// ./blog.ts). The build reads this list to pre-render each page, write
// sitemap.xml and the 404 page, and the browser reads it to update the head on
// client-side navigation. Add new pages here and in src/routes.ts.

const ORG = { '@type': 'Organization', name: 'Tumlet', url: SITE_URL } as const;
const FREE = { '@type': 'Offer', price: '0', priceCurrency: 'USD' } as const;

export const PAGES: PageMeta[] = [
  {
    path: '/',
    title: 'Tumlet: Nepali Board Games, Card Games & Free Party Games',
    description:
      'Tumlet makes games for young Nepali adults. Play with friends, bring back childhood memories, and have fun.',
    image: `${SITE_URL}/unfurl.png`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Tumlet',
        description: 'Nepali board game company spreading playfulness across Nepal',
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/tumlet-logo.png`,
        sameAs: [
          'https://www.instagram.com/tumlet.boardgames/',
          'https://www.youtube.com/@tumlet.boardgames',
        ],
        foundingDate: '2022',
        foundingLocation: { '@type': 'Place', name: 'Kathmandu, Nepal' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Tumlet',
        url: `${SITE_URL}/`,
      },
    ],
    sitemap: { lastmod: '2026-05-20', changefreq: 'weekly', priority: 1.0 },
  },
  {
    path: '/about',
    title: 'About Us | Tumlet - Nepali board game company',
    description:
      'Tumlet is a Nepali board game company. Read our story and why we make games for Nepal.',
    image: `${SITE_URL}/tumlet-logo.png`,
    sitemap: { lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.8 },
  },
  {
    path: '/bluff-momo-rules',
    title: 'Bluff Momo Rules | How to Play the Nepali Card Game',
    description:
      "Learn how to play Bluff Momo, the Nepali bluffing card game by Tumlet. Watch the gameplay video and look up each character's actions and blocks.",
    image: `${SITE_URL}/unfurl.png`,
    sitemap: { lastmod: '2026-10-22', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/bluff-momo-manual',
    title: 'Bluff Momo Manual | The Full Rulebook, Explained',
    description:
      'A plain-English, page-by-page guide to Bluff Momo: setup, turns, characters, bluffing, poison, and a quick reference sheet.',
    image: `${SITE_URL}/unfurl.png`,
    sitemap: { lastmod: '2026-11-24', changefreq: 'monthly', priority: 0.7 },
  },
  {
    // Unlisted on purpose: reachable by URL, kept out of search and the sitemap.
    path: '/bluff-momo-rules-2-player-variant',
    title: 'Bluff Momo 2-Player Variant | Rules Manual',
    description:
      'How to play Bluff Momo with two players: five cards each, a hand of two, a draw pile of three, named poison and the double आमा block.',
    image: `${SITE_URL}/unfurl.png`,
    noindex: true,
  },
  {
    path: '/corporate-game-night',
    title: 'Corporate Game Night with Board Games | Tumlet',
    description:
      'Tumlet brings board games to your office, sets everything up, and runs a 3-hour game night for your team.',
    image: `${SITE_URL}/unfurl.png`,
    sitemap: { lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/ganthan',
    title: 'Ganthan | Conversation Prompts for Nepali Families',
    description:
      'Ganthan gives Nepali families questions that go beyond daily check-ins. Ask your aama-baba about memories and stories. Free and bilingual.',
    image: `${SITE_URL}/tumlet-logo.png`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Ganthan',
      description:
        'Ganthan gives Nepali families conversation prompts that go beyond daily check-ins. Bilingual questions in Nepali and English.',
      url: 'https://ganthan.tumlet.com/',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any',
      offers: FREE,
      creator: ORG,
    },
    sitemap: { lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.6 },
  },
  {
    path: '/bichitra',
    title: 'Bichitra | Guess the Nepali Last Name',
    description:
      'Bichitra is a Nepali last name puzzle from Tumlet. A photo hides a थर somewhere inside it. Can you find it? There are no options. Play free online.',
    image: `${SITE_URL}/tumlet-logo.png`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Bichitra',
      description:
        'A Nepali last name puzzle. A photo hides a थर somewhere inside it: no options, type your guess and find it.',
      url: 'https://bichitra.tumlet.com/',
      applicationCategory: 'Game',
      operatingSystem: 'Web',
      offers: FREE,
      creator: ORG,
    },
    sitemap: { lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.6 },
  },
  {
    path: '/thug',
    title: 'Thug | Social Deduction Game for Nepali Friend Groups',
    description:
      'Thug is a free social deduction game for Nepali friend groups. One player gets a different word. Can you find out who? Built around Nepali culture.',
    image: `${SITE_URL}/tumlet-logo.png`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Thug',
      description:
        'A free social deduction game for Nepali friend groups. One person gets a different word and must bluff their way through.',
      url: 'https://thug.tumlet.com/',
      applicationCategory: 'Game',
      operatingSystem: 'Any',
      offers: FREE,
      numberOfPlayers: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 10 },
      creator: ORG,
    },
    sitemap: { lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.6 },
  },
  {
    path: '/tundikhel',
    title: 'Race to Tundikhel: A New Nepali Board Game | Tumlet',
    description:
      'Race to Tundikhel is a new Nepali board game from Tumlet. No dice, no luck: just micro-driver chaos through the streets of Kathmandu. Coming soon.',
    image: `${SITE_URL}/tundikhel/hero-art.png`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Game',
      name: 'Race to Tundikhel',
      description:
        'A Nepali board game where players race micro-buses through the streets of Kathmandu to reach Tundikhel first. No dice: pure bluff and battery management.',
      url: `${SITE_URL}/tundikhel/`,
      image: `${SITE_URL}/tundikhel/hero-art.png`,
      numberOfPlayers: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 6 },
      typicalAgeRange: '10+',
      creator: ORG,
      gameLocation: { '@type': 'Place', name: 'Tundikhel, Kathmandu, Nepal' },
    },
    sitemap: { lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/tundikhel-how',
    title: 'How to Play Race to Tundikhel | Instruction Video & Rules',
    description:
      'Watch the instruction video and learn how to play Race to Tundikhel, the Nepali board game by Tumlet. No dice, no luck, just bluff and battery.',
    image: `${SITE_URL}/unfurl.png`,
    sitemap: { lastmod: '2026-05-25', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/wavelength',
    title: "Wavelength | Read your friends' minds | Tumlet",
    description:
      "One player gives a clue, the rest spin the dial to guess. A free Tumlet party game for reading your friends' minds. Play online.",
    socialDescription:
      'A team party game about how alike you really think. One player gives a clue and the team guesses on the dial. Play free online.',
    image: `${SITE_URL}/tumlet-logo.png`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Wavelength',
      description:
        'A team party game about getting on the same wavelength as your friends. One player gives a clue, the rest spin the dial to guess.',
      url: 'https://wavelength.tumlet.com/',
      applicationCategory: 'Game',
      operatingSystem: 'Web',
      offers: FREE,
      creator: ORG,
    },
    sitemap: { lastmod: '2026-06-06', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/ladbad',
    title: 'Ladbad | Guess the Gibberish, Nepali Edition | Tumlet',
    description:
      'Read silly English out loud until it turns into Nepali. Ladbad is a free Nepali gibberish party game you play in teams on your phones.',
    image: `${SITE_URL}/ladbad-logo.png`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Ladbad',
      alternateName: 'लडबड',
      description:
        'A Nepali gibberish party game for phones. Read silly English out loud until your team hears the Nepali hiding inside it.',
      url: 'https://ladbad.tumlet.com/',
      applicationCategory: 'Game',
      operatingSystem: 'Web',
      inLanguage: ['en', 'ne'],
      offers: FREE,
      creator: ORG,
    },
    sitemap: { lastmod: '2026-11-19', changefreq: 'monthly', priority: 0.7 },
  },
  {
    // lastmod is filled in at build time from the newest game night recap.
    path: '/game-night',
    title: 'Free Board Game Night in Kathmandu, Every Month | Tumlet',
    description:
      'Tumlet hosts a free board game night every month, somewhere new in Kathmandu. No experience needed. Join the WhatsApp community for the next one.',
    image: `${SITE_URL}/game-night-1.jpg`,
    sitemap: { changefreq: 'weekly', priority: 0.8 },
  },
  {
    // lastmod is filled in at build time from the newest post or recap.
    path: '/blog',
    title: "Tumlet Blog | Stories from Nepal's board game scene",
    description:
      'Stories about Nepali games and play. Read about board game culture in Nepal and beyond.',
    image: `${SITE_URL}/unfurl.png`,
    sitemap: { changefreq: 'weekly', priority: 0.9 },
  },

  // Game night recaps
  {
    path: '/game-night/kcal-november-2026',
    title: 'Nostalgic Game Night · KCAL, Nov 2026 | Tumlet',
    description:
      'KCAL x Tumlet in Kupondole: a game night built on games Nepali kids played in the early 2000s, from Guess the Price and chungi to a Name Place Animal Thing final.',
    image: `${SITE_URL}/kcal-november-2026-thumb.png`,
    type: 'article',
    sitemap: { lastmod: '2026-11-15', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/game-night/the-lab-november-2026',
    title: 'We Took It to The Lab · The Lab, Nov 2026 | Tumlet',
    description:
      '65+ players at The Lab, a cocktail and vinyl bar in Labim Mall. Our biggest game night yet, Poker Momo came back, and Magical Athlete won the crowd.',
    image: `${SITE_URL}/the-lab-november-2026-thumb.webp`,
    type: 'article',
    sitemap: { lastmod: '2026-11-15', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/game-night/surface-october-2026',
    title: 'They Designed Us a Menu · Surface, Oct 2026 | Tumlet',
    description:
      'Around 60 players at Surface Coffee & Co, Baneshwor, right before Dashain. Surface designed us a menu, and the final came down to coin tosses and Falas.',
    image: `${SITE_URL}/surface-october-2026-thumb.png`,
    type: 'article',
    sitemap: { lastmod: '2026-10-07', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/game-night/tangerine-september-2026',
    title: 'Feels Like Narnia · Tangerine, Sep 2026 | Tumlet',
    description:
      'Around 60 players packed into Tangerine Brunch & Bar in Bakhundole, our least-advertised game night yet. Guess the Price got a twist, Skull won the room.',
    image: `${SITE_URL}/tangerine-september-2026-thumb.webp`,
    type: 'article',
    sitemap: { lastmod: '2026-09-10', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/game-night/dhokaima-august-2026',
    title: 'Best Chocolate Cake · Dhokaima Cafe, Aug 2026 | Tumlet',
    description:
      'Around 60 players filled Dhokaima Cafe beside Patan Dhoka for our last game night before the tournament. Bluff Momo took every table, Tundikhel debuted.',
    image: `${SITE_URL}/dhokaima-august-2026-thumb.webp`,
    type: 'article',
    sitemap: { lastmod: '2026-08-16', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/game-night/terrys-july-2026',
    title: "The Whole Roof Was Ours · Terry's, July 2026 | Tumlet",
    description:
      "Our biggest turnout yet: 50+ players took over Terry's rooftop for Saboteur, Bluff Momo and the debut of Momo Psychi, our new bidding game.",
    image: `${SITE_URL}/terrys-july-2026-thumb.webp`,
    type: 'article',
    sitemap: { lastmod: '2026-07-04', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/game-night/misfits-june-2026',
    title: "The Door That Isn't a Door · Misfits, Jun 2026 | Tumlet",
    description:
      '40+ players, a door that is not quite a door, and our new game Almosttt Misfit. A recap of Tumlet Game Night at Misfits Kathmandu, June 2026.',
    image: `${SITE_URL}/misfits-june-2026-thumb.webp`,
    type: 'article',
    sitemap: { lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/game-night/watering-hole-may-2026',
    title: 'Heart of Jhamsikhel · Watering Hole, May 2026 | Tumlet',
    description:
      'Our highest attendance yet: 35+ players, new faces, Bluff Momo all night, and a Catan group that never played Catan, at The Watering Hole, Jhamsikhel.',
    image: `${SITE_URL}/watering-hole-may-2026-thumb.webp`,
    type: 'article',
    sitemap: { lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/game-night/five10-april-2026',
    title: 'Hidden Gem in Thamel · Five10, Apr 2026 | Tumlet',
    description:
      'Matcha, momo, and a Tumlet-style Beast Games tournament at Five10 Thamel. A recap of the most intense Bluff Momo final we have seen, April 1, 2026.',
    image: `${SITE_URL}/five10-april-2026-thumb.png`,
    type: 'article',
    sitemap: { lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/game-night/bettercoffee-february-2026',
    title: 'Coffee and Chaos · Better Coffee, Feb 2026 | Tumlet',
    description:
      "Game night at a coffee shop? At Better Coffee Sanepa it worked: Skull, Codenames, CATAN and our first Beast-style tournament on Valentine's Day.",
    image: `${SITE_URL}/bettercoffee-february-2026-thumb.png`,
    type: 'article',
    sitemap: { lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.7 },
  },
];

export const NOT_FOUND_META: PageMeta = {
  path: '/404',
  title: 'Page not found | Tumlet',
  description: "This page doesn't exist. Head back to Tumlet for Nepali board games, card games and free party games.",
  image: `${SITE_URL}/unfurl.png`,
  noindex: true,
  canonical: false,
};

const BY_PATH = new Map(PAGES.map((p) => [p.path, p]));

export function findPageMeta(path: string): PageMeta | undefined {
  return BY_PATH.get(path);
}
