import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy-load per-service pages (best practice: smaller initial bundle)
const LocalMoving = lazy(() => import("./pages/services/LocalMoving"));
const LCL = lazy(() => import("./pages/services/LCL"));
const FCL = lazy(() => import("./pages/services/FCL"));
const AirFreight = lazy(() => import("./pages/services/AirFreight"));
const CrossStuffing = lazy(() => import("./pages/services/CrossStuffing"));
const ContainerLoadingOffloading = lazy(() => import("./pages/services/ContainerLoadingOffloading"));
const RoadTransport = lazy(() => import("./pages/services/RoadTransport"));
const CustomsClearance = lazy(() => import("./pages/services/CustomsClearance"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/customs-clearance" element={<CustomsClearance />} />
            <Route path="/services/local-moving" element={<LocalMoving />} />
            <Route path="/services/lcl" element={<LCL />} />
            <Route path="/services/fcl" element={<FCL />} />
            <Route path="/services/air-freight" element={<AirFreight />} />
            <Route path="/services/cross-stuffing" element={<CrossStuffing />} />
            <Route path="/services/container-loading-offloading" element={<ContainerLoadingOffloading />} />
            <Route path="/services/road-transport" element={<RoadTransport />} />

            {/* keep existing wildcard/other routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
