import { useState } from "react"
import { Link } from "wouter"
import { Calculator, Percent, ArrowRight } from "lucide-react"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import { useI18n } from "@/lib/i18n-context"

interface Props {
  label?: string
  className?: string
  defaultAmount?: number
  defaultDuration?: number
}

export default function SimulatorPreviewDialog({
  label,
  className,
  defaultAmount = 15000,
  defaultDuration = 60,
}: Props) {
  const { t, routes } = useI18n();
  const s = t.simulator

  const [open, setOpen]         = useState(false)
  const [amount, setAmount]     = useState(defaultAmount)
  const [duration, setDuration] = useState(defaultDuration)

  const r               = 0.03 / 12
  const monthlyPayment  = (amount * (r * Math.pow(1 + r, duration))) / (Math.pow(1 + r, duration) - 1)
  const totalPaid       = monthlyPayment * duration
  const totalInterest   = totalPaid - amount

  const amountPct   = ((amount - 500) / (100000 - 500)) * 100
  const durationPct = ((duration - 6) / (120 - 6)) * 100

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        className={
          className ??
          "group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
        }
        style={
          className
            ? undefined
            : {
                background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                boxShadow: "0 6px 20px rgba(22,163,74,0.40)",
              }
        }
      >
        {label ?? t.loanExample.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
            >
              <Calculator className="w-4.5 h-4.5 text-white" />
            </div>
            <DialogTitle>{s.card.title}</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-7 mt-2">

          {/* Montant */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <span className="text-sm font-semibold text-gray-500">{s.card.amountLabel}</span>
              <span className="text-xl font-extrabold text-gray-900">
                {amount.toLocaleString("fr-FR")}
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
                onChange={e => setAmount(parseInt(e.target.value))}
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
                onChange={e => setDuration(parseInt(e.target.value))}
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
            <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{s.monthlyPayment}</div>
            <div className="text-3xl font-extrabold text-white mb-4">
              {monthlyPayment.toFixed(2)}
              <span className="text-green-400 text-xl"> €</span>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">{s.totalPaid}</div>
                <div className="text-sm font-bold text-gray-200">{totalPaid.toFixed(2)} €</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">{s.card.totalInterest}</div>
                <div className="text-sm font-bold text-green-400">{totalInterest.toFixed(2)} €</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-4 text-xs text-gray-600">
              <Percent className="w-3 h-3 text-green-500" />
              {s.card.rateNote}
            </div>
          </div>

          {/* CTA vers le simulateur complet */}
          {/*<Link
            href={routes.simulator}
            onClick={() => setOpen(false)}
            className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              boxShadow: "0 6px 20px rgba(22,163,74,0.35)",
            }}
          >
            {s.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>*/}
        </div>
      </DialogContent>
    </Dialog>
  )
}
