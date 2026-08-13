import { Route, Switch } from "wouter"
import { I18nProvider }       from "@/lib/i18n-context"
import { CookieProvider }     from "@/components/CookieContext"
import { TooltipProvider } from "@/components/ui/tooltip";


import ScrollToTop from "@/components/ScrollToTop"
import { Toaster } from "@/components/ui/toaster";

// Layout
import { Navbar }        from "./components/layout/Navbar"
import { Footer }        from "./components/layout/Footer"
import WhatsAppButton    from "@/components/WhatsAppButton"
import CookieBanner      from "@/components/CookieBanner"

import { lazy, Suspense } from "react"

// Pages (chargées à la demande)
const Home                     = lazy(() => import("@/pages/Home"))
const About                    = lazy(() => import("@/pages/About"))
const Contact                  = lazy(() => import("@/pages/Contact"))
const Simulator                = lazy(() => import("@/pages/Simulator"))
const HowItWorks               = lazy(() => import("@/pages/HowItWorks"))
const Loans                    = lazy(() => import("@/pages/Loans"))
const MentionsLegales          = lazy(() => import("@/pages/MentionsLegales"))
const PolitiqueConfidentialite = lazy(() => import("@/pages/PolitiqueConfidentialite"))
const CookiesPage              = lazy(() => import("@/pages/CookiesPage"))
const NotFound                 = lazy(() => import("@/pages/not-found"))



export default function App() {
  return (
    <TooltipProvider>
      <CookieProvider>
        <I18nProvider>
          <Toaster />
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
            <Suspense fallback={null}>
              <Switch>

                {/* ── Redirect racine → /fr ── */}
                <Route path="/">
                  {() => { window.location.replace("/fr"); return null }}
                </Route>

                {/* ════ HOME ════ */}
                <Route path="/fr"  component={Home} />
                <Route path="/en"  component={Home} />
                <Route path="/de"  component={Home} />
                <Route path="/es"  component={Home} />
                <Route path="/it"  component={Home} />
                <Route path="/pt"  component={Home} />
                <Route path="/nl"  component={Home} />

                {/* ════ SIMULATEUR ════ */}
                <Route path="/fr/simulateur"  component={Simulator} />
                <Route path="/en/simulator"   component={Simulator} />
                <Route path="/de/simulator"   component={Simulator} />
                <Route path="/es/simulador"   component={Simulator} />
                <Route path="/it/simulatore"  component={Simulator} />
                <Route path="/pt/simulador"   component={Simulator} />
                <Route path="/nl/simulator"   component={Simulator} />
                {/* ════ PAGES D'INFORMATION ════ */}

                {/* ════ À PROPOS ════ */}
                <Route path="/fr/a-propos"        component={About} />
                <Route path="/en/about"           component={About} />
                <Route path="/de/ueber-uns"       component={About} />
                <Route path="/es/sobre-nosotros"  component={About} />
                <Route path="/it/chi-siamo"       component={About} />
                <Route path="/pt/sobre-nos"       component={About} />
                <Route path="/nl/over-ons"       component={About} />


                {/* ════ CONTACT ════ */}
                <Route path="/fr/contact"  component={Contact} />
                <Route path="/en/contact"  component={Contact} />
                <Route path="/de/kontakt"  component={Contact} />
                <Route path="/es/contacto" component={Contact} />
                <Route path="/it/contatti" component={Contact} />
                <Route path="/pt/contacto" component={Contact} />
                <Route path="/nl/contact" component={Contact} />

                {/* ════ COMMENT ÇA MARCHE ════ */}
                <Route path="/fr/comment-ca-marche"  component={HowItWorks} />
                <Route path="/en/how-it-works"       component={HowItWorks} />
                <Route path="/de/so-funktioniert-es" component={HowItWorks} />
                <Route path="/es/como-funciona"      component={HowItWorks} />
                <Route path="/it/come-funziona"      component={HowItWorks} />
                <Route path="/pt/como-funciona"      component={HowItWorks} />
                <Route path="/nl/hoe-het-werkt"      component={HowItWorks} />

                {/* ════ PAGES PRÊTS ════ */}
                <Route path="/fr/loans/:type"       component={Loans} />
                <Route path="/en/loans/:type"       component={Loans} />
                <Route path="/de/kredite/:type"     component={Loans} />
                <Route path="/es/prestamos/:type"   component={Loans} />
                <Route path="/it/prestiti/:type"    component={Loans} />
                <Route path="/pt/emprestimos/:type" component={Loans} />
                <Route path="/nl/leningen/:type"    component={Loans} />

                {/* ════ MENTIONS LÉGALES ════ */}
                <Route path="/fr/mentions-legales" component={MentionsLegales} />
                <Route path="/en/legal-notice"     component={MentionsLegales} />
                <Route path="/de/impressum"        component={MentionsLegales} />
                <Route path="/es/aviso-legal"      component={MentionsLegales} />
                <Route path="/it/note-legali"      component={MentionsLegales} />
                <Route path="/pt/aviso-legal"      component={MentionsLegales} />
                <Route path="/nl/wettelijke-vermeldingen" component={MentionsLegales} />

                {/* ════ POLITIQUE CONFIDENTIALITÉ ════ */}
                <Route path="/fr/politique-confidentialite" component={PolitiqueConfidentialite} />
                <Route path="/en/privacy-policy"            component={PolitiqueConfidentialite} />
                <Route path="/de/datenschutz"               component={PolitiqueConfidentialite} />
                <Route path="/es/politica-privacidad"       component={PolitiqueConfidentialite} />
                <Route path="/it/privacy"                   component={PolitiqueConfidentialite} />
                <Route path="/pt/politica-privacidade"      component={PolitiqueConfidentialite} />
                <Route path="/nl/privacybeleid"             component={PolitiqueConfidentialite} />

                {/* ════ COOKIES ════ */}
                <Route path="/fr/cookies" component={CookiesPage} />
                <Route path="/en/cookies" component={CookiesPage} />
                <Route path="/de/cookies" component={CookiesPage} />
                <Route path="/es/cookies" component={CookiesPage} />
                <Route path="/it/cookies" component={CookiesPage} />
                <Route path="/pt/cookies" component={CookiesPage} />
                <Route path="/nl/cookies" component={CookiesPage} />

                {/* ════ 404 ════ */}
                <Route component={NotFound} />

              </Switch>
            </Suspense>
            </main>

            <Footer />
            <WhatsAppButton />
            <CookieBanner />
          </div>
        </I18nProvider>
      </CookieProvider>
    </TooltipProvider>
  )
}