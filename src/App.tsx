import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { Quiz } from "./components/Quiz";
import { Result } from "./components/Result";
import { CompareResults } from "./components/CompareResults";
import NotFound from "./pages/NotFound";
import Glossary from "./components/Glossary";
import About from "./components/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Analytics } from '@vercel/analytics/next';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/compare" element={<Quiz />} />
          <Route path="/compare-results" element={<CompareResults />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
    <Analytics />
  </QueryClientProvider>
);

export default App;