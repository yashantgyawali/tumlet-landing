
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./components/Analytics";
import Index from "./pages/Index";
import BluffMomo from "./pages/BluffMomo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Replace with your actual Google Analytics tracking ID
const GA_TRACKING_ID = "G-CXY6SHNGBH";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Analytics trackingId={GA_TRACKING_ID} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bluff-momo-rules" element={<BluffMomo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
