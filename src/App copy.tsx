import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "./lib/i18n-context";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Simulator from "./pages/Simulator";
import Loans from "./pages/Loans";
import NotFound from "./pages/not-found";
import ScrollToTop from "@/components/ScrollToTop"
import WhatsAppButton from "@/components/WhatsAppButton"
import MentionsLegales          from "@/pages/MentionsLegales"
import PolitiqueConfidentialite  from "@/pages/PolitiqueConfidentialite"
import HowItWorks from "@/pages/HowItWorks"
import { CookieProvider } from "./components/CookieContext";
import CookieBanner from "./components/CookieBanner";
import CookiesPage from "./pages/CookiesPage";


function Router() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <CookieProvider>
        <Navbar />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/simulateur" component={Simulator} />
            <Route path="/loans/:type" component={Loans} />
            <Route path="/mentions-legales"           component={MentionsLegales}         />
            <Route path="/politique-confidentialite"  component={PolitiqueConfidentialite} />
            <Route path="/comment-ca-marche" component={HowItWorks} />
            <Route path="/cookies" component={CookiesPage} />

            <Route component={NotFound} />
          </Switch>

            <CookieBanner />
            <WhatsAppButton />
        </main>
        <Footer />
      </CookieProvider>
    </div>
  );
}

function App() {
  return (
      <TooltipProvider>
        <I18nProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </I18nProvider>
      </TooltipProvider>
  );
}

export default App;
