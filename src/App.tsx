import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DatingStandards from "./pages/DatingStandards";
import RelationshipCompatibility from "./pages/RelationshipCompatibility";
import DatingTips from "./pages/DatingTips";
import MaleStandards from "./pages/MaleStandards";
import RelationshipAdvice from "./pages/RelationshipAdvice";
import DatingProfileTips from "./pages/DatingProfileTips";
import DatingRedFlagsChecklist from "./pages/DatingRedFlagsChecklist";
import TextingRulesDating from "./pages/TextingRulesDating";
import WhatMenFindAttractive from "./pages/WhatMenFindAttractive";
import DatingAgeCalculator from "./pages/DatingAgeCalculator";
import DatingSuccessStatistics from "./pages/DatingSuccessStatistics";
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
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/dating-standards" element={<DatingStandards />} />
                <Route path="/relationship-compatibility" element={<RelationshipCompatibility />} />
                <Route path="/dating-tips" element={<DatingTips />} />
                <Route path="/male-standards" element={<MaleStandards />} />
                <Route path="/relationship-advice" element={<RelationshipAdvice />} />
                <Route path="/dating-profile-tips" element={<DatingProfileTips />} />
                <Route path="/dating-red-flags-checklist" element={<DatingRedFlagsChecklist />} />
                <Route path="/texting-rules-dating" element={<TextingRulesDating />} />
                <Route path="/what-men-find-attractive" element={<WhatMenFindAttractive />} />
                <Route path="/dating-age-calculator" element={<DatingAgeCalculator />} />
                <Route path="/dating-success-statistics" element={<DatingSuccessStatistics />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
