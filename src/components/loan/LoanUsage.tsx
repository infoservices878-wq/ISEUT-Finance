import { motion } from "framer-motion"
import { ArrowRight, Lightbulb } from "lucide-react"
import { Link } from "wouter"
import { useI18n } from "@/lib/i18n-context"

interface UsageItem {
  title: string
  desc:  string
  image: string
}

interface Props {
  usage?: UsageItem[]
}

export default function LoanUsage({ usage = [] }: Props) {
  const { lang, t, routes, switchLang } = useI18n();
  const s = t.loanUsage

  if (!usage.length) return null

  return (
    <section className="mt-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="flex items-center gap-3 mb-8"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}
        >
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-extrabold text-gray-900">
            {s.title}
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            {s.subtitle}
          </p>
        </div>
      </motion.div>

      {/* Grille de cartes */}
      <div className="grid md:grid-cols-3 gap-5">
        {usage.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.09 }}
            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-100 cursor-default"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay dégradé sur image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Numéro */}
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xs font-extrabold text-green-700 shadow-sm">
                {i + 1}
              </div>
            </div>

            {/* Contenu */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-bold text-gray-900 mb-2 text-base">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                {p.desc}
              </p>
            </div>

            {/* Barre verte bas */}
            <div
              className="h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            />
          </motion.div>
        ))}
      </div>

      {/* CTA bas */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 text-center"
      >
        <Link
          href={routes.simulator}
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
            boxShadow: "0 6px 20px rgba(22,163,74,0.35)",
          }}
        >
          {s.cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </motion.div>
    </section>
  )
}
