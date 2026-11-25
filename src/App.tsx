import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Analytics from "./components/Analytics";
import HeadManager from "./components/HeadManager";
import ScrollToTop from "./components/ScrollToTop";
import { ROUTES } from "./routes";

const queryClient = new QueryClient();

const GA_TRACKING_ID = "G-CXY6SHNGBH";

// Created once, outside render, so React keeps the same lazy component.
const PAGES = ROUTES.map((route) => ({ path: route.path, Component: lazy(route.load) }));

// The router is supplied by the entry point: BrowserRouter in the browser
// (src/main.tsx) and StaticRouter when pre-rendering (src/entry-server.tsx).
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Analytics trackingId={GA_TRACKING_ID} />
      <HeadManager />
      <Suspense fallback={null}>
        <Routes>
          {PAGES.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
