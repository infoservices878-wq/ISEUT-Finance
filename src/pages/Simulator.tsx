import { useState, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Calculator, Percent, CheckCircle2, Loader2, Clock,
  ArrowRight, ArrowLeft, User, Briefcase, MapPin, ShieldCheck,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { calculateLoan } from "@/utils/loanCalculator"
import { useI18n } from "@/lib/i18n-context"

type LoanForm = {
  firstName: string
  lastName: string
  email: string
  phone: string
  loanType: string
  amount: number
  duration: number
  income: number
  employmentStatus: string
  monthlyExpenses: number
  address: string
  city: string
  zipCode: string
  country: string
}

const STEP_ICONS = [Calculator, User, Briefcase, MapPin]

const LOAN_TYPE_VALUES  = ["personnel", "pro", "auto", "etudiant", "conso", "rachat"]
const STATUS_VALUES     = ["employee", "self-employed", "civil-servant", "student", "retired", "unemployed"]

const inputClass =
  "w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm transition-all duration-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:bg-white"

const selectClass =
  "w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm transition-all duration-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:bg-white appearance-none cursor-pointer"

export default function Simulator() {
  const { t } = useI18n();
  const s = t.simulator

  const STEPS = s.steps.map((label, i) => ({ id: i + 1, label, icon: STEP_ICONS[i] }))

  const loanSchema = z.object({
    firstName:        z.string().min(2,  t.contact.form.errors.firstName),
    lastName:         z.string().min(2,  t.contact.form.errors.lastName),
    email:            z.string().email(s.form.errors.email),
    phone:            z.string().min(10, s.form.errors.phone),
    loanType:         z.string().min(1,  s.form.errors.loanType),
    amount:           z.number().min(500, s.form.errors.amountMin),
    duration:         z.number().min(6,   s.form.errors.durationMin),
    income:           z.number().min(0,   s.form.errors.income),
    employmentStatus: z.string().min(1,   s.form.errors.employmentStatus),
    monthlyExpenses:  z.number().min(0,   s.form.errors.expenses),
    address:          z.string().min(5,   s.form.errors.address),
    city:             z.string().min(2,   s.form.errors.city),
    zipCode:          z.string().min(5,   s.form.errors.zipCode),
    country:          z.string().min(2,   s.form.errors.country),
  })

  const [step, setStep]         = useState(1)
  const [isSubmitting, setIsS]  = useState(false)
  const [decision, setDecision] = useState<"approved" | "pending" | null>(null)

  const { register, handleSubmit, watch, setValue, formState: { errors }, reset, trigger } =
    useForm<LoanForm>({
      resolver: zodResolver(loanSchema),
      defaultValues: {
        amount: 15000, duration: 60, income: 3000,
        loanType: "personnel", monthlyExpenses: 0,
      },
    })

  const amount   = watch("amount")
  const duration = watch("duration")
  const income   = watch("income")
  const expenses = watch("monthlyExpenses")

  const { monthlyPayment, totalPaid, totalInterest } = useMemo(
    () => calculateLoan(amount, duration, 0.03),
    [amount, duration]
  )

  const debtRatio = useMemo(() => {
    if (!income) return 0
    return ((monthlyPayment + expenses) / income) * 100
  }, [monthlyPayment, expenses, income])

  const amountPct   = ((amount   - 500)  / (100000 - 500))  * 100
  const durationPct = ((duration - 6)    / (120    - 6))    * 100

  const STEP_FIELDS: Record<number, (keyof LoanForm)[]> = {
    1: ["amount", "duration", "loanType"],
    2: ["firstName", "lastName", "email", "phone"],
    3: ["income", "employmentStatus", "monthlyExpenses"],
    4: ["address", "city", "zipCode", "country"],
  }

  const nextStep = async () => {
    const valid = await trigger(STEP_FIELDS[step])
    if (valid) setStep(s => Math.min(s + 1, 4))
  }

  const onSubmit = async (data: LoanForm) => {
    setIsS(true)
    await new Promise(r => setTimeout(r, 2000))
    setDecision(data.income > monthlyPayment * 3 ? "approved" : "pending")
    setIsS(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* ── Hero strip ── */}
      <div
        className="relative pt-16 pb-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20 blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-bold uppercase tracking-widest">
              {s.hero.badge}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-3"
          >
            {s.hero.title}{" "}
            <span style={{
              background: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              {s.hero.titleHighlight}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            {s.hero.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 items-start">

          {/* ══════════════════════════════
              COLONNE GAUCHE — Simulateur
          ══════════════════════════════ */}
          <div className="lg:col-span-5 space-y-5">

            {/* Carte simulateur */}
            <div
              className="bg-white rounded-3xl p-7 border border-gray-100"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
                >
                  <Calculator className="w-4.5 h-4.5 text-white" />
                </div>
                <h2 className="font-extrabold text-gray-900 text-lg">{s.card.title}</h2>
              </div>

              <div className="space-y-7">
                {/* Montant */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-sm font-semibold text-gray-500">{s.card.amountLabel}</span>
                    <span className="text-xl font-extrabold text-gray-900">
                      {amount?.toLocaleString("fr-FR")}
                      <span className="text-green-600"> €</span>
                    </span>
                  </div>
                  <div className="relative h-2 rounded-full bg-gray-100">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
                      style={{ width: `${amountPct}%`, background: "linear-gradient(90deg, #16a34a, #22c55e)" }}
                    />
                    <input
                      type="range" min="500" max="100000" step="500"
                      value={amount}
                      onChange={e => setValue("amount", parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-green-500 shadow-md pointer-events-none transition-all duration-150"
                      style={{ left: `calc(${amountPct}% - 10px)` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1.5 text-xs text-gray-400">
                    <span>500 €</span><span>100 000 €</span>
                  </div>
                </div>

                {/* Durée */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-sm font-semibold text-gray-500">{s.card.durationLabel}</span>
                    <span className="text-xl font-extrabold text-gray-900">
                      {duration}
                      <span className="text-green-600"> {t.common.monthly}</span>
                    </span>
                  </div>
                  <div className="relative h-2 rounded-full bg-gray-100">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
                      style={{ width: `${durationPct}%`, background: "linear-gradient(90deg, #16a34a, #22c55e)" }}
                    />
                    <input
                      type="range" min="6" max="120" step="6"
                      value={duration}
                      onChange={e => setValue("duration", parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-green-500 shadow-md pointer-events-none transition-all duration-150"
                      style={{ left: `calc(${durationPct}% - 10px)` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1.5 text-xs text-gray-400">
                    <span>6 {t.common.monthly}</span><span>120 {t.common.monthly}</span>
                  </div>
                </div>

                {/* Résultat */}
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
                >
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{t.simulator.monthlyPayment}</div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={monthlyPayment.toFixed(2)}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="text-3xl font-extrabold text-white mb-4"
                    >
                      {monthlyPayment.toFixed(2)}
                      <span className="text-green-400 text-xl"> €</span>
                    </motion.div>
                  </AnimatePresence>

                  <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4 mb-4">
                    {[
                      { label: t.simulator.totalPaid,     value: `${totalPaid.toFixed(2)} €`,     color: "text-gray-200" },
                      { label: s.card.totalInterest,       value: `${totalInterest.toFixed(2)} €`, color: "text-green-400" },
                    ].map(({ label, value, color }) => (
                      <div key={label}>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">{label}</div>
                        <div className={`text-sm font-bold ${color}`}>{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Taux d'endettement */}
                  {income > 0 && (
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500">{s.card.debtRatio}</span>
                        <span className={`text-xs font-bold ${debtRatio > 35 ? "text-red-400" : "text-green-400"}`}>
                          {debtRatio.toFixed(1)}%
                          {debtRatio > 35 ? " ⚠️" : " ✓"}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: debtRatio > 35 ? "#f87171" : "#4ade80" }}
                          animate={{ width: `${Math.min(debtRatio, 100)}%` }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                      <div className="text-[10px] text-gray-600 mt-1">
                        {s.debtRatioThreshold}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 mt-4 text-xs text-gray-600">
                    <Percent className="w-3 h-3 text-green-500" />
                    {s.card.rateNote}
                  </div>
                </div>
              </div>
            </div>

            {/* Réassurance */}
            <div
              className="rounded-2xl p-5 border border-gray-100 bg-white"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
            >
              <div className="space-y-3">
                {[ShieldCheck, Clock, CheckCircle2].map((Icon, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: ["#16a34a", "#3b82f6", "#8b5cf6"][i] }} />
                    {s.reassurance[i]}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══════════════════════════════
              COLONNE DROITE — Formulaire
          ══════════════════════════════ */}
          <div className="lg:col-span-7">
            <div
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden"
              style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.10)" }}
            >
              <AnimatePresence mode="wait">

                {/* ── Résultat final ── */}
                {decision ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-12 text-center"
                  >
                    {decision === "approved" ? (
                      <>
                        <div
                          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
                          style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}
                        >
                          <CheckCircle2 className="w-12 h-12 text-green-500" />
                        </div>
                        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          {s.result.approvedBadge}
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                          {s.result.approvedTitle}
                        </h2>
                        <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed mb-8">
                          {s.result.approvedText}
                        </p>
                        <div
                          className="rounded-2xl p-6 mb-8 text-left max-w-sm mx-auto"
                          style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
                        >
                          <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">
                            {s.result.recapTitle}
                          </div>
                          {[
                            { label: s.card.amountLabel,   value: `${amount?.toLocaleString("fr-FR")} €` },
                            { label: s.card.durationLabel, value: `${duration} ${t.common.monthly}` },
                            { label: s.result.recapMonthly,value: `${monthlyPayment.toFixed(2)} €` },
                          ].map(({ label, value }) => (
                            <div key={label} className="flex justify-between text-sm py-1.5 border-b border-green-100 last:border-0">
                              <span className="text-green-700">{label}</span>
                              <span className="font-bold text-green-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
                          style={{ background: "linear-gradient(135deg, #fffbeb, #fef3c7)" }}
                        >
                          <Clock className="w-12 h-12 text-amber-500" />
                        </div>
                        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                          {s.result.pendingBadge}
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                          {s.result.pendingTitle}
                        </h2>
                        <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed mb-8">
                          {s.result.pendingText}
                        </p>
                      </>
                    )}
                    <button
                      onClick={() => { setDecision(null); reset(); setStep(1) }}
                      className="px-8 py-3.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm"
                    >
                      {s.result.retry}
                    </button>
                  </motion.div>

                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                    {/* ── Stepper ── */}
                    <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                      <div className="flex items-center gap-0">
                        {STEPS.map((st, i) => {
                          const Icon = st.icon
                          const done    = step > st.id
                          const current = step === st.id
                          return (
                            <div key={st.id} className="flex items-center flex-1 last:flex-none">
                              <div className="flex flex-col items-center">
                                <div
                                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                                  style={{
                                    background: done || current
                                      ? "linear-gradient(135deg, #16a34a, #15803d)"
                                      : "#f3f4f6",
                                  }}
                                >
                                  {done
                                    ? <CheckCircle2 className="w-4 h-4 text-white" />
                                    : <Icon className={`w-4 h-4 ${current ? "text-white" : "text-gray-400"}`} />
                                  }
                                </div>
                                <span
                                  className={`text-[11px] font-semibold mt-1.5 hidden sm:block ${
                                    current ? "text-green-600" : done ? "text-gray-400" : "text-gray-300"
                                  }`}
                                >
                                  {st.label}
                                </span>
                              </div>
                              {i < STEPS.length - 1 && (
                                <div
                                  className="flex-1 h-0.5 mx-2 mb-4 transition-all duration-300"
                                  style={{ background: done ? "#16a34a" : "#e5e7eb" }}
                                />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* ── Corps du formulaire ── */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="p-8">
                        <AnimatePresence mode="wait">

                          {/* ÉTAPE 1 — Projet */}
                          {step === 1 && (
                            <motion.div
                              key="s1"
                              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.25 }}
                              className="space-y-5"
                            >
                              <StepHeader
                                num={1} title={s.form.step1.title}
                                desc={s.form.step1.desc}
                              />
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                  {s.form.step1.loanTypeLabel} <Req />
                                </label>
                                <select {...register("loanType")} className={selectClass}>
                                  {LOAN_TYPE_VALUES.map((val, i) => (
                                    <option key={val} value={val}>{s.form.step1.loanTypeOptions[i]}</option>
                                  ))}
                                </select>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {s.form.step1.amountLabel} <Req />
                                  </label>
                                  <input
                                    {...register("amount", { valueAsNumber: true })}
                                    type="number" min={500} max={100000}
                                    className={inputClass}
                                    placeholder="15000"
                                  />
                                  {errors.amount && <Err>{errors.amount.message}</Err>}
                                </div>
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {s.form.step1.durationLabel} <Req />
                                  </label>
                                  <input
                                    {...register("duration", { valueAsNumber: true })}
                                    type="number" min={6} max={120}
                                    className={inputClass}
                                    placeholder="60"
                                  />
                                  {errors.duration && <Err>{errors.duration.message}</Err>}
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* ÉTAPE 2 — Identité */}
                          {step === 2 && (
                            <motion.div
                              key="s2"
                              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.25 }}
                              className="space-y-5"
                            >
                              <StepHeader
                                num={2} title={s.form.step2.title}
                                desc={s.form.step2.desc}
                              />
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.firstName} <Req /></label>
                                  <input {...register("firstName")} placeholder={t.contact.form.firstNamePlaceholder} className={inputClass} />
                                  {errors.firstName && <Err>{errors.firstName.message}</Err>}
                                </div>
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.lastName} <Req /></label>
                                  <input {...register("lastName")} placeholder={t.contact.form.lastNamePlaceholder} className={inputClass} />
                                  {errors.lastName && <Err>{errors.lastName.message}</Err>}
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.email} <Req /></label>
                                <input {...register("email")} type="email" placeholder={t.contact.form.emailPlaceholder} className={inputClass} />
                                {errors.email && <Err>{errors.email.message}</Err>}
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.phone} <Req /></label>
                                <input {...register("phone")} placeholder={t.contact.form.phonePlaceholder} className={inputClass} />
                                {errors.phone && <Err>{errors.phone.message}</Err>}
                              </div>
                            </motion.div>
                          )}

                          {/* ÉTAPE 3 — Situation */}
                          {step === 3 && (
                            <motion.div
                              key="s3"
                              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.25 }}
                              className="space-y-5"
                            >
                              <StepHeader
                                num={3} title={s.form.step3.title}
                                desc={s.form.step3.desc}
                              />
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{s.form.step3.statusLabel} <Req /></label>
                                <select {...register("employmentStatus")} className={selectClass}>
                                  <option value="">{s.form.step3.statusPlaceholder}</option>
                                  {STATUS_VALUES.map((val, i) => (
                                    <option key={val} value={val}>{s.form.step3.statusOptions[i]}</option>
                                  ))}
                                </select>
                                {errors.employmentStatus && <Err>{errors.employmentStatus.message}</Err>}
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">{s.form.step3.incomeLabel} <Req /></label>
                                  <input
                                    {...register("income", { valueAsNumber: true })}
                                    type="number" placeholder="3000" className={inputClass}
                                  />
                                  {errors.income && <Err>{errors.income.message}</Err>}
                                </div>
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">{s.form.step3.expensesLabel} <Req /></label>
                                  <input
                                    {...register("monthlyExpenses", { valueAsNumber: true })}
                                    type="number" placeholder="1200" className={inputClass}
                                  />
                                  {errors.monthlyExpenses && <Err>{errors.monthlyExpenses.message}</Err>}
                                </div>
                              </div>
                              {income > 0 && (
                                <div
                                  className="rounded-xl p-4 text-sm"
                                  style={{
                                    background: debtRatio > 35 ? "#fef2f2" : "#f0fdf4",
                                    border: `1px solid ${debtRatio > 35 ? "#fecaca" : "#bbf7d0"}`,
                                  }}
                                >
                                  <div className="flex justify-between items-center mb-2">
                                    <span className={`font-semibold ${debtRatio > 35 ? "text-red-700" : "text-green-700"}`}>
                                      {s.debtRatioFull}
                                    </span>
                                    <span className={`font-extrabold text-lg ${debtRatio > 35 ? "text-red-600" : "text-green-600"}`}>
                                      {debtRatio.toFixed(1)}%
                                    </span>
                                  </div>
                                  <p className={`text-xs ${debtRatio > 35 ? "text-red-500" : "text-green-600"}`}>
                                    {debtRatio > 35 ? s.debtRatioWarning : s.debtRatioOk}
                                  </p>
                                </div>
                              )}
                            </motion.div>
                          )}

                          {/* ÉTAPE 4 — Adresse */}
                          {step === 4 && (
                            <motion.div
                              key="s4"
                              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.25 }}
                              className="space-y-5"
                            >
                              <StepHeader
                                num={4} title={s.form.step4.title}
                                desc={s.form.step4.desc}
                              />
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{s.form.step4.addressLabel} <Req /></label>
                                <input {...register("address")} placeholder="12 rue de Paris" className={inputClass} />
                                {errors.address && <Err>{errors.address.message}</Err>}
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">{s.form.step4.cityLabel} <Req /></label>
                                  <input {...register("city")} placeholder="Paris" className={inputClass} />
                                  {errors.city && <Err>{errors.city.message}</Err>}
                                </div>
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">{s.form.step4.zipLabel} <Req /></label>
                                  <input {...register("zipCode")} placeholder="75001" className={inputClass} />
                                  {errors.zipCode && <Err>{errors.zipCode.message}</Err>}
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{s.form.step4.countryLabel} <Req /></label>
                                <input {...register("country")} placeholder="France" className={inputClass} />
                                {errors.country && <Err>{errors.country.message}</Err>}
                              </div>
                              <p className="text-xs text-gray-400 leading-relaxed pt-1">
                                {s.form.step4.rgpd1}{" "}
                                <a href="#" className="text-green-600 hover:underline">{t.contact.form.rgpdLink}</a>
                                {" "}{s.form.step4.rgpd2}
                              </p>
                            </motion.div>
                          )}

                        </AnimatePresence>
                      </div>

                      {/* ── Navigation ── */}
                      <div className="px-8 pb-8 flex gap-3">
                        {step > 1 && (
                          <button
                            type="button"
                            onClick={() => setStep(s => s - 1)}
                            className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                          >
                            <ArrowLeft className="w-4 h-4" /> {t.common.back}
                          </button>
                        )}

                        {step < 4 ? (
                          <button
                            type="button"
                            onClick={nextStep}
                            className="group flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                              boxShadow: "0 6px 20px rgba(22,163,74,0.38)",
                            }}
                          >
                            {s.form.continue}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                            style={{
                              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                              boxShadow: isSubmitting ? "none" : "0 6px 20px rgba(22,163,74,0.38)",
                            }}
                          >
                            {isSubmitting ? (
                              <><Loader2 className="w-4 h-4 animate-spin" /> {s.form.analyzing}</>
                            ) : (
                              <><CheckCircle2 className="w-4 h-4" /> {s.form.submit}</>
                            )}
                          </button>
                        )}
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

/* ── Helpers ── */
function StepHeader({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-1">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
        >
          {num}
        </div>
        <h3 className="text-lg font-extrabold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-400 ml-10">{desc}</p>
    </div>
  )
}

function Req() {
  return <span className="text-red-400 ml-0.5">*</span>
}

function Err({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
      <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
      {children}
    </p>
  )
}
