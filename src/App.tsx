import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Consultation from "./pages/Consultation";
import PropertyValuation from "./pages/PropertyValuation";
import AppraisalOrder from "./pages/AppraisalOrder";
import PropertyManagement from "./pages/PropertyManagement";
import InvestmentAdvisory from "./pages/InvestmentAdvisory";
import LandDevelopment from "./pages/LandDevelopment";
import TransactionManagement from "./pages/TransactionManagement";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/property-valuation" element={<PropertyValuation />} />
              <Route path="/appraisal" element={<AppraisalOrder />} />
              <Route path="/property-management" element={<PropertyManagement />} />
              <Route path="/investment-advisory" element={<InvestmentAdvisory />} />
              <Route path="/land-development" element={<LandDevelopment />} />
              <Route path="/transaction-management" element={<TransactionManagement />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
