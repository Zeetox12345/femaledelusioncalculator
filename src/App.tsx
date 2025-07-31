import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DatingStandards from "./pages/DatingStandards";
import RelationshipCompatibility from "./pages/RelationshipCompatibility";
import DatingTips from "./pages/DatingTips";
import MaleStandards from "./pages/MaleStandards";
import RelationshipAdvice from "./pages/RelationshipAdvice";
import DatingProfileTips from "./pages/DatingProfileTips";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dating-standards" element={<DatingStandards />} />
          <Route path="/relationship-compatibility" element={<RelationshipCompatibility />} />
          <Route path="/dating-tips" element={<DatingTips />} />
          <Route path="/male-standards" element={<MaleStandards />} />
          <Route path="/relationship-advice" element={<RelationshipAdvice />} />
          <Route path="/dating-profile-tips" element={<DatingProfileTips />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
