import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

// Eager load homepage for LCP
import Index from "./pages/Index";

// Lazy load non-critical routes
const About = lazy(() => import("./pages/About"));
const Treatments = lazy(() => import("./pages/Treatments"));
const TreatmentTRT = lazy(() => import("./pages/TreatmentTRT"));
const TreatmentED = lazy(() => import("./pages/TreatmentED"));
const TreatmentWeightLoss = lazy(() => import("./pages/TreatmentWeightLoss"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Resources = lazy(() => import("./pages/Resources"));
const Careers = lazy(() => import("./pages/Careers"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const Press = lazy(() => import("./pages/Press"));
const Coverage = lazy(() => import("./pages/Coverage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-cream-100">
    <div className="size-8 rounded-full border-2 border-cta/20 border-t-cta animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Global noise texture overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            pointerEvents: "none",
            opacity: 0.038,
            mixBlendMode: "overlay",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundSize: "220px 220px",
          }}
        />
        <BrowserRouter>
          <ScrollToTop />
          <CookieConsent />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/treatments/trt" element={<TreatmentTRT />} />
              <Route path="/treatments/ed" element={<TreatmentED />} />
              <Route path="/treatments/weight-loss" element={<TreatmentWeightLoss />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/coverage" element={<Coverage />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/press" element={<Press />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
