import { useState } from "react"
import { motion } from "framer-motion"
import { Cookie, ShieldCheck, Check, RefreshCw, Save, Info, AlertTriangle } from "lucide-react"
import { Link } from "wouter"
import { useCookies } from "@/components/CookieContext"
import { useI18n } from "@/lib/i18n-context"

const TYPE_META = [
  { id: "necessary" as const, icon: ShieldCheck, color: "#16a34a", bg: "#f0fdf4", required: true },
  { id: "analytics" as const, icon: Info,         color: "#3b82f6", bg: "#eff6ff", required: false },
  { id: "marketing" as const, icon: AlertTriangle,color: "#f59e0b", bg: "#fffbeb", required: false },
]

export default function CookiesPage() {
  const { t, routes } = useI18n();
  const s = t.cookiesPage
  const COOKIE_TYPES = s.types.map((data, i) => ({ ...TYPE_META[i], ...data }))

  const { preferences, status, acceptAll, refuseAll, saveCustom, reset } = useCookies()

  const [analytics, setAnalytics] = useState(preferences.analytics)
  const [marketing, setMarketing] = useState(preferences.marketing)
  const [saved,     setSaved]     = useState(false)

  const handleSave = () => {
    saveCustom({ analytics, marketing })
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleAcceptAll = () => {
    acceptAll()
    setAnalytics(true)
    setMarketing(true)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleRefuseAll = () => {
    refuseAll()
    setAnalytics(false)
    setMarketing(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const getChecked = (id: string) => {
    if (id === "necessary") return true
    if (id === "analytics") return analytics
    if (id === "marketing") return marketing
    return false
  }

  const getOnChange = (id: string) => {
    if (id === "analytics") return setAnalytics
    if (id === "marketing") return setMarketing
    return () => {}
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-gray-950 pt-24 pb-28 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-15 blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(22,163,74,0.2)", border: "1px solid rgba(22,163,74,0.3)" }}
            >
              <Cookie className="w-7 h-7 text-green-400" />
            </div>

            <span className="inline-flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-4 h-0.5 bg-green-500 rounded-full" />
              {s.badge}
              <span className="w-4 h-0.5 bg-green-500 rounded-full" />
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t.footer.legalLinks.cookies}
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              {s.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-12 bg-gradient-to-b from-gray-950 to-gray-50" />

      <div className="bg-gray-50 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Statut actuel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-5 mb-8 flex items-center justify-between gap-4 flex-wrap bg-white border border-gray-100"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{s.statusLabel}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {status === "pending"  && s.statusMessages.pending}
                  {status === "accepted" && s.statusMessages.accepted}
                  {status === "refused"  && s.statusMessages.refused}
                  {status === "custom"   && s.statusMessages.custom}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${
                  status === "pending"
                    ? "bg-gray-100 text-gray-500"
                    : "bg-green-50 text-green-700"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${status === "pending" ? "bg-gray-400" : "bg-green-500 animate-pulse"}`} />
                {status === "pending" ? s.statusPending : s.statusSaved}
              </span>

              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-red-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                {s.reset}
              </button>
            </div>
          </motion.div>

          {/* Cards par type */}
          <div className="space-y-5 mb-8">
            {COOKIE_TYPES.map(({ id, icon: Icon, color, bg, title, required, desc, examples, retention }, i) => {
              const checked  = getChecked(id)
              const onChange = getOnChange(id)

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white rounded-2xl border overflow-hidden transition-all duration-200"
                  style={{
                    borderColor: checked ? color + "33" : "#f3f4f6",
                    boxShadow: checked ? `0 4px 20px ${color}10` : "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Header card */}
                  <div
                    className="px-6 py-5 flex items-center justify-between"
                    style={{ background: checked ? bg : "white" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: color + "18" }}
                      >
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-extrabold text-gray-900">{title}</h3>
                          {required && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: color + "15", color }}
                            >
                              {s.requiredBadge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">{s.retentionLabel} {retention}</p>
                      </div>
                    </div>

                    {/* Toggle */}
                    <button
                      onClick={() => !required && onChange(!checked)}
                      disabled={required}
                      className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-all duration-300 ${required ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
                      style={{ background: checked ? `linear-gradient(135deg, ${color}, ${color}cc)` : "#e5e7eb" }}
                      aria-checked={checked}
                      role="switch"
                    >
                      <span
                        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-300"
                        style={{ transform: checked ? "translateX(24px)" : "translateX(0)" }}
                      >
                        {checked && <Check className="w-3 h-3" style={{ color }} />}
                      </span>
                    </button>
                  </div>

                  {/* Corps */}
                  <div className="px-6 pb-5 border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>

                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        {s.examplesLabel}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {examples.map(ex => (
                          <span
                            key={ex}
                            className="text-xs px-2.5 py-1 rounded-lg font-medium"
                            style={{ background: color + "0f", color: color }}
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 p-6"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
          >
            {/* Feedback sauvegarde */}
            {saved && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl px-4 py-3 mb-4"
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
              >
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-800">
                  {s.savedMessage}
                </span>
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  boxShadow: "0 6px 20px rgba(22,163,74,0.35)",
                }}
              >
                <Save className="w-4 h-4" />
                {s.saveButton}
              </button>

              <button
                onClick={handleAcceptAll}
                className="flex-1 py-3.5 rounded-xl font-bold text-green-700 text-sm border-2 border-green-200 hover:bg-green-50 transition-all duration-200"
              >
                {s.acceptAll}
              </button>

              <button
                onClick={handleRefuseAll}
                className="flex-1 py-3.5 rounded-xl font-semibold text-gray-500 text-sm border border-gray-200 hover:bg-gray-50 transition-all duration-200"
              >
                {s.refuseAll}
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
              {s.footerNote}{" "}
              <Link href={routes.privacy} className="text-green-600 hover:underline">
                {t.footer.legalLinks.privacy}
              </Link>
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
