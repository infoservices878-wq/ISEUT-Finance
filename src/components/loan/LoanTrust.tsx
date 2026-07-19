import { motion } from "framer-motion"
import { Star, Users, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react"
import { Link } from "wouter"
import { useI18n } from "@/lib/i18n-context"

const STAT_META = [
  { icon: Users,       value: "+200 000", color: "#4ade80" },
  { icon: Star,        value: "4.8 / 5",  color: "#fbbf24" },
  { icon: TrendingUp,  value: "48h",      color: "#60a5fa" },
  { icon: ShieldCheck, value: "100%",     color: "#a78bfa" },
]

const REVIEW_META = [
  { name: "Sophie M.", avatar: "1494790108377-be9c29b29330" },
  { name: "Lucas B.",  avatar: "1500648767791-00dcc994a43e" },
  { name: "Claire D.", avatar: "1438761681033-6461ffad8d80" },
]

export default function LoanTrust() {
  const { lang, t, routes, switchLang } = useI18n();
  const s = t.loanTrust
  const STATS   = s.stats.map((data, i) => ({ ...STAT_META[i], ...data }))
  const REVIEWS = s.reviews.map((text, i) => ({ ...REVIEW_META[i], text }))

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="mt-10 relative rounded-3xl overflow-hidden"
      style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.14)" }}
    >
      {/* Fond dark */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
      />
      {/* Halo vert */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-15 blur-3xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
      />

      <div className="relative z-10 p-8 md:p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-4 h-0.5 bg-green-500 rounded-full" />
            {s.eyebrow}
            <span className="w-4 h-0.5 bg-green-500 rounded-full" />
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            {s.title}
          </h2>
          <p className="text-gray-400 text-sm">
            {s.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {STATS.map(({ icon: Icon, value, label, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl p-5 text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Icon className="w-5 h-5 mx-auto mb-2" style={{ color }} />
              <div className="text-2xl font-extrabold text-white">{value}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Étoiles */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-white font-bold text-lg">4.8 / 5</p>
          <p className="text-gray-500 text-xs mt-0.5">{s.ratingSub}</p>
        </div>

        {/* Avis */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4 italic">
                "{r.text}"
              </p>
              <div className="flex items-center gap-2.5">
                <img
                  src={`https://images.unsplash.com/photo-${r.avatar}?w=40&h=40&fit=crop&crop=face`}
                  alt={r.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-green-500/30"
                />
                <span className="text-sm font-semibold text-white">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={routes.simulator}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              boxShadow: "0 6px 24px rgba(22,163,74,0.45)",
            }}
          >
            {s.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
