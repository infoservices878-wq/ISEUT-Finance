import { useState } from "react"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FileEdit, ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog"
import { useI18n } from "@/lib/i18n-context"

type RequestForm = {
  firstName: string
  lastName: string
  email: string
  phone: string
  loanType: string
  amount: number
  duration: number
  employmentStatus: string
  income: number
  message?: string
}

const LOAN_TYPE_VALUES = ["personnel", "pro", "auto", "etudiant", "conso", "rachat"]
const STATUS_VALUES    = ["employee", "self-employed", "civil-servant", "student", "retired", "unemployed"]

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm transition-all duration-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:bg-white"

const selectClass =
  "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm transition-all duration-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:bg-white appearance-none cursor-pointer"

interface Props {
  variant?: "desktop" | "mobile" | "cta"
  label?: string
}

export default function LoanRequestDialog({ variant = "desktop", label }: Props) {
  const { t } = useI18n();
  const s  = t.loanRequestDialog
  const sf = t.simulator.form

  const [open, setOpen]                 = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess]       = useState(false)

  const schema = z.object({
    firstName:        z.string().min(2, t.contact.form.errors.firstName),
    lastName:         z.string().min(2, t.contact.form.errors.lastName),
    email:            z.string().email(sf.errors.email),
    phone:            z.string().min(10, sf.errors.phone),
    loanType:         z.string().min(1, sf.errors.loanType),
    amount:           z.number().min(500, sf.errors.amountMin),
    duration:         z.number().min(6, sf.errors.durationMin),
    employmentStatus: z.string().min(1, sf.errors.employmentStatus),
    income:           z.number().min(0, sf.errors.income),
    message:          z.string().optional(),
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RequestForm>({
    resolver: zodResolver(schema),
    defaultValues: { loanType: "personnel" },
  })

  const onSubmit = async (data: RequestForm) => {
    setIsSubmitting(true)
    try {
      await emailjs.send(
        "service_miiozwr",
        "template_2myk4wr",
        {
          firstName:        data.firstName,
          lastName:         data.lastName,
          email:            data.email,
          phone:            data.phone,
          loanType:         sf.step1.loanTypeOptions[LOAN_TYPE_VALUES.indexOf(data.loanType)],
          amount:           data.amount.toLocaleString("fr-FR"),
          duration:         data.duration,
          employmentStatus: sf.step3.statusOptions[STATUS_VALUES.indexOf(data.employmentStatus)],
          income:           data.income.toLocaleString("fr-FR"),
          message:          data.message || "—",
        },
        { publicKey: "CpMdEc44_FXUy3bQh" }
      )
      setIsSuccess(true)
      reset()
      setTimeout(() => { setIsSuccess(false); setOpen(false) }, 5000)
    } catch (err) {
      console.error("Erreur d'envoi:", err)
      alert("Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous contacter directement.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {variant === "cta" ? (
        <button
          onClick={() => setOpen(true)}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
            boxShadow: "0 6px 20px rgba(22,163,74,0.35)",
          }}
        >
          {label ?? s.navButton}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      ) : variant === "desktop" ? (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
            boxShadow: "0 4px 14px rgba(22,163,74,0.35)",
          }}
        >
          <FileEdit className="w-4 h-4" />
          {s.navButton}
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-base w-full transition-all"
          style={{
            background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
            boxShadow: "0 4px 14px rgba(22,163,74,0.35)",
          }}
        >
          <FileEdit className="w-4 h-4" />
          {s.navButton}
        </button>
      )}

      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}
            >
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">{s.successTitle}</h3>
            <p className="text-sm text-gray-500 max-w-xs">{s.successDesc}</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{s.title}</DialogTitle>
              <DialogDescription>{s.subtitle}</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.contact.form.firstName}
                  </label>
                  <input {...register("firstName")} placeholder={t.contact.form.firstNamePlaceholder} className={inputClass} />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.contact.form.lastName}
                  </label>
                  <input {...register("lastName")} placeholder={t.contact.form.lastNamePlaceholder} className={inputClass} />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.contact.email}
                  </label>
                  <input {...register("email")} type="email" placeholder={t.contact.form.emailPlaceholder} className={inputClass} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t.contact.phone}
                  </label>
                  <input {...register("phone")} placeholder={t.contact.form.phonePlaceholder} className={inputClass} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {sf.step1.loanTypeLabel}
                </label>
                <select {...register("loanType")} className={selectClass}>
                  {LOAN_TYPE_VALUES.map((val, i) => (
                    <option key={val} value={val}>{sf.step1.loanTypeOptions[i]}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {sf.step1.amountLabel}
                  </label>
                  <input
                    {...register("amount", { valueAsNumber: true })}
                    type="number" placeholder="15000" className={inputClass}
                  />
                  {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {sf.step1.durationLabel}
                  </label>
                  <input
                    {...register("duration", { valueAsNumber: true })}
                    type="number" placeholder="60" className={inputClass}
                  />
                  {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {sf.step3.statusLabel}
                </label>
                <select {...register("employmentStatus")} className={selectClass}>
                  <option value="">{sf.step3.statusPlaceholder}</option>
                  {STATUS_VALUES.map((val, i) => (
                    <option key={val} value={val}>{sf.step3.statusOptions[i]}</option>
                  ))}
                </select>
                {errors.employmentStatus && <p className="text-red-500 text-xs mt-1">{errors.employmentStatus.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {sf.step3.incomeLabel}
                </label>
                <input
                  {...register("income", { valueAsNumber: true })}
                  type="number" placeholder="3000" className={inputClass}
                />
                {errors.income && <p className="text-red-500 text-xs mt-1">{errors.income.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t.contact.form.messageLabel}
                  <span className="text-gray-400 font-normal ml-1">{s.messageOptional}</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder={s.messagePlaceholder}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-3.5 rounded-xl font-bold text-white text-sm flex justify-center items-center gap-2.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  boxShadow: "0 6px 20px rgba(22,163,74,0.35)",
                }}
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> {sf.analyzing}</>
                ) : (
                  <>{sf.submit} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
