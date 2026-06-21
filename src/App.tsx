import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./components/Analytics";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import BluffMomo from "./pages/BluffMomo";
import BlogIndex from "./pages/BlogIndex";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Bichitra from "./pages/Bichitra";
import About from "./pages/About";
import Ganthan from "./pages/Ganthan";
import CorporateGameNight from "./pages/CorporateGameNight";
import Thug from "./pages/Thug";
import Farak from "./pages/Farak";
import Tundikhel from "./pages/Tundikhel";
import TundikhElHow from "./pages/TundikhElHow";
import Wavelength from "./pages/Wavelength";
import GameNight from "./pages/GameNight";
import MisfitsGameNight from "./pages/MisfitsGameNight";
import Five10GameNight from "./pages/Five10GameNight";
import WateringHoleGameNight from "./pages/WateringHoleGameNight";
import BetterCoffeeGameNight from "./pages/BetterCoffeeGameNight";

const queryClient = new QueryClient();

// Replace with your actual Google Analytics tracking ID
const GA_TRACKING_ID = "G-CXY6SHNGBH";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Analytics trackingId={GA_TRACKING_ID} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bluff-momo-rules" element={<BluffMomo />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/bichitra" element={<Bichitra />} />
          <Route path="/about" element={<About />} />
          <Route path="/ganthan" element={<Ganthan />} />
          <Route path="/corporate-game-night" element={<CorporateGameNight />} />
          <Route path="/thug" element={<Thug />} />
          <Route path="/farak" element={<Farak />} />
          <Route path="/tundikhel" element={<Tundikhel />} />
          <Route path="/tundikhel-how" element={<TundikhElHow />} />
          <Route path="/wavelength" element={<Wavelength />} />
          <Route path="/game-night" element={<GameNight />} />
          <Route path="/game-night/watering-hole-may-2026" element={<WateringHoleGameNight />} />
          <Route path="/game-night/misfits-june-2026" element={<MisfitsGameNight />} />
          <Route path="/game-night/five10-april-2026" element={<Five10GameNight />} />
          <Route path="/game-night/bettercoffee-february-2026" element={<BetterCoffeeGameNight />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
