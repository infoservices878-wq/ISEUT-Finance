import { Link } from "wouter"
import { ArrowRight, ShieldCheck, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"

export default function FinalCTA() {
  const { t, routes } = useI18n()
  const s = t.finalCta

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2400&auto=format&fit=crop"
          alt="" className="w-full h-full object-cover object-center" style={{ filter: "saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gray-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-20 blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 mb-7">
          <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">{s.badge}</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          {s.title}{" "}
          <span style={{ background: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {s.titleHighlight}
          </span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
          {s.subtitle1}{" "}
          <span className="text-white font-semibold">{s.subtitle2}</span>{" "}
          {s.subtitle3}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href={routes.simulator}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:-translate-y-1"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)", boxShadow: "0 8px 32px rgba(22,163,74,0.50)" }}>
            {s.cta1}
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link href={routes.contact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base border border-white/20 bg-white/8 backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-200">
            {s.cta2}
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          {[
            { icon: Clock,       label: s.badges.speed   },
            { icon: ShieldCheck, label: s.badges.secure  },
            { icon: Users,       label: s.badges.clients },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-green-400 flex-shrink-0" /><span>{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 text-xs text-gray-600 max-w-lg mx-auto leading-relaxed">
          {s.legal}
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
    </section>
  )
}