import { motion } from "framer-motion"
import { TrendingDown, TrendingUp, Clock, Percent, Receipt, BadgeCheck } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

interface Props {
  min:      string
  max:      string
  duration: string
  taeg:     string
  rateType: string
}

const ICONS = [TrendingDown, TrendingUp, Clock, Percent, BadgeCheck, Receipt]

const COLORS = [
  { color: "#16a34a", bg: "#f0fdf4" },
  { color: "#3b82f6", bg: "#eff6ff" },
  { color: "#f59e0b", bg: "#fffbeb" },
  { color: "#8b5cf6", bg: "#f5f3ff" },
  { color: "#0ea5e9", bg: "#f0f9ff" },
  { color: "#10b981", bg: "#ecfdf5" },
]

export default function LoanStats({ min, max, duration, taeg, rateType }: Props) {
  const { t } = useI18n();
  const s = t.loanStats

  const stats = [
    { label: t.hero.statsCard.minLabel,   value: min      },
    { label: t.hero.statsCard.maxLabel,   value: max      },
    { label: t.simulator.card.durationLabel, value: duration },
    { label: t.loanExample.rows.taegFixe, value: taeg     },
    { label: s.rateTypeLabel,             value: rateType },
    { label: s.feesLabel,                 value: s.feesValue },
  ]

  return (
    <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4">
      {stats.map((item, i) => {
        const Icon  = ICONS[i]
        const { color, bg } = COLORS[i]

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
          >
            {/* Icône */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ background: bg }}
            >
              <Icon className="w-5 h-5" style={{ color }} />
            </div>

            {/* Texte */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                {item.label}
              </span>
              <span
                className="text-lg font-extrabold"
                style={{ color }}
              >
                {item.value}
              </span>
            </div>

            {/* Bordure colorée gauche */}
            <div
              className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: color }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
