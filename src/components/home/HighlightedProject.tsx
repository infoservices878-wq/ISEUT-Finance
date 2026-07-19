import { useState, useEffect, useRef } from "react"
import { Link } from "wouter"
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Star, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"

const SLIDE_IMAGES = [
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2400&auto=format&fit=crop",
]
const SLIDE_COLORS = ["#3b82f6", "#f59e0b", "#0ea5e9", "#8b5cf6"]
const SLIDE_HREFS  = [
  "/simulateur?type=auto",
  "/simulateur?type=travaux",
  "/simulateur?type=voyage",
  "/simulateur?type=etudiant",
]

const imageVariants = {
  enter:  (d: number) => ({ x: d > 0 ? "4%" : "-4%", opacity: 0, scale: 1.04 }),
  center: { x: "0%", opacity: 1, scale: 1 },
  exit:   (d: number) => ({ x: d > 0 ? "-4%" : "4%", opacity: 0, scale: 0.98 }),
}
const textVariants = {
  enter:  { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0  },
  exit:   { opacity: 0, y: -12 },
}

export default function HighlightedProject() {
  const { t, routes } = useI18n()
  const s = t.highlightedProject

  const [index,  setIndex]  = useState(0)
  const [paused, setPaused] = useState(false)
  const [dir,    setDir]    = useState(1)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const go     = (next: number, direction = 1) => { setDir(direction); setIndex(next) }
  const goNext = () => go((index + 1) % s.slides.length, 1)
  const goPrev = () => go(index === 0 ? s.slides.length - 1 : index - 1, -1)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(goNext, 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, index])

  const slide      = s.slides[index]
  const slideColor = SLIDE_COLORS[index]

  const PROOFS = [
    { icon: Star,        text: s.proofs.rating },
    { icon: Clock,       text: s.proofs.speed  },
    { icon: ShieldCheck, text: s.proofs.secure },
  ]

  return (
    <section className="py-10 bg-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />{s.badge}<span className="w-5 h-0.5 bg-green-500 rounded-full" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">{s.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl flex-shrink-0">
            <AnimatePresence mode="sync" custom={dir}>
              <motion.img key={index} src={SLIDE_IMAGES[index]} alt={slide.title}
                custom={dir} variants={imageVariants} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.65, ease: [0.32, 0, 0.16, 1] }}
                className="absolute inset-0 w-full h-full object-cover" />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

            {/* Badge rating */}
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2">
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-sm font-bold text-gray-900">4.8</span>
              <span className="text-gray-400 text-xs">· {s.trustBadges.rating}</span>
            </div>

            {/* Badge sécurité */}
            <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-800">{s.trustBadges.secure}</span>
            </div>

            {/* Tag bas gauche */}
            <div className="absolute bottom-5 left-5">
              <AnimatePresence mode="wait">
                <motion.div key={index + "tag"} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>
                  <span className="inline-block text-sm font-bold text-white px-4 py-1.5 rounded-full"
                    style={{ background: slideColor + "cc" }}>{slide.tag}</span>
                  <p className="text-white/80 text-xs mt-2 ml-1">{s.noCommit}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Flèches */}
            <button onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110">
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Progress bar */}
            {!paused && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
                <motion.div key={index + "bar"} className="h-full bg-white"
                  initial={{ width: "0%" }} animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }} />
              </div>
            )}
          </div>

          {/* Texte */}
          <div className="relative">
            {/* Tabs */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {s.slides.map((sl, i) => (
                <button key={i} onClick={() => go(i, i > index ? 1 : -1)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                  style={{
                    background:  i === index ? slideColor : "#f3f4f6",
                    color:       i === index ? "white"     : "#6b7280",
                    boxShadow:   i === index ? `0 4px 14px ${slideColor}44` : "none",
                  }}>
                  {sl.subtitle}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={index + "text"} variants={textVariants} initial="enter"
                animate="center" exit="exit" transition={{ duration: 0.4, ease: "easeOut" }}>
                <h3 className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                  {slide.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">{slide.description}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {PROOFS.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon className="w-4 h-4 text-green-500 flex-shrink-0" />{text}
                    </div>
                  ))}
                </div>

                <Link href={`${routes.simulator}?type=${SLIDE_HREFS[index].split("=")[1]}`}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background:  `linear-gradient(135deg, ${slideColor} 0%, ${slideColor}cc 100%)`,
                    boxShadow:   `0 8px 24px ${slideColor}44`,
                  }}>
                  {slide.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2.5 mt-10">
              {s.slides.map((_, i) => (
                <button key={i} onClick={() => go(i, i > index ? 1 : -1)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ width: i === index ? "28px" : "8px", background: i === index ? slideColor : "#d1d5db" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}