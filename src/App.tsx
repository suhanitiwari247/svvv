import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { WhatsAppAssistant } from "@/components/WhatsAppAssistant";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CampusMap from "./pages/CampusMap";
import Library from "./pages/Library";
import Sports from "./pages/Sports";
import Calendar from "./pages/Calendar";
import Forum from "./pages/Forum";
import Mentor from "./pages/Mentor";
import NotFound from "./pages/NotFound";
import AssignmentUploader from './components/AssignmentUploader'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HostelSecurity from "./pages/HostelSecurity";

const queryClient = new QueryClient();

const App = () => (
  
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
               
               
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/campus-map" element={<CampusMap />} />
                <Route path="/library" element={<Library />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/mentor" element={<Mentor />} />
                <Route path="/assignment" element={<AssignmentUploader />} />
                <Route path="/hostel" element={<HostelSecurity />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
                
              </Routes>
            </main>
            <WhatsAppAssistant />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;