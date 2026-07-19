import { Link } from "wouter"
import { CreditCard, Car, GraduationCap, ShoppingCart, Briefcase, RefreshCw, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"

interface Props {
  current?: string
}

const LOAN_META = [
  { type: "personnel",     icon: CreditCard,    color: "#3b82f6", bg: "#eff6ff" },
  { type: "auto",          icon: Car,           color: "#16a34a", bg: "#f0fdf4" },
  { type: "etudiant",      icon: GraduationCap, color: "#0ea5e9", bg: "#f0f9ff" },
  { type: "conso",         icon: ShoppingCart,  color: "#f59e0b", bg: "#fffbeb" },
  { type: "professionnel", icon: Briefcase,     color: "#8b5cf6", bg: "#f5f3ff" },
  { type: "rachat",        icon: RefreshCw,     color: "#ef4444", bg: "#fef2f2" },
]

export default function LoanOtherLoans({ current }: Props) {
  const { t, routes } = useI18n()
  const s = t.loanOtherLoans
  const others = LOAN_META.filter(l => l.type !== current)

  return (
    <section className="py-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center mb-10"
      >
        <span className="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-green-500 rounded-full" />
          {t.footer.links.loans}
          <span className="w-4 h-0.5 bg-green-500 rounded-full" />
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          {s.sectionTitle}
        </h2>
      </motion.div>

      {/* Grille */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {others.map(({ type, icon: Icon, color, bg }, i) => (
          <motion.div
            key={type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            {/* Lien préfixé avec la langue active */}
            <Link href={`${routes.loans}/${type}`}>
              <div
                className="group relative bg-white rounded-2xl border border-gray-100 p-5 flex flex-col items-center text-center h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer overflow-hidden"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                {/* Icône */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bg }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>

                {/* Titre traduit via t.nav.loanTypes */}
                <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug">
                  {(t.nav.loanTypes as any)[type]}
                </h3>

                {/* Description traduite via t.loanOtherLoans */}
                <p className="text-xs text-gray-400 leading-relaxed flex-grow mb-4">
                  {(s.descriptions as any)[type]}
                </p>

                {/* Lien traduit */}
                <div
                  className="flex items-center gap-1 text-xs font-bold transition-all duration-200"
                  style={{ color }}
                >
                  {t.common.learnMore}
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>

                {/* Barre colorée bas au hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
