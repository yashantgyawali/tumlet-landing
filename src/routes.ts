import type { ComponentType } from 'react';

// Every route in the app. Each page loads as its own chunk, so a visitor only
// downloads the code for the page they open.
//
// `page` is the file name in src/pages. The build uses it to preload the right
// chunk in each pre-rendered page. When you add a route, also add its title and
// description to src/seo/pages.ts (the build fails if one is missing).

export interface AppRoute {
  path: string;
  page: string;
  load: () => Promise<{ default: ComponentType }>;
}

export const ROUTES: AppRoute[] = [
  { path: '/', page: 'Index', load: () => import('./pages/Index') },
  { path: '/bluff-momo-rules', page: 'BluffMomo', load: () => import('./pages/BluffMomo') },
  { path: '/bluff-momo-manual', page: 'BluffMomoManual', load: () => import('./pages/BluffMomoManual') },
  // Unlisted: reachable by URL only, not linked anywhere, noindex and not in the sitemap
  { path: '/bluff-momo-rules-2-player-variant', page: 'BluffMomoTwoPlayer', load: () => import('./pages/BluffMomoTwoPlayer') },
  { path: '/blog', page: 'BlogIndex', load: () => import('./pages/BlogIndex') },
  { path: '/blog/:slug', page: 'Blog', load: () => import('./pages/Blog') },
  { path: '/bichitra', page: 'Bichitra', load: () => import('./pages/Bichitra') },
  { path: '/about', page: 'About', load: () => import('./pages/About') },
  { path: '/ganthan', page: 'Ganthan', load: () => import('./pages/Ganthan') },
  { path: '/corporate-game-night', page: 'CorporateGameNight', load: () => import('./pages/CorporateGameNight') },
  { path: '/thug', page: 'Thug', load: () => import('./pages/Thug') },
  { path: '/tundikhel', page: 'Tundikhel', load: () => import('./pages/Tundikhel') },
  { path: '/tundikhel-how', page: 'TundikhElHow', load: () => import('./pages/TundikhElHow') },
  { path: '/wavelength', page: 'Wavelength', load: () => import('./pages/Wavelength') },
  { path: '/ladbad', page: 'Ladbad', load: () => import('./pages/Ladbad') },
  { path: '/game-night', page: 'GameNight', load: () => import('./pages/GameNight') },
  { path: '/game-night/watering-hole-may-2026', page: 'WateringHoleGameNight', load: () => import('./pages/WateringHoleGameNight') },
  { path: '/game-night/misfits-june-2026', page: 'MisfitsGameNight', load: () => import('./pages/MisfitsGameNight') },
  { path: '/game-night/five10-april-2026', page: 'Five10GameNight', load: () => import('./pages/Five10GameNight') },
  { path: '/game-night/bettercoffee-february-2026', page: 'BetterCoffeeGameNight', load: () => import('./pages/BetterCoffeeGameNight') },
  { path: '/game-night/terrys-july-2026', page: 'TerrysGameNight', load: () => import('./pages/TerrysGameNight') },
  { path: '/game-night/dhokaima-august-2026', page: 'DhokaimaGameNight', load: () => import('./pages/DhokaimaGameNight') },
  { path: '/game-night/tangerine-september-2026', page: 'TangerineGameNight', load: () => import('./pages/TangerineGameNight') },
  { path: '/game-night/surface-october-2026', page: 'SurfaceGameNight', load: () => import('./pages/SurfaceGameNight') },
  { path: '/game-night/the-lab-november-2026', page: 'TheLabGameNight', load: () => import('./pages/TheLabGameNight') },
  { path: '/game-night/kcal-november-2026', page: 'KcalGameNight', load: () => import('./pages/KcalGameNight') },
  // Keep the catch-all last.
  { path: '*', page: 'NotFound', load: () => import('./pages/NotFound') },
];
