// ─────────────────────────────────────────────
// Ce fichier est un pont de compatibilité.
// La source de vérité est dans src/lib/i18n/
// ─────────────────────────────────────────────

export {
  translations,
  LANGUAGES,
  ROUTES,
} from "./i18n/index"

export type { Language, Translation } from "./i18n/index"

// Alias pour compatibilité avec l'ancien import "Translations"
export type { Translation as Translations } from "./i18n/index"