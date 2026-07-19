import { Link } from "wouter"
import { motion } from "framer-motion"
import { ArrowRight, Users, Zap, HeartHandshake, ShieldCheck } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const PILLAR_ICONS = [Zap, ShieldCheck, HeartHandshake, Users]
const PILLAR_COLORS = ["#f59e0b", "#16a34a", "#8b5cf6", "#0ea5e9"]
const PILLAR_BGS    = ["#fffbeb", "#f0fdf4", "#f5f3ff", "#f0f9ff"]

const AVATAR_IDS = [
  "1568602846736-460fe4bbb653",
  "1607746882042-944635dfe10e",
  "1472099645785-5658abf4ff4e",
  "1438761681033-6461ffad8d80",
]

export default function MissionSection() {
  const { t, routes } = useI18n()
  const s = t.mission

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── IMAGE ── */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative">

            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl"
              style={{ background: "linear-gradient(135deg, #16a34a22 0%, #16a34a08 100%)" }} />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2000&auto=format&fit=crop"
                alt="Conseiller FabFinance"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />

              {/* Badge clients */}
              <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3.5 shadow-xl flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {AVATAR_IDS.map((id, i) => (
                    <img key={i}
                      src={`https://images.unsplash.com/photo-${id}?w=40&h=40&fit=crop&crop=face`}
                      className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="" />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-gray-900">{s.stats.clients}</div>
                  <div className="text-xs text-gray-500">{s.stats.clientsLabel}</div>
                </div>
              </motion.div>

              {/* Badge note */}
              <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.55, duration: 0.5 }}
                className="absolute top-6 right-6 bg-white rounded-2xl px-4 py-3 shadow-xl text-center">
                <div className="text-2xl font-extrabold text-gray-900">
                  {s.stats.rating}<span className="text-green-500">/5</span>
                </div>
                <div className="flex justify-center gap-0.5 my-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <div className="text-[11px] text-gray-400">{s.stats.ratingLabel}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── TEXTE ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>

            <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-5">
              <span className="w-5 h-0.5 bg-green-500 rounded-full" />{s.badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              {s.title}{" "}
              <span style={{ background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {s.titleHighlight}
              </span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-4">{s.text1}</p>
            <p className="text-gray-500 leading-relaxed mb-8">{s.text2}</p>

            {/* Piliers */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {s.pillars.map((pillar, i) => {
                const Icon  = PILLAR_ICONS[i]
                const color = PILLAR_COLORS[i]
                const bg    = PILLAR_BGS[i]
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors"
                    style={{ background: bg }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5"
                      style={{ background: color + "22" }}>
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div className="text-sm font-bold text-gray-900 mb-1">{pillar.title}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{pillar.text}</div>
                  </motion.div>
                )
              })}
            </div>

            <Link href={routes.about}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)", boxShadow: "0 6px 20px rgba(22,163,74,0.35)" }}>
              {s.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}