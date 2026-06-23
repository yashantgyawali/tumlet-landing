/**
 * Post-build pre-rendering script.
 *
 * After `vite build`, run this script to generate a static index.html for
 * every route.  Each file gets:
 *
 *   1. The correct <title>, <meta description>, Open Graph, Twitter, and
 *      canonical tags injected into the <head>.
 *   2. A crawlable <body> fallback injected INTO `<div id="root">` — a real
 *      <h1>, an intro paragraph, and site-wide internal links (nav + footer).
 *
 * The body fallback matters because the app is a client-rendered SPA
 * (src/main.tsx uses `createRoot`, not `hydrateRoot`).  Crawlers that don't
 * execute JavaScript would otherwise see an empty `<div id="root">` — which
 * is exactly why audits reported "H1 missing", "page has no outgoing links",
 * and "orphan page (no incoming internal links)" on every URL.  Because we
 * use `createRoot`, React discards whatever is inside `#root` and re-renders
 * on mount, so real users still get the full React app with zero hydration
 * mismatch — the fallback is only ever seen by non-JS crawlers and on the
 * first paint before the bundle loads.
 *
 * Netlify serves a directory's index.html before applying the
 * `/* /index.html 200` catch-all rewrite, so Google receives unique,
 * accurate meta + content for every URL without any SSR infrastructure.
 *
 * Usage (called automatically by the `build` script in package.json):
 *   node scripts/generate-html.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const SITE = 'https://tumlet.com';

// ─── Route metadata ───────────────────────────────────────────────────────────
// Keep this list in sync with App.tsx routes and public/sitemap.xml.
// `h1` must match the heading the React page actually renders, so the static
// fallback and the hydrated app stay consistent.

const HOME = {
  path: '/',
  title: 'Tumlet | Spreading Playfulness Across Nepal',
  description:
    'Play, laugh, repeat! Tumlet crafts games that spark connection, nostalgia, and pure fun for young Nepali adults.',
  ogImage: 'https://tumlet.com/unfurl.png',
  h1: 'Bluff momo - Board game for Nepali adults',
};

const routes = [
  {
    path: '/about',
    title: 'About Us | Tumlet — Nepali Board Game Company',
    description:
      'Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.',
    ogImage: 'https://tumlet.com/tumlet-logo.png',
    h1: "We're Tumlet.",
  },
  {
    path: '/bluff-momo-rules',
    title: 'Bluff Momo Rules | How to Play the Nepali Card Game',
    description:
      "Learn how to play Bluff Momo — the Nepali bluffing card game by Tumlet. Watch the gameplay video and reference every character's actions and blocks.",
    ogImage: 'https://tumlet.com/unfurl.png',
    h1: 'How to play bluff momo?',
  },
  {
    path: '/corporate-game-night',
    title: 'Corporate Game Night | Tumlet — Team Building with Board Games',
    description:
      'Host a fun corporate game night with Tumlet. We bring board games to your office, set everything up, and run the entire 2-hour session for your team.',
    ogImage: 'https://tumlet.com/unfurl.png',
    h1: 'We bring the games. You bring the team.',
  },
  {
    path: '/ganthan',
    title: 'Ganthan | Meaningful Conversation Prompts for Nepali Families',
    description:
      'Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories and stories. Free and bilingual.',
    ogImage: 'https://tumlet.com/tumlet-logo.png',
    h1: 'Ganthan — conversations worth having with your family',
  },
  {
    path: '/bichitra',
    title: 'Bichitra | Guess the Nepali Last Name',
    description:
      'Bichitra is a Nepali last name puzzle from Tumlet. A photo hides a थर somewhere inside it — can you find it? No options, no shortcuts. Play free online now.',
    ogImage: 'https://tumlet.com/tumlet-logo.png',
    h1: 'Bichitra — Guess the Nepali Last Name',
  },
  {
    path: '/thug',
    title: 'Thug | Social Deduction Game for Nepali Friend Groups',
    description:
      'Thug is a free social deduction game for Nepali friend groups. One person gets a different word — can you figure out who? Built around Nepali culture.',
    ogImage: 'https://tumlet.com/tumlet-logo.png',
    h1: 'Thug — the social deduction game for Nepali friend groups',
  },
  {
    path: '/farak',
    title: "Farak | Who’s Most Likely To — With an Imposter Twist",
    description:
      'Farak is the imposter edition of Who’s Most Likely To. Everyone gets the same question — except one. Can you catch the odd one out? Play free online.',
    ogImage: 'https://tumlet.com/og-farak.png',
    h1: "Farak — Who's Most Likely To, but with an imposter",
  },
  {
    path: '/tundikhel',
    title: 'Race to Tundikhel — A New Nepali Board Game from Tumlet',
    description:
      'Race to Tundikhel is a new Nepali board game from Tumlet. No dice, no luck — just micro-driver chaos through the streets of Kathmandu. Coming soon.',
    ogImage: 'https://tumlet.com/tundikhel/hero-art.png',
    h1: 'Race to Tundikhel — A new Nepali board game from Tumlet',
  },
  {
    path: '/tundikhel-how',
    title: 'How to Play Race to Tundikhel | Instruction Video & Rules',
    description:
      'Watch the instruction video and learn how to play Race to Tundikhel — the Nepali board game by Tumlet. No dice, no luck, just bluff and battery.',
    ogImage: 'https://tumlet.com/unfurl.png',
    h1: 'How to Play Race to Tundikhel',
  },
  {
    path: '/blog',
    title: "Tumlet Blog | Stories from Nepal’s Board Game Scene",
    description:
      'Stories, insights, and discoveries from the world of Nepali games and play. Read about board game culture in Nepal and beyond.',
    ogImage: 'https://tumlet.com/unfurl.png',
    h1: 'The Blog',
  },
  {
    path: '/blog/best-nepali-board-games',
    title: "Best Nepali Board Games I’ve Actually Played",
    description:
      "I've been exploring Nepal's board game scene for a while now. These four games stood out after countless sessions with friends and family.",
    ogImage: 'https://tumlet.com/blogs/best-nepali-board-games/unfurl.png',
    h1: "Best Nepali Board Games I've Actually Played",
  },
  {
    path: '/blog/board-game-nepal',
    title: 'Board Games in Nepal – Where to Play, Events, and Local Games',
    description:
      'Discover board games in Nepal. Find game nights, cafés with games, and Nepali-made games like Firiri and Bagh Chal. Play, meet people, and have fun.',
    ogImage: 'https://tumlet.com/unfurl.png',
    h1: 'Board Games in Nepal — A Quick Guide',
  },
  {
    path: '/wavelength',
    title: "Wavelength | Read your friends' minds | Tumlet",
    description:
      "One player gives a clue, the rest spin the dial to guess. A free Tumlet party game for reading your friends' minds. Play online.",
    ogImage: 'https://tumlet.com/tumlet-logo.png',
    h1: 'wavelength',
  },
  {
    path: '/game-night',
    title: 'Board Game Night: free, every month, all around Kathmandu | Tumlet',
    description:
      'Tumlet hosts a free board game night every month, somewhere new in Kathmandu. No tickets, no experience needed. We teach the rules. Join the WhatsApp community to catch the next one.',
    ogImage: 'https://tumlet.com/game-night-1.jpg',
    h1: 'A free board game night, every month, somewhere new in Kathmandu.',
    relatedLinks: [
      { href: '/game-night/misfits-june-2026/', label: 'Game Night at Misfits, June 2026' },
      { href: '/game-night/watering-hole-may-2026/', label: 'Game Night at The Watering Hole, May 2026' },
      { href: '/game-night/five10-april-2026/', label: 'Game Night at Five10, April 2026' },
      { href: '/game-night/bettercoffee-february-2026/', label: 'Game Night at Better Coffee, February 2026' },
    ],
  },
  {
    path: '/game-night/watering-hole-may-2026',
    title: 'At the Heart of Jhamsikhel · The Watering Hole, May 2026 | Tumlet Game Night',
    description:
      'Our highest attendance yet — 35+ players, new faces, Bluff Momo all night, a Catan group that never played Catan, and Guess the Price (Nepali Edition) to close it out. A recap of Tumlet Game Night at The Watering Hole, Jhamsikhel.',
    ogImage: 'https://tumlet.com/watering-hole-may-2026-thumb.webp',
    h1: 'Tumlet Game Night — At the Heart of Jhamsikhel',
  },
  {
    path: '/game-night/bettercoffee-february-2026',
    title: 'Coffee, Connection, and Chaos · Better Coffee, February 2026 | Tumlet Game Night',
    description:
      "Game night at a coffee shop? At Better Coffee Sanepa it worked. Skull, Codenames, CATAN — and our first Beast-style elimination tournament on Valentine's Day, February 2026.",
    ogImage: 'https://tumlet.com/bettercoffee-february-2026-thumb.png',
    h1: 'Tumlet Game Night — Coffee, Connection, and Chaos',
  },
  {
    path: '/game-night/misfits-june-2026',
    title: "Behind the Door That Isn't a Door · Misfits, June 2026 | Tumlet Game Night",
    description:
      'A crazy door, intentional drinks, staff you actually like, and a game night that went all the way. A recap of Tumlet Game Night at Misfits Kathmandu, June 2026.',
    ogImage: 'https://tumlet.com/misfits-june-2026-thumb.png',
    h1: "Tumlet Game Night — Behind the Door That Isn't a Door",
  },
  {
    path: '/game-night/five10-april-2026',
    title: 'The Hidden Gem with a Hidden Parking in Thamel · Five10, April 2026 | Tumlet Game Night',
    description:
      'Matcha, momo, and a Tumlet-style Beast Games tournament at Five10 Thamel. A recap of the most intense Bluff Momo final ever — April 1, 2026.',
    ogImage: 'https://tumlet.com/five10-april-2026-thumb.png',
    h1: 'Tumlet Game Night — The Hidden Gem with a Hidden Parking in Thamel',
  },
];

// ─── Site-wide links ───────────────────────────────────────────────────────────
// Mirrors the real <Navbar> and <Footer>.  Rendered into every page's static
// body so that (a) every page has outgoing links and (b) every page receives
// an incoming link from every other page — eliminating orphan pages.  Trailing
// slashes match the canonical URLs to avoid "link points to redirect".

const PRIMARY_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/bichitra/', label: 'Bichitra' },
  { href: '/farak/', label: 'Farak' },
  { href: '/ganthan/', label: 'Ganthan' },
  { href: '/thug/', label: 'Thug' },
  { href: '/wavelength/', label: 'Wavelength' },
  { href: '/bluff-momo-rules/', label: 'Bluff Momo Rules' },
  { href: '/tundikhel/', label: 'Race to Tundikhel' },
  { href: '/game-night/', label: 'Game Night' },
  { href: '/about/', label: 'About Us' },
  { href: '/blog/', label: 'Blog' },
];

const FOOTER_LINKS = [
  { href: '/corporate-game-night/', label: 'Corporate Game Night' },
  { href: '/tundikhel-how/', label: 'How to Play Race to Tundikhel' },
  { href: '/blog/best-nepali-board-games/', label: 'Best Nepali Board Games' },
  { href: '/blog/board-game-nepal/', label: 'Board Games in Nepal' },
  { href: 'https://kobadi.tumlet.com/', label: 'Kobadi', external: true },
  { href: 'https://www.instagram.com/tumlet.boardgames/', label: 'Instagram', external: true },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// For HTML text nodes (apostrophes / em-dashes are valid as-is).
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderLinks(items, linkStyle) {
  return items
    .map((l) => {
      const rel = l.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${escapeAttr(l.href)}"${rel} style="${linkStyle}">${escapeHtml(l.label)}</a>`;
    })
    .join('<span style="color:#D9C9A3;margin:0 8px;">·</span>');
}

/**
 * Given the dist/index.html template, replace all head meta with
 * the values for this specific route.
 */
function injectMeta(template, { title, description, ogImage, canonicalUrl }) {
  let html = template;
  const t = escapeAttr(title);
  const d = escapeAttr(description);

  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);

  // <meta name="description">
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${d}" />`
  );

  // OG tags
  html = html.replace(
    /<meta\s+property="og:title"[^>]*>/,
    `<meta property="og:title" content="${t}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[^>]*>/,
    `<meta property="og:description" content="${d}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"[^>]*>/,
    `<meta property="og:image" content="${ogImage}" />`
  );

  // Twitter — fix the incorrect card value in the default template too
  html = html.replace(
    /<meta\s+name="twitter:card"[^>]*>/,
    `<meta name="twitter:card" content="summary_large_image" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"[^>]*>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

  // Inject canonical, og:url, twitter title+description before </head>
  const extra = [
    `  <link rel="canonical" href="${canonicalUrl}" />`,
    `  <meta property="og:url" content="${canonicalUrl}" />`,
    `  <meta name="twitter:title" content="${t}" />`,
    `  <meta name="twitter:description" content="${d}" />`,
  ].join('\n');

  html = html.replace('</head>', `${extra}\n</head>`);

  return html;
}

/**
 * Build the crawlable fallback markup that goes inside `<div id="root">`.
 * React replaces this entirely on mount (createRoot), so it only ever serves
 * non-JS crawlers and the very first paint.
 */
function renderSeoBody({ h1, description, relatedLinks = [] }) {
  const navLinkStyle =
    'color:#F16147;font-weight:600;text-decoration:none;white-space:nowrap;';
  const footerLinkStyle = 'color:#6B6B6B;text-decoration:underline;white-space:nowrap;';

  const relatedSection = relatedLinks.length > 0 ? `
        <section style="margin-top:32px;">
          <h2 style="font-size:18px;font-weight:700;color:#130D01;margin:0 0 12px;">Recent game nights</h2>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
            ${relatedLinks.map(l => `<li><a href="${escapeAttr(l.href)}" style="color:#F16147;text-decoration:underline;">${escapeHtml(l.label)}</a></li>`).join('\n            ')}
          </ul>
        </section>` : '';

  return `
    <div style="max-width:880px;margin:0 auto;padding:40px 24px;font-family:'Baloo 2',system-ui,sans-serif;color:#130D01;line-height:1.5;">
      <a href="/" aria-label="Tumlet home">
        <img src="/tumlet-logo.png" alt="Tumlet — Nepali Board Games" width="150" style="display:block;margin-bottom:28px;" />
      </a>
      <nav aria-label="Primary" style="display:flex;flex-wrap:wrap;align-items:center;gap:4px 0;margin-bottom:40px;font-size:15px;">
        ${renderLinks(PRIMARY_LINKS, navLinkStyle)}
      </nav>
      <main>
        <h1 style="font-size:clamp(32px,5vw,52px);font-weight:800;letter-spacing:-0.01em;margin:0 0 16px;">${escapeHtml(
          h1
        )}</h1>
        <p style="font-size:18px;line-height:1.6;color:#4B5563;max-width:640px;margin:0 0 24px;">${escapeHtml(
          description
        )}</p>
        <p style="font-size:16px;color:#4B5563;max-width:640px;">
          Explore Tumlet's online games — <a href="/bichitra/" style="color:#F16147;">Bichitra</a>,
          <a href="/farak/" style="color:#F16147;">Farak</a>,
          <a href="/ganthan/" style="color:#F16147;">Ganthan</a> and
          <a href="/thug/" style="color:#F16147;">Thug</a> — or race through Kathmandu with
          <a href="/tundikhel/" style="color:#F16147;">Race to Tundikhel</a>.
        </p>${relatedSection}
      </main>
      <footer style="margin-top:56px;padding-top:24px;border-top:1px solid #E5C97E;color:#6B6B6B;font-size:14px;">
        <p style="max-width:560px;margin:0 0 16px;">
          Tumlet is a Nepali board game company on a mission to spread playfulness amongst Nepali
          youths — making party games, card games and free online games rooted in Nepali culture.
        </p>
        <nav aria-label="More from Tumlet" style="display:flex;flex-wrap:wrap;align-items:center;gap:4px 0;">
          ${renderLinks(FOOTER_LINKS, footerLinkStyle)}
        </nav>
      </footer>
    </div>
  `;
}

/**
 * Inject the SEO body into the empty `<div id="root"></div>`.
 */
function injectBody(html, route) {
  return html.replace(
    '<div id="root"></div>',
    `<div id="root">${renderSeoBody(route)}</div>`
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}

// Read the original built template ONCE (still has an empty #root), then reuse
// it for every route — including the homepage we overwrite below.
const rootTemplate = fs.readFileSync(templatePath, 'utf-8');

// Homepage — fix meta + inject body, then overwrite dist/index.html.
let homeHtml = injectMeta(rootTemplate, { ...HOME, canonicalUrl: `${SITE}/` });
homeHtml = injectBody(homeHtml, HOME);
fs.writeFileSync(templatePath, homeHtml, 'utf-8');
console.log('  ✓ dist/index.html (homepage)');

for (const route of routes) {
  // Netlify serves directory index files at their trailing-slash URL and
  // 301-redirects the non-slash form, so the canonical (and og:url) must use
  // the trailing slash to avoid "canonical points to redirect".
  const canonicalUrl = `${SITE}${route.path}/`;
  let html = injectMeta(rootTemplate, { ...route, canonicalUrl });
  html = injectBody(html, route);

  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });

  const outFile = path.join(routeDir, 'index.html');
  fs.writeFileSync(outFile, html, 'utf-8');
  console.log(`  ✓ dist${route.path}/index.html`);
}

console.log(`\nPre-rendered ${routes.length + 1} routes successfully.`);
