import { ShieldCheck, Zap, HeartHandshake, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"

const ITEM_ICONS   = [Zap, ShieldCheck, HeartHandshake, TrendingUp]
const ITEM_COLORS  = ["#f59e0b", "#16a34a", "#8b5cf6", "#0ea5e9"]
const ITEM_BGS     = ["#fffbeb", "#f0fdf4", "#f5f3ff", "#f0f9ff"]

export default function WhyChooseUs() {
  const { t } = useI18n()
  const s = t.whyChooseUs

  return (
    <section className="py-10 bg-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.035] blur-3xl rounded-full"
          style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-4">
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />{s.badge}<span className="w-5 h-0.5 bg-green-500 rounded-full" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {s.title}{" "}
            <span style={{ background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {s.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{s.subtitle}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {s.items.map((item, i) => {
            const Icon  = ITEM_ICONS[i]
            const color = ITEM_COLORS[i]
            const bg    = ITEM_BGS[i]
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-gray-100 bg-white overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent flex flex-col"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>

                {/* Barre colorée top */}
                <div className="h-1 w-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />

                <div className="p-7 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ background: bg }}>
                    <Icon className="w-6 h-6 transition-colors duration-300" style={{ color }} />
                  </div>

                  <div className="mb-5">
                    <div className="text-3xl font-extrabold leading-none" style={{ color }}>
                      {item.stat}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">
                      {item.statLabel}
                    </div>
                  </div>

                  <div className="h-px w-full mb-5 transition-all duration-300"
                    style={{ background: `linear-gradient(90deg, ${color}33, transparent)` }} />

                  <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{item.desc}</p>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: bg, mixBlendMode: "multiply" }} />
              </motion.div>
            )
          })}
        </div>

        {/* Bande métriques */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 rounded-2xl border border-gray-100 bg-gray-50 px-8 py-6 flex flex-wrap items-center justify-between gap-6">
          {s.metrics.map(({ value, label }) => (
            <div key={label} className="text-center flex-1 min-w-[100px]">
              <div className="text-2xl font-extrabold" style={{
                background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{value}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}