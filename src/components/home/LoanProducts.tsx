import { Link } from "wouter"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Wallet, Building2, CreditCard, GraduationCap, Car, RefreshCw, ArrowRight } from "lucide-react"
import { calculateLoan } from "@/utils/loanCalculator"
import { useI18n } from "@/lib/i18n-context"

const CREDIT_META = [
  { icon: Wallet,       loanId: "personnel",    exampleAmount: 10000, exampleDuration: 48, href: "personnel",    accent: "#3b82f6", accentBg: "#eff6ff" },
  { icon: Building2,    loanId: "professionnel",exampleAmount: 20000, exampleDuration: 60, href: "professionnel",accent: "#8b5cf6", accentBg: "#f5f3ff" },
  { icon: CreditCard,   loanId: "conso",        exampleAmount: 5000,  exampleDuration: 36, href: "conso",        accent: "#f59e0b", accentBg: "#fffbeb" },
  { icon: GraduationCap,loanId: "etudiant",     exampleAmount: 8000,  exampleDuration: 60, href: "etudiant",     accent: "#0ea5e9", accentBg: "#f0f9ff" },
  { icon: Car,          loanId: "auto",         exampleAmount: 15000, exampleDuration: 60, href: "auto",         accent: "#16a34a", accentBg: "#f0fdf4" },
  { icon: RefreshCw,    loanId: "rachat",       exampleAmount: 25000, exampleDuration: 84, href: "rachat",       accent: "#ef4444", accentBg: "#fef2f2" },
]

export default function LoanProducts() {
  const { t, routes } = useI18n()
  const s = t.loanProducts
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-10 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.05] blur-3xl"
          style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-4">
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />{s.badge}<span className="w-5 h-0.5 bg-green-500 rounded-full" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{s.title}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{s.subtitle}</p>
        </motion.div>

        {/* Grille */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CREDIT_META.map((credit, i) => {
            const Icon = credit.icon
            const { monthlyPayment } = calculateLoan(credit.exampleAmount, credit.exampleDuration, 0.045)
            const isHovered = hovered === i
            // titres et descriptions depuis les traductions
            const product = s.products[i]

            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <Link href={`${routes.loans}/${credit.href}`}>
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative overflow-hidden rounded-2xl border cursor-pointer h-full flex flex-col transition-all duration-300"
                    style={{
                      background:   isHovered ? credit.accentBg : "white",
                      borderColor:  isHovered ? credit.accent + "44" : "#f3f4f6",
                      boxShadow:    isHovered ? `0 20px 40px ${credit.accent}22` : "0 2px 12px rgba(0,0,0,0.05)",
                      transform:    isHovered ? "translateY(-6px)" : "translateY(0)",
                    }}
                  >
                    {/* Barre colorée haut */}
                    <div className="h-1 w-full transition-all duration-300"
                      style={{ background: `linear-gradient(90deg, ${credit.accent}, ${credit.accent}88)`, opacity: isHovered ? 1 : 0 }} />

                    <div className="p-5 flex flex-col flex-grow">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 mx-auto"
                        style={{ background: isHovered ? credit.accent : credit.accentBg }}>
                        <Icon className="w-5 h-5 transition-colors duration-300"
                          style={{ color: isHovered ? "white" : credit.accent }} />
                      </div>

                      <div className="flex-grow relative min-h-[90px]">
                        <AnimatePresence mode="wait" initial={false}>
                          {!isHovered && (
                            <motion.div key="normal" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}
                              className="absolute inset-0 flex flex-col">
                              <p className="text-sm font-bold text-gray-900 text-center mb-2">{product.title}</p>
                              <p className="text-xs text-gray-500 text-center leading-relaxed">{product.description}</p>
                            </motion.div>
                          )}
                          {isHovered && (
                            <motion.div key="sim" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}
                              className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <p className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                                style={{ color: credit.accent + "aa" }}>{s.example}</p>
                              <p className="text-xs text-gray-600 mb-3">
                                {credit.exampleAmount.toLocaleString("fr-FR")} €
                                <span className="text-gray-400"> · </span>
                                {credit.exampleDuration} {t.common.monthly}
                              </p>
                              <div className="text-3xl font-extrabold" style={{ color: credit.accent }}>
                                {monthlyPayment.toFixed(0)} €
                              </div>
                              <p className="text-[11px] text-gray-400 mt-1">{s.perMonth}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="mt-4 flex items-center justify-center gap-1 transition-all duration-200"
                        style={{ opacity: isHovered ? 1 : 0.4 }}>
                        <span className="text-xs font-semibold" style={{ color: credit.accent }}>{s.seeOffer}</span>
                        <ArrowRight className="w-3 h-3 transition-transform duration-200"
                          style={{ color: credit.accent, transform: isHovered ? "translateX(3px)" : "translateX(0)" }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-12">
          <Link href={routes.simulator}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)", boxShadow: "0 6px 20px rgba(22,163,74,0.35)" }}>
            {s.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}