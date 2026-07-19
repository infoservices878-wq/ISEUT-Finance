import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "wouter"
import { useI18n } from "@/lib/i18n-context"

export default function FAQSection() {
  const { t, routes } = useI18n()
  const s = t.faq
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-15 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center mb-12">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}>
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <span className="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-4 h-0.5 bg-green-500 rounded-full" />{s.badge}<span className="w-4 h-0.5 bg-green-500 rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">{s.title}</h2>
          <p className="text-gray-500 text-base">{s.subtitle}</p>
        </motion.div>

        <div className="space-y-3">
          {s.items.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{ borderColor: isOpen ? "#bbf7d0" : "#f3f4f6",
                  boxShadow: isOpen ? "0 4px 24px rgba(22,163,74,0.10)" : "0 1px 8px rgba(0,0,0,0.04)" }}>
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="flex justify-between items-center w-full text-left px-6 py-5 transition-colors duration-200"
                  style={{ background: isOpen ? "#f0fdf4" : "white" }}>
                  <div className="flex items-center gap-3 pr-4">
                    <span className="text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{ background: isOpen ? "#16a34a" : "#f3f4f6", color: isOpen ? "white" : "#9ca3af" }}>
                      {i + 1}
                    </span>
                    <span className={`font-semibold text-sm md:text-base transition-colors duration-200 ${isOpen ? "text-green-800" : "text-gray-800"}`}>
                      {faq.q}
                    </span>
                  </div>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                    <ChevronDown className="w-5 h-5 transition-colors duration-200" style={{ color: isOpen ? "#16a34a" : "#9ca3af" }} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}>
                      <div className="px-6 pb-5 pt-1" style={{ background: "#f0fdf4" }}>
                        <div className="h-px bg-green-100 mb-4" />
                        <p className="text-sm text-gray-600 leading-relaxed pl-9">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#eff6ff" }}>
              <MessageCircle className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">{s.notFound}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.teamReply}</p>
            </div>
          </div>
          <Link href={routes.contact}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)", boxShadow: "0 4px 14px rgba(22,163,74,0.35)" }}>
            {s.contactCta}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}