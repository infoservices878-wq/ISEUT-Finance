import { Link } from "wouter"
import { useI18n } from "@/lib/i18n-context"
import {
  Landmark, Facebook, Twitter, Linkedin, Instagram,
  ArrowRight, ShieldCheck, Phone, Mail, MapPin,
} from "lucide-react"

const SOCIAL = [
  { icon: Facebook,  href: "#", label: "Facebook"  },
  { icon: Twitter,   href: "#", label: "Twitter"   },
  { icon: Linkedin,  href: "#", label: "LinkedIn"  },
  { icon: Instagram, href: "#", label: "Instagram" },
]


export function Footer() {
  const { t, routes } = useI18n()
  const year = new Date().getFullYear()

  const LEGAL_LINKS = [
  { label: t.footer.legalLinks.mentions,   href: routes.legal   },
  { label: t.footer.legalLinks.privacy,    href: routes.privacy },
  { label: t.footer.legalLinks.howItWorks, href: routes.howItWorks },
  { label: t.footer.legalLinks.cookies,    href: routes.cookies },
]

  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">

      {/* ── Ligne décorative haut ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

      {/* ── Halo vert décoratif ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-[0.06] blur-3xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
      />

      {/* ── CTA strip ── */}
      <div
        className="relative border-b border-gray-800/60"
        style={{ background: "linear-gradient(135deg, #0f2a1a 0%, #0a1a10 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl">{t.footer.ctaTitle}</p>
            <p className="text-gray-400 text-sm mt-1">{t.footer.ctaSub}</p>
          </div>
          <Link
            href={routes.simulator}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              boxShadow: "0 6px 20px rgba(22,163,74,0.40)",
            }}
          >
            {t.footer.ctaButton}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ── Corps principal ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            <Link href={routes.home} className="inline-flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}
              >
                <Landmark className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Fab<span className="text-green-500">Finance</span>
              </span>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>

            {/* Contact rapide */}
            <div className="space-y-2.5">
              {[
                { icon: Phone,  text: "+33 753 959 516" },
                { icon: Mail,   text: "contact@fab-financeaide.com" },
                { icon: MapPin, text: "67140 Barr, France" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-gray-500">
                  <Icon className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Réseaux */}
            <div className="flex gap-2.5 pt-1">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nos prêts */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              {t.footer.links.loans}
            </h4>
            <ul className="space-y-3">
              {[
                { href: `${routes.loans}/personnel`,     label: t.nav.loanTypes.personnel    },
                { href: `${routes.loans}/professionnel`, label: t.nav.loanTypes.professionnel },
                { href: `${routes.loans}/conso`,         label: t.nav.loanTypes.conso        },
                { href: `${routes.loans}/etudiant`,      label: t.nav.loanTypes.etudiant     },
                { href: `${routes.loans}/auto`,          label: t.nav.loanTypes.auto         },
                { href: `${routes.loans}/rachat`,        label: t.nav.loanTypes.rachat       },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-green-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-green-500 transition-colors duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              {t.footer.links.company}
            </h4>
            <ul className="space-y-3">
              {[
                { href: routes.about,     label: t.nav.about   },
                { href: routes.contact,   label: t.nav.contact },
                { href: routes.simulator, label: t.nav.simulator },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-green-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-green-500 transition-colors duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal + Certifications */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              {t.footer.links.legal}
            </h4>
            <ul className="space-y-3 mb-7">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-green-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-green-500 transition-colors duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
          </ul>
            {/* Certifications */}
            <div className="space-y-2">
              {["ORIAS", "ACPR", "RGPD"].map(cert => (
                <div
                  key={cert}
                  className="inline-flex items-center gap-1.5 bg-gray-800/60 border border-gray-700/60 px-3 py-1.5 rounded-lg mr-2 mb-1"
                >
                  <ShieldCheck className="w-3 h-3 text-green-500" />
                  <span className="text-xs font-semibold text-gray-400">{cert}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bas de page ── */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-600 max-w-2xl leading-relaxed text-center md:text-left">
            ⚠️ {t.footer.legal}
          </p>

          <p className="text-xs text-gray-700 flex-shrink-0">
            © {year} FabFinance · {t.footer.rights}
          </p>

        </div>
      </div>
    </footer>
  )
}