import { useState, useMemo } from "react"
import { calculateLoan } from "@/utils/loanCalculator"
import { Link } from "wouter"
import { ArrowRight, Percent, Clock, ShieldCheck, TrendingDown, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"

export default function HeroSimulator() {
  const { t, routes } = useI18n()
  const s = t.heroSimulator

  const [amount,   setAmount]   = useState(10000)
  const [duration, setDuration] = useState(48)

  const { monthlyPayment, totalCost } = useMemo(() => {
    const result = calculateLoan(amount, duration, 0.03)
    return {
      ...result,
      totalCost: result.monthlyPayment * duration - amount,
    }
  }, [amount, duration])

  const amountPct   = ((amount   - 500) / (50000 - 500)) * 100
  const durationPct = ((duration - 6)   / (84    - 6))   * 100

  const PROJECTS = [
    { label: s.projects.travaux, emoji: "🏠" },
    { label: s.projects.auto,    emoji: "🚗" },
    { label: s.projects.etudes,  emoji: "🎓" },
    { label: s.projects.voyage,  emoji: "✈️" },
    { label: s.projects.mariage, emoji: "💍" },
    { label: s.projects.sante,   emoji: "🏥" },
  ]

  const STATS = [
    { value: s.stats.rate,   label: s.stats.rateLabel,   icon: TrendingDown },
    { value: s.stats.unlock, label: s.stats.unlockLabel, icon: Clock        },
    { value: s.stats.online, label: s.stats.onlineLabel, icon: ShieldCheck  },
  ]

  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)" }} />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl"
          style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#16a34a 1px, transparent 1px), linear-gradient(90deg, #16a34a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Colonne gauche ── */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>

            <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-5">
              <span className="w-6 h-0.5 bg-green-500 rounded-full" />
              {s.badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              {s.titleBefore}{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-green-600">{s.titleHighlight}</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                  <path d="M0 8 Q150 0 300 8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
                </svg>
              </span>
              <br />{s.titleAfter}
            </h2>

            <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">{s.subtitle}</p>

            {/* Tags projets */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {PROJECTS.map(p => (
                <span key={p.label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700 cursor-default transition-colors">
                  <span>{p.emoji}</span>{p.label}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-center p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <Icon className="w-4 h-4 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-extrabold text-gray-900">{value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Carte simulateur ── */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
            style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.10)" }}>

            {/* Header */}
            <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 text-lg">{s.card.title}</h3>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                {s.card.badge}
              </span>
            </div>

            <div className="p-8">

              {/* Slider montant */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-sm font-semibold text-gray-500">{s.card.amountLabel}</span>
                  <span className="text-2xl font-extrabold text-gray-900">
                    {amount.toLocaleString("fr-FR")}<span className="text-green-600"> €</span>
                  </span>
                </div>
                <div className="relative h-2 rounded-full bg-gray-100">
                  <div className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
                    style={{ width: `${amountPct}%`, background: "linear-gradient(90deg, #16a34a, #22c55e)" }} />
                  <input type="range" min="500" max="50000" step="500" value={amount}
                    onChange={e => setAmount(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-green-500 shadow-md pointer-events-none transition-all duration-150"
                    style={{ left: `calc(${amountPct}% - 10px)` }} />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>500 €</span><span>50 000 €</span>
                </div>
              </div>

              {/* Slider durée */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-sm font-semibold text-gray-500">{s.card.durationLabel}</span>
                  <span className="text-2xl font-extrabold text-gray-900">
                    {duration}<span className="text-green-600"> {t.common.monthly}</span>
                  </span>
                </div>
                <div className="relative h-2 rounded-full bg-gray-100">
                  <div className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
                    style={{ width: `${durationPct}%`, background: "linear-gradient(90deg, #16a34a, #22c55e)" }} />
                  <input type="range" min="6" max="84" step="6" value={duration}
                    onChange={e => setDuration(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-green-500 shadow-md pointer-events-none transition-all duration-150"
                    style={{ left: `calc(${durationPct}% - 10px)` }} />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>6 {t.common.monthly}</span><span>84 {t.common.monthly}</span>
                </div>
              </div>

              {/* Résultat */}
              <div className="rounded-2xl p-6 mb-6"
                style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-400 text-xs mb-1">{s.card.monthlyLabel}</div>
                    <div className="text-3xl font-extrabold text-white">
                      {monthlyPayment.toFixed(2)}<span className="text-green-400 text-xl"> €</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1">{s.card.interestLabel}</div>
                    <div className="text-2xl font-bold text-gray-200">
                      {totalCost.toFixed(2)}<span className="text-gray-400 text-base"> €</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
                  <Percent className="w-3 h-3 text-green-400 flex-shrink-0" />
                  {s.card.rateNote}
                </div>
              </div>

              {/* Garanties */}
              <div className="flex gap-4 mb-6">
                {[s.card.nofees, s.card.instant].map(item => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-gray-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href={routes.simulator}
                className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)", boxShadow: "0 8px 24px rgba(22,163,74,0.40)" }}>
                {s.card.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <p className="text-[11px] text-gray-400 mt-3 text-center leading-relaxed">{s.card.legal}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}