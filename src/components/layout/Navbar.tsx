import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n-context";
import {
  Menu, X, ChevronDown, Landmark,
  User, Briefcase, ShoppingCart, GraduationCap, Car, RefreshCw,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOAN_IDS = [
  { id: "personnel",     icon: User,          color: "text-blue-500",   bg: "bg-blue-50"   },
  { id: "professionnel", icon: Briefcase,     color: "text-violet-500", bg: "bg-violet-50" },
  { id: "conso",         icon: ShoppingCart,  color: "text-orange-500", bg: "bg-orange-50" },
  { id: "etudiant",      icon: GraduationCap, color: "text-sky-500",    bg: "bg-sky-50"    },
  { id: "auto",          icon: Car,           color: "text-emerald-500",bg: "bg-emerald-50"},
  { id: "rachat",        icon: RefreshCw,     color: "text-rose-500",   bg: "bg-rose-50"   },
];

const LANGUAGES = [
  { code: "fr", label: "Français",  flag: "🇫🇷" },
  { code: "en", label: "English",   flag: "🇬🇧" },
  { code: "de", label: "Deutsch",   flag: "🇩🇪" },
  ,
];

export function Navbar() {
  const [location] = useLocation();
  const { lang, t, routes, switchLang } = useI18n();

  const [scrolled,        setScrolled]    = useState(false);
  const [mobileOpen,      setMobileOpen]  = useState(false);
  const [loansOpen,       setLoansOpen]   = useState(false);
  const [langOpen,        setLangOpen]    = useState(false);
  const [mobileLoansOpen, setMobileLoans] = useState(false);

  const langRef  = useRef<HTMLDivElement>(null);
  const loansRef = useRef<HTMLDivElement>(null);

  const activeLang = LANGUAGES.find(l => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current  && !langRef.current.contains(e.target  as Node)) setLangOpen(false);
      if (loansRef.current && !loansRef.current.contains(e.target as Node)) setLoansOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMobile = () => { setMobileOpen(false); window.scrollTo({ top: 0 }); };
  const isActive    = (path: string) => location === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-2"
          : "bg-white backdrop-blur-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">

        {/* ── LOGO ── */}
        <Link href={routes.home} className="flex items-center gap-2.5 group flex-shrink-0">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}
          >
            <Landmark className="w-4.5 h-4.5" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-gray-900">
            Fab<span className="text-green-600">Finance</span>
          </span>
        </Link>

        {/* ── DESKTOP LINKS ── */}
        <div className="hidden lg:flex items-center gap-1">

          <NavLink href={routes.home} active={isActive(routes.home)}>
            {t.nav.home}
          </NavLink>

          {/* Loans mega-dropdown */}
          <div ref={loansRef} className="relative">
            <button
              onMouseEnter={() => setLoansOpen(true)}
              onMouseLeave={() => setLoansOpen(false)}
              onClick={() => setLoansOpen(v => !v)}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                loansOpen ? "text-green-600 bg-green-50" : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              {t.nav.loans}
              <motion.span animate={{ rotate: loansOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>

            <AnimatePresence>
              {loansOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  onMouseEnter={() => setLoansOpen(true)}
                  onMouseLeave={() => setLoansOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-2"
                  style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
                >
                  {LOAN_IDS.map(loan => {
                    const Icon = loan.icon;
                    return (
                      <Link
                        key={loan.id}
                        href={`${routes.loans}/${loan.id}`}
                        onClick={() => setLoansOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${loan.bg}`}>
                          <Icon className={`w-4 h-4 ${loan.color}`} />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover/item:text-gray-900">
                          {(t.nav.loanTypes as any)[loan.id]}
                        </span>
                      </Link>
                    );
                  })}

                  {/* Footer dropdown */}
                  <div className="col-span-2 mt-1 pt-3 border-t border-gray-100">
                    <Link
                      href={routes.simulator}
                      onClick={() => setLoansOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group/sim"
                    >
                      <div>
                        <div className="text-sm font-semibold text-green-700">{t.common.simulate}</div>
                        <div className="text-xs text-green-600/80">{t.common.noCommit}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-green-600 group-hover/sim:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href={routes.about}   active={isActive(routes.about)}>
            {t.nav.about}
          </NavLink>
          <NavLink href={routes.contact} active={isActive(routes.contact)}>
            {t.nav.contact}
          </NavLink>
          <NavLink href={routes.howItWorks} active={isActive(routes.howItWorks)}>
            {t.nav.comment}
          </NavLink>
        </div>

        {/* ── RIGHT SIDE ── */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Language picker */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <span className="text-base leading-none">{activeLang.flag}</span>
              <span className="text-xs font-semibold uppercase tracking-wide">{activeLang.code}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { switchLang(l.code as any); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        lang === l.code
                          ? "bg-green-50 text-green-700 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <Link
            href={routes.simulator}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              boxShadow: "0 4px 14px rgba(22,163,74,0.35)",
            }}
          >
            {t.hero.cta1}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── MOBILE RIGHT ── */}
        <div className="lg:hidden flex items-center gap-1">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100"
            >
              <span className="text-lg leading-none">{activeLang.flag}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border z-50 overflow-hidden"
                >
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { switchLang(l.code as any); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${
                        lang === l.code ? "bg-green-50 text-green-700 font-semibold" : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setMobileOpen(v => !v)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen
                ? <motion.span key="x"   initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}}  transition={{duration:0.15}}><X    className="w-5 h-5"/></motion.span>
                : <motion.span key="men" initial={{rotate:90,opacity:0}}  animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}} transition={{duration:0.15}}><Menu className="w-5 h-5"/></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-5 flex flex-col gap-1">

              {[
                { href: routes.home,       label: t.nav.home       },
                { href: routes.about,      label: t.nav.about      },
                { href: routes.contact,    label: t.nav.contact    },
                { href: routes.howItWorks, label: t.nav.comment    },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive(href) ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* Loans accordion */}
              <div className="rounded-xl overflow-hidden border border-gray-100 mt-1">
                <button
                  onClick={() => setMobileLoans(v => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-gray-700 bg-gray-50"
                >
                  {t.nav.loans}
                  <motion.span animate={{ rotate: mobileLoansOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 opacity-60" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileLoansOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-2 flex flex-col gap-1">
                        {LOAN_IDS.map(loan => {
                          const Icon = loan.icon;
                          return (
                            <Link
                              key={loan.id}
                              href={`${routes.loans}/${loan.id}`}
                              onClick={closeMobile}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50"
                            >
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${loan.bg}`}>
                                <Icon className={`w-3.5 h-3.5 ${loan.color}`} />
                              </div>
                              <span className="text-sm font-medium text-gray-700">
                                {(t.nav.loanTypes as any)[loan.id]}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile CTA */}
              <Link
                href={routes.simulator}
                onClick={closeMobile}
                className="mt-3 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-base transition-all"
                style={{
                  background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  boxShadow: "0 4px 14px rgba(22,163,74,0.35)",
                }}
              >
                {t.hero.cta1}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
        active ? "text-green-700 bg-green-50" : "text-gray-600 hover:text-green-700 hover:bg-gray-50"
      }`}
    >
      {children}
      {active && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-500"
        />
      )}
    </Link>
  );
}