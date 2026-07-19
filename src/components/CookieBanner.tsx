import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, ShieldCheck, ChevronDown, X, Check } from "lucide-react"
import { Link } from "wouter"

import { useCookies } from "./CookieContext"
import { useI18n } from "@/lib/i18n-context"

export default function CookieBanner() {
  const { t } = useI18n();
  const s = t.cookieBanner
  const cp = t.cookiesPage

  const { status, acceptAll, refuseAll, saveCustom } = useCookies()
  const [expanded,  setExpanded]  = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  // La bannière n'apparaît que si le consentement n'a pas encore été donné
  const show = status === "pending"

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-[440px] z-[60]"
        >
          <div
            className="bg-white rounded-3xl border border-gray-200 overflow-hidden"
            style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.16)" }}
          >
            {/* Header */}
            <div
              className="px-5 pt-5 pb-4"
              style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(22,163,74,0.25)", border: "1px solid rgba(22,163,74,0.4)" }}
                >
                  <Cookie className="w-4.5 h-4.5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.footer.legalLinks.cookies}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 text-[11px] font-medium">{cp.badge}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corps */}
            <div className="px-5 py-4">
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {s.text}{" "}
                <Link href="/politique-confidentialite" className="text-green-600 hover:underline font-medium">
                  {t.common.learnMore}
                </Link>
              </p>

              {/* Panel personnalisation */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="space-y-3 mb-4 pt-1">
                      {/* Nécessaires — toujours ON */}
                      <ToggleRow
                        label={cp.types[0].title}
                        desc={s.toggleDescs.necessary}
                        checked={true}
                        disabled
                        onChange={() => {}}
                      />
                      {/* Analytiques */}
                      <ToggleRow
                        label={cp.types[1].title}
                        desc={s.toggleDescs.analytics}
                        checked={analytics}
                        onChange={setAnalytics}
                      />
                      {/* Marketing */}
                      <ToggleRow
                        label={cp.types[2].title}
                        desc={s.toggleDescs.marketing}
                        checked={marketing}
                        onChange={setMarketing}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bouton personnaliser */}
              <button
                onClick={() => setExpanded(v => !v)}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-gray-700 transition-colors mb-4"
              >
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
                />
                {expanded ? s.hideOptions : s.customize}
              </button>

              {/* Boutons d'action */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={acceptAll}
                  className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                    boxShadow: "0 4px 16px rgba(22,163,74,0.35)",
                  }}
                >
                  {cp.acceptAll}
                </button>

                {expanded ? (
                  <button
                    onClick={() => saveCustom({ analytics, marketing })}
                    className="w-full py-3 rounded-xl font-bold text-green-700 text-sm border-2 border-green-200 hover:bg-green-50 transition-all duration-200"
                  >
                    {cp.saveButton}
                  </button>
                ) : (
                  <button
                    onClick={refuseAll}
                    className="w-full py-3 rounded-xl font-semibold text-gray-500 text-sm border border-gray-200 hover:bg-gray-50 transition-all duration-200"
                  >
                    {cp.refuseAll}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─────────────────────────────────────────────
// Toggle row
// ─────────────────────────────────────────────

function ToggleRow({
  label,
  desc,
  checked,
  disabled = false,
  onChange,
}: {
  label:    string
  desc:     string
  checked:  boolean
  disabled?: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
      <div>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
      </div>

      {/* Toggle */}
      <button
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`relative flex-shrink-0 w-11 h-6 rounded-full transition-all duration-300 ${
          disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
        }`}
        style={{
          background: checked
            ? "linear-gradient(135deg, #16a34a, #15803d)"
            : "#e5e7eb",
        }}
        aria-checked={checked}
        role="switch"
      >
        <span
          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-300"
          style={{ transform: checked ? "translateX(20px)" : "translateX(0)" }}
        >
          {checked && <Check className="w-3 h-3 text-green-600" />}
        </span>
      </button>
    </div>
  )
}
