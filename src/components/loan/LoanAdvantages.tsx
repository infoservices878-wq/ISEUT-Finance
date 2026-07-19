import { CheckCircle2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"

interface Props {
  advantages: string[]
}

export default function LoanAdvantages({ advantages }: Props) {
  const { t } = useI18n();
  const s = t.loanAdvantages
  const items = [...advantages, ...s.extra]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 relative bg-white rounded-3xl border border-gray-100 overflow-hidden"
      style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
    >
      {/* Halo décoratif */}
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.05] blur-3xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)" }}
      />

      <div className="relative z-10 p-8 md:p-10">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}
          >
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">{s.title}</h2>
            <p className="text-xs text-gray-400 mt-0.5">{s.subtitle}</p>
          </div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {items.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="group flex items-center gap-3.5 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-green-200 hover:shadow-md transition-all duration-200 cursor-default"
            >
              {/* Icône check */}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                style={{ background: "#f0fdf4" }}
              >
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </div>

              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {adv}
              </span>

              {/* Point décoratif droit */}
              <div
                className="ml-auto w-1.5 h-1.5 rounded-full bg-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
              />
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <div
          className="mt-8 rounded-2xl px-6 py-4 flex flex-wrap items-center gap-4"
          style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)", border: "1px solid #bbf7d0" }}
        >
          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
          <p className="text-sm text-green-800 font-medium">
            {s.footerPrefix}{" "}
            <span className="font-bold">{t.heroSimulator.card.nofees}</span>
            {s.footerSuffix}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
