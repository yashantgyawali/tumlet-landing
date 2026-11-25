import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const container = document.getElementById('root')!;

// v7_startTransition keeps the current page on screen while the next page's
// code loads, instead of flashing a blank screen.
const app = (
  <BrowserRouter future={{ v7_startTransition: true }}>
    <App />
  </BrowserRouter>
);

// Built pages arrive with their HTML already rendered (scripts/prerender.mjs),
// so attach to it. The dev server serves an empty #root, so render from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
