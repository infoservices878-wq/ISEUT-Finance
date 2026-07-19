import { motion } from "framer-motion"
import { ShieldCheck, Eye, Lock, UserCheck, Trash2, Bell, Globe, ChevronRight, AlertTriangle, Database, FileKey } from "lucide-react"
import { Link } from "wouter"
import { useI18n } from "@/lib/i18n-context"

const LAST_UPDATE = "11 mars 2026"

const SECTION_META = [
  { id: "responsable",   icon: UserCheck, color: "#16a34a", bg: "#f0fdf4" },
  { id: "collecte",      icon: Database,  color: "#3b82f6", bg: "#eff6ff" },
  { id: "finalites",     icon: Eye,       color: "#8b5cf6", bg: "#f5f3ff" },
  { id: "destinataires", icon: Globe,     color: "#0ea5e9", bg: "#f0f9ff" },
  { id: "conservation",  icon: Trash2,    color: "#ef4444", bg: "#fef2f2" },
  { id: "securite",      icon: Lock,      color: "#16a34a", bg: "#f0fdf4" },
  { id: "droits",        icon: FileKey,   color: "#f59e0b", bg: "#fffbeb" },
  { id: "cookies",       icon: Bell,      color: "#0ea5e9", bg: "#f0f9ff" },
  { id: "modifications", icon: ShieldCheck,color:"#8b5cf6", bg: "#f5f3ff" },
]

export default function PolitiqueConfidentialite() {
  const { t, routes } = useI18n();
  const s = t.politiqueConfidentialite
  const SECTIONS = s.sections.map((data, i) => ({ ...SECTION_META[i], ...data }))

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-gray-950 pt-24 pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-15 blur-3xl rounded-full"
            style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
          />
        </div>

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
              <ShieldCheck className="w-7 h-7 text-green-400" />
            </div>

            <span className="inline-flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-4 h-0.5 bg-green-500 rounded-full" />
              {s.badge}
              <span className="w-4 h-0.5 bg-green-500 rounded-full" />
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t.footer.legalLinks.privacy}
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              {s.pageSubtitle}
            </p>

            <p className="text-gray-600 text-sm mt-4">
              {t.mentionsLegales.lastUpdate} {LAST_UPDATE}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-12 bg-gradient-to-b from-gray-950 to-gray-50" />

      <div className="bg-gray-50 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Encart RGPD */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-5 mb-8 flex items-start gap-4"
            style={{
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              border: "1px solid #bbf7d0",
            }}
          >
            <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-green-900 mb-1">
                {s.rgpdBoxTitle}
              </p>
              <p className="text-sm text-green-800 leading-relaxed">
                {s.rgpdBoxText}
              </p>
            </div>
          </motion.div>

          {/* Sommaire */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 p-6 mb-8"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">{t.mentionsLegales.summary}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SECTIONS.map(({ id, title, icon: Icon, color }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {title}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 ml-auto group-hover:text-gray-500" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {SECTIONS.map(({ id, icon: Icon, color, bg, title, intro, rows, paragraphs, paragraphs2, warning }, si) => (
              <motion.section
                key={id}
                id={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: si * 0.03 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden scroll-mt-24"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="px-6 py-5 flex items-center gap-3 border-b border-gray-100"
                  style={{ background: bg }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: color + "22" }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <h2 className="font-extrabold text-gray-900">{title}</h2>
                </div>

                <div className="px-6 py-6 space-y-5">
                  {intro && (
                    <p className="text-sm text-gray-600 leading-relaxed">{intro}</p>
                  )}

                  {rows && (
                    <div className="overflow-hidden rounded-xl border border-gray-100">
                      <table className="w-full text-sm">
                        <tbody>
                          {rows.map(([label, value]: string[], ri: number) => (
                            <tr key={ri} className={ri % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                              <td className="px-4 py-3 font-semibold text-gray-500 w-2/5 align-top">{label}</td>
                              <td className="px-4 py-3 text-gray-900">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {warning && (
                    <div
                      className="flex items-start gap-3 rounded-xl p-4"
                      style={{ background: "#fffbeb", border: "1px solid #fde68a" }}
                    >
                      <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-amber-800">{warning}</p>
                    </div>
                  )}

                  {paragraphs && (
                    <div className="space-y-4">
                      {paragraphs.map((p: string, pi: number) => (
                        <p key={pi} className="text-sm text-gray-600 leading-relaxed">{p}</p>
                      ))}
                    </div>
                  )}

                  {paragraphs2 && (
                    <div className="space-y-4">
                      {paragraphs2.map((p: string, pi: number) => (
                        <p key={pi} className="text-sm text-gray-600 leading-relaxed">{p}</p>
                      ))}
                    </div>
                  )}

                  {id === "modifications" && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {s.modifDateLabel} {LAST_UPDATE}
                    </p>
                  )}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl border border-gray-200 p-6 text-center bg-white"
          >
            <p className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto mb-4">
              {s.footerText}{" "}
              <a href="mailto:dpo@fab-financeaide.com" className="text-green-600 hover:underline font-medium">
                dpo@fab-financeaide.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <Link href={routes.legal} className="hover:text-green-600 transition-colors">
                {t.footer.legalLinks.mentions}
              </Link>
              <span>·</span>
              <Link href={routes.cookies} className="hover:text-green-600 transition-colors">
                {t.footer.legalLinks.cookies}
              </Link>
              <span>·</span>
              <Link href={routes.contact} className="hover:text-green-600 transition-colors">
                {t.contact.badge}
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
