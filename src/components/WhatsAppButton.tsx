import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Phone, Mail, ChevronRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const WHATSAPP_NUMBER = "33605662921" // ← remplace par ton numéro sans le +

function buildWhatsAppUrl(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

export default function WhatsAppButton() {
  const { t } = useI18n();
  const s = t.whatsAppButton
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ── Backdrop flou sur mobile ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Conteneur positionné ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* ── Panel popup ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden w-80"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}
            >
              {/* Header */}
              <div
                className="px-5 py-5"
                style={{ background: "linear-gradient(135deg, #075e54 0%, #128c7e 100%)" }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Fab Finance</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-300 text-xs">{s.status}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Bulle de message */}
              <div className="px-5 py-4 bg-[#e5ddd5]">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[90%]">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {s.greeting}
                  </p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">10:24 ✓✓</p>
                </div>
              </div>

              {/* Quick replies */}
              <div className="px-4 py-4 space-y-2 bg-[#e5ddd5]">
                {s.quickMessages.map(({ label, msg }) => (
                  <a
                    key={label}
                    href={buildWhatsAppUrl(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-white hover:bg-green-50 border border-white hover:border-green-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-800 transition-all duration-200 group shadow-sm"
                  >
                    <span>{label}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bulle flottante principale ── */}
        <div className="relative">
          {/* Notification badge */}
          {!open && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center z-10"
            >
              <span className="text-[10px] font-extrabold text-white">1</span>
            </motion.div>
          )}

          {/* Tooltip */}
          <AnimatePresence>
            {!open && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ delay: 1.5, duration: 0.4 }}
                className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-xl whitespace-nowrap shadow-lg pointer-events-none"
              >
                {s.tooltip}
                {/* Flèche */}
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-gray-900" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bouton principal */}
          <motion.button
            onClick={() => setOpen(v => !v)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
              boxShadow: "0 8px 32px rgba(37,211,102,0.50)",
            }}
            aria-label={s.ariaLabel}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="wa"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {/* Icône WhatsApp SVG */}
                  <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Halo pulsant */}
          {!open && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none"
              style={{ background: "#25d366" }}
            />
          )}
        </div>
      </div>
    </>
  )
}
