import { Link } from "wouter"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ShieldCheck, Clock, ChevronRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context";

interface Props {
  title:    string
  img:      string
  tagline?: string
}

export default function LoanHero({ title, img, tagline }: Props) {
  const { lang, t, routes, switchLang } = useI18n();
  const s = t.loanHero

  return (
    <section className="relative h-[520px] md:h-[580px] flex items-center overflow-hidden">

      {/* ── Image + overlays ── */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover scale-105"
          style={{ filter: "saturate(0.75)" }}
        />
        {/* Couche 1 — assombrissement */}
        <div className="absolute inset-0 bg-gray-950/65" />
        {/* Couche 2 — dégradé directionnel */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
        {/* Couche 3 — halo vert */}
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] opacity-15 blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)" }}
        />
      </div>

      {/* Ligne décorative gauche */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-green-500/50 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex items-center gap-1.5 text-sm text-gray-400 mb-7"
          >
            <Link href={routes.home} className="hover:text-white transition-colors">{t.nav.home}</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link href={routes.home} className="hover:text-white transition-colors">{t.footer.links.loans}</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-green-400 font-medium">{title}</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">
              {s.badge}
            </span>
          </motion.div>

          {/* Titre */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            {title}
          </h1>

          {/* Tagline */}
          <p className="text-lg text-gray-300 leading-relaxed mb-9 max-w-xl">
            {tagline ??
              `${s.fallbackTaglinePrefix} ${title.toLowerCase()} : ${s.fallbackTaglineSuffix}`}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={routes.simulator}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                boxShadow: "0 8px 24px rgba(22,163,74,0.45)",
              }}
            >
              {t.common.simulate}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href={routes.home}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white text-sm border border-white/20 bg-white/8 hover:bg-white/15 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.common.back}
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-5 mt-9">
            {[
              { icon: Clock,       label: s.trustResponseTime },
              { icon: ShieldCheck, label: t.common.secure     },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                <Icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Vague décorative bas */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" fill="none" preserveAspectRatio="none" className="w-full h-[72px]">
          <path d="M0 72L480 32L960 56L1440 8V72H0Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  )
}
