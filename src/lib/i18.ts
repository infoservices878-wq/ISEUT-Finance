// Fragment à intégrer dans ton Navbar.tsx existant
// Remplace le sélecteur de langue actuel par ce bloc

// 1. Importer useI18n et LANGUAGES
import { useI18n } from "@/lib/i18n-context"
import { LANGUAGES } from "@/lib/translations"

// 2. Dans le composant Navbar, remplace :
//    const [lang, setLang] = useState(...)
//    par :
const { lang, switchLang, routes, t } = useI18n()

// 3. Remplace tous les liens href hardcodés par les routes traduites :
//    href="/"              → href={routes.home}
//    href="/simulateur"    → href={routes.simulator}
//    href="/a-propos"      → href={routes.about}
//    href="/contact"       → href={routes.contact}
//    href="/comment-ca-marche" → href={routes.howItWorks}
//    href="/loans/..."     → href={`${routes.loans}/${type}`}

// 4. Le sélecteur de langue :
// Remplace l'onClick du sélecteur de langue par :
//    onClick={() => switchLang(code as Language)}
// Au lieu de :
//    onClick={() => setLang(code)}

// ─────────────────────────────────────────────
// SNIPPET DU SÉLECTEUR DE LANGUE (à remplacer dans Navbar)
// ─────────────────────────────────────────────

/*
{LANGUAGES.map(({ code, label, flag }) => (
  <button
    key={code}
    onClick={() => switchLang(code)}
    className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-colors ${
      lang === code
        ? "bg-green-50 text-green-700 font-semibold"
        : "text-gray-600 hover:bg-gray-50"
    }`}
  >
    <span>{flag}</span>
    <span>{label}</span>
    {lang === code && (
      <motion.div layoutId="lang-active" className="ml-auto w-1.5 h-1.5 rounded-full bg-green-500" />
    )}
  </button>
))}
*/

// ─────────────────────────────────────────────
// LABELS NAV TRADUITS
// ─────────────────────────────────────────────

/*
// Remplace les labels hardcodés par :
t.nav.home        → "Accueil" / "Home" / "Startseite" ...
t.nav.loans       → "Nos Prêts" / "Our Loans" ...
t.nav.about       → "À Propos" / "About" ...
t.nav.contact     → "Contact" ...
t.nav.comment     → "Comment ça marche" / "How it works" ...
t.nav.simulator   → "Simulateur" / "Simulator" ...
t.nav.loanTypes.personnel    → "Prêt Personnel" / "Personal Loan" ...
t.nav.loanTypes.auto         → etc.
*/

export {} // ce fichier est un guide d'intégration, pas un composant