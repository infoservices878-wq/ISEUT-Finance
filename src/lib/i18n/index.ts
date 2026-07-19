// ─────────────────────────────────────────────
// i18n/index.ts — Point d'entrée unique
// ─────────────────────────────────────────────

import { fr } from "./fr"
import { en } from "./en"
import { de } from "./de"
import { es } from "./es"
import { it } from "./it"
import { pt } from "./pt"
import { nl } from "./nl"

export { fr, en, de, es, it, pt, nl }
export type { Translation } from "./fr"

export type Language = "fr" | "en" | "de" | "es" | "it" | "pt" | "nl"

export const translations: Record<Language, typeof fr> = {
  fr,
  en,
  de,
  es,
  it,
  pt,
  nl,
}

export const LANGUAGES: { code: Language; label: string; flag: string; urlPrefix: string }[] = [
  { code: "fr", label: "Français",  flag: "🇫🇷", urlPrefix: "fr" },
  { code: "en", label: "English",   flag: "🇬🇧", urlPrefix: "en" },
  { code: "de", label: "Deutsch",   flag: "🇩🇪", urlPrefix: "de" },
  { code: "es", label: "Español",   flag: "🇪🇸", urlPrefix: "es" },
  { code: "it", label: "Italiano",  flag: "🇮🇹", urlPrefix: "it" },
  { code: "pt", label: "Português", flag: "🇵🇹", urlPrefix: "pt" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱", urlPrefix: "nl" },
]

export const ROUTES: Record<Language, Record<string, string>> = {
  fr: {
    home: "/fr",
    simulator: "/fr/simulateur",
    about: "/fr/a-propos",
    contact: "/fr/contact",
    howItWorks: "/fr/comment-ca-marche",
    loans: "/fr/loans",
    legal: "/fr/mentions-legales",
    privacy: "/fr/politique-confidentialite",
    cookies: "/fr/cookies",
  },
  en: {
    home: "/en",
    simulator: "/en/simulator",
    about: "/en/about",
    contact: "/en/contact",
    howItWorks: "/en/how-it-works",
    loans: "/en/loans",
    legal: "/en/legal-notice",
    privacy: "/en/privacy-policy",
    cookies: "/en/cookies",
  },
  de: {
    home: "/de",
    simulator: "/de/simulator",
    about: "/de/ueber-uns",
    contact: "/de/kontakt",
    howItWorks: "/de/so-funktioniert-es",
    loans: "/de/kredite",
    legal: "/de/impressum",
    privacy: "/de/datenschutz",
    cookies: "/de/cookies",
  },
  es: {
    home: "/es",
    simulator: "/es/simulador",
    about: "/es/sobre-nosotros",
    contact: "/es/contacto",
    howItWorks: "/es/como-funciona",
    loans: "/es/prestamos",
    legal: "/es/aviso-legal",
    privacy: "/es/politica-privacidad",
    cookies: "/es/cookies",
  },
  it: {
    home: "/it",
    simulator: "/it/simulatore",
    about: "/it/chi-siamo",
    contact: "/it/contatti",
    howItWorks: "/it/come-funziona",
    loans: "/it/prestiti",
    legal: "/it/note-legali",
    privacy: "/it/privacy",
    cookies: "/it/cookies",
  },
  pt: {
    home: "/pt",
    simulator: "/pt/simulador",
    about: "/pt/sobre-nos",
    contact: "/pt/contacto",
    howItWorks: "/pt/como-funciona",
    loans: "/pt/emprestimos",
    legal: "/pt/aviso-legal",
    privacy: "/pt/politica-privacidade",
    cookies: "/pt/cookies",
  },
  nl: {
    home:       "/nl",
    simulator:  "/nl/simulator",
    about:      "/nl/over-ons",
    contact:    "/nl/contact",
    howItWorks: "/nl/hoe-het-werkt",
    loans:      "/nl/leningen",
    legal:      "/nl/wettelijke-vermeldingen",
    privacy:    "/nl/privacybeleid",
    cookies:    "/nl/cookies",
  },
}