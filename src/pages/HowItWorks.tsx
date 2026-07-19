import { motion } from "framer-motion"
import { Link } from "wouter"
import {
  Calculator, ClipboardList, UserCheck, FileCheck2,
  PenLine, Banknote, ArrowRight, ShieldCheck, Clock,
  CheckCircle2, HelpCircle, Phone, Star, Zap, Lock, HeartHandshake,
} from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

// ─────────────────────────────────────────────
// DONNÉES NON TRADUISIBLES (icônes, couleurs, images, numéros)
// ─────────────────────────────────────────────

const STEP_META = [
  { number: "01", icon: Calculator,   color: "#16a34a", bg: "#f0fdf4" },
  { number: "02", icon: ClipboardList,color: "#3b82f6", bg: "#eff6ff" },
  { number: "03", icon: UserCheck,    color: "#8b5cf6", bg: "#f5f3ff" },
  { number: "04", icon: FileCheck2,   color: "#f59e0b", bg: "#fffbeb" },
  { number: "05", icon: PenLine,      color: "#0ea5e9", bg: "#f0f9ff" },
  { number: "06", icon: Banknote,     color: "#16a34a", bg: "#f0fdf4" },
]

const GUARANTEE_META = [
  { icon: Zap,            color: "#16a34a" },
  { icon: Lock,           color: "#3b82f6" },
  { icon: HeartHandshake, color: "#8b5cf6" },
  { icon: ShieldCheck,    color: "#f59e0b" },
]

const REVIEW_META = [
  { name: "Marie L.",  avatar: "1438761681033-6461ffad8d80" },
  { name: "Thomas R.", avatar: "1500648767791-00dcc994a43e" },
  { name: "Sophia K.", avatar: "1494790108377-be9c29b29330" },
]

// ─────────────────────────────────────────────
// COMPOSANT
// ─────────────────────────────────────────────

export default function HowItWorks() {
  const { t, routes } = useI18n();
  const s = t.howItWorks

  const STEPS = s.stepsList.map((data, i) => ({ ...STEP_META[i], ...data }))
  const GUARANTEES = s.guarantees.map((data, i) => ({ ...GUARANTEE_META[i], ...data }))
  const REVIEWS = s.reviews.items.map((text, i) => ({ ...REVIEW_META[i], text }))

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-gray-950 pt-24 pb-32 overflow-hidden">
        {/* Halo vert */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
        />
        {/* Grille décorative */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-bold uppercase tracking-widest">
                {s.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {s.hero.titleLine1}<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)" }}
              >
                {s.hero.titleLine2}
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {s.hero.subtitle}
            </p>

            {/* Stats hero */}
            <div className="flex flex-wrap justify-center gap-8">
              {s.hero.stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="text-2xl font-extrabold text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #4ade80, #16a34a)" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vague bas */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 72" fill="none" preserveAspectRatio="none" className="w-full h-[72px]">
            <path d="M0 72L480 32L960 56L1440 8V72H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── ÉTAPES ── */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-4 h-0.5 bg-green-500 rounded-full" />
            {s.steps}
            <span className="w-4 h-0.5 bg-green-500 rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {s.journey}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Contenu texte */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Numéro grand */}
                    <span
                      className="text-6xl font-extrabold leading-none opacity-10"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    {/* Icône */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: step.bg }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    {/* Badge durée */}
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ background: step.bg, color: step.color }}
                    >
                      <Clock className="w-3 h-3 inline mr-1" />
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed mb-5">
                    {step.desc}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((d, di) => (
                      <li key={di} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Carte visuelle */}
                <div className="flex-1 max-w-sm w-full">
                  <div
                    className="relative rounded-3xl overflow-hidden h-56"
                    style={{
                      background: step.bg,
                      border: `1px solid ${step.color}22`,
                      boxShadow: `0 8px 32px ${step.color}18`,
                    }}
                  >
                    {/* Fond avec icône géante */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <Icon className="w-48 h-48" style={{ color: step.color }} />
                    </div>

                    {/* Badge étape */}
                    <div className="absolute top-4 left-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-extrabold"
                        style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Contenu carte */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div
                        className="rounded-2xl px-4 py-3"
                        style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}
                      >
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                          {s.stepWord} {step.number}
                        </p>
                        <p className="text-sm font-extrabold text-gray-900">{step.title}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" style={{ color: step.color }} />
                          <span className="text-xs font-semibold" style={{ color: step.color }}>
                            {step.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Connecteur → suivant */}
                    {i < STEPS.length - 1 && (
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                          style={{ background: "white", border: `2px solid ${step.color}44` }}
                        >
                          <ArrowRight className="w-4 h-4 rotate-90" style={{ color: step.color }} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── GARANTIES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-4 h-0.5 bg-green-500 rounded-full" />
              {s.guarantee}
              <span className="w-4 h-0.5 bg-green-500 rounded-full" />
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {s.whyUs}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5">
            {GUARANTEES.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: color + "15" }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="font-extrabold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVIS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-4xl font-extrabold text-gray-900 mb-1">{s.reviews.ratingValue}</p>
            <p className="text-gray-400 text-sm">{s.reviews.ratingSub}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {REVIEWS.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-5 text-left border border-gray-100"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, st) => (
                    <Star key={st} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic mb-4">"{r.text}"</p>
                <div className="flex items-center gap-2.5">
                  <img
                    src={`https://images.unsplash.com/photo-${r.avatar}?w=40&h=40&fit=crop&crop=face`}
                    alt={r.name}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-green-500/20"
                  />
                  <span className="text-sm font-bold text-gray-900">{r.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}
            >
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">{s.faqTitle}</h2>
          </motion.div>

          <div className="space-y-3">
            {s.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-gray-100 p-6"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1a2e1a 100%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-20 blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative z-10 text-center max-w-2xl mx-auto px-4 sm:px-6"
        >
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">
              {s.finalCta.badge}
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {s.finalCta.title}
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            {s.finalCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={routes.simulator}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                boxShadow: "0 8px 32px rgba(22,163,74,0.45)",
              }}
            >
              {s.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/33612345678?text=Bonjour%20Fab Finance%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20prêts."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-sm border border-white/20 bg-white/8 hover:bg-white/15 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              {s.finalCta.talkToAdvisor}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-8">
            {[
              { icon: ShieldCheck, label: t.common.secure           },
              { icon: Clock,       label: s.finalCta.responseTime   },
              { icon: CheckCircle2,label: t.common.noCommit         },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-gray-500">
                <Icon className="w-3.5 h-3.5 text-green-500" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  )
}
