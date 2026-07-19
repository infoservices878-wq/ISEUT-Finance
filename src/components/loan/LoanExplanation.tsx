import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

interface Props {
  title:      string
  paragraphs: string[]
}

export default function LoanExplanation({ title, paragraphs }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 relative bg-white rounded-3xl border border-gray-100 overflow-hidden"
      style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}
    >
      {/* Accent bar gauche */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
        style={{ background: "linear-gradient(180deg, #16a34a 0%, #22c55e 50%, transparent 100%)" }}
      />

      {/* Halo décoratif */}
      <div
        className="absolute bottom-0 right-0 w-[280px] h-[280px] opacity-[0.04] blur-3xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)" }}
      />

      <div className="relative z-10 p-8 md:p-10 pl-10 md:pl-12">

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}
          >
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            {title}
          </h2>
        </div>

        {/* Paragraphes */}
        <div className="space-y-5 pl-14">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-gray-600 leading-relaxed text-base"
            >
              {/* Premier paragraphe légèrement plus grand */}
              {i === 0 ? (
                <span className="text-gray-700 font-medium">{p}</span>
              ) : p}
            </motion.p>
          ))}
        </div>

      </div>
    </motion.section>
  )
}