import { motion } from "framer-motion"
import { Link } from "wouter"
import { ArrowRight, Home, Calculator, Phone, SearchX } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function NotFound() {
  const { t, routes } = useI18n();
  const s = t.notFound

  const QUICK_LINKS = [
    { icon: Home,       color: "#16a34a", bg: "#f0fdf4", label: t.nav.home,     href: routes.home      },
    { icon: Calculator, color: "#3b82f6", bg: "#eff6ff", label: t.common.simulate, href: routes.simulator },
    { icon: Phone,      color: "#8b5cf6", bg: "#f5f3ff", label: t.contact.badge, href: routes.contact   },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Fond décoratif */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-[0.05] blur-3xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
      />
      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#16a34a 1px, transparent 1px), linear-gradient(90deg, #16a34a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-2xl w-full text-center">

        {/* Icône */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <div
            className="w-24 h-24 rounded-3xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              border: "2px solid #bbf7d0",
              boxShadow: "0 8px 32px rgba(22,163,74,0.12)",
            }}
          >
            <SearchX className="w-12 h-12 text-green-600" />
          </div>
        </motion.div>

        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div
            className="text-8xl md:text-9xl font-extrabold leading-none mb-4 text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #16a34a 0%, #4ade80 50%, #15803d 100%)" }}
          >
            404
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            {s.title}
          </h1>

          <p className="text-gray-500 leading-relaxed max-w-md mx-auto mb-10">
            {s.description}
          </p>
        </motion.div>

        {/* Liens rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
        >
          {QUICK_LINKS.map(({ icon: Icon, color, bg, label, href }, i) => (
            <Link
              key={i}
              href={href}
              className="group flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ background: bg }}
              >
                <Icon className="w-4.5 h-4.5" style={{ color }} />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {label}
              </span>
              <ArrowRight
                className="w-3.5 h-3.5 text-gray-300 ml-auto group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all"
              />
            </Link>
          ))}
        </motion.div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href={routes.simulator}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              boxShadow: "0 8px 28px rgba(22,163,74,0.40)",
            }}
          >
            {t.howItWorks.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="text-xs text-gray-400 mt-4">
            {t.howItWorks.ctaSub}
          </p>
        </motion.div>

      </div>
    </div>
  )
}
