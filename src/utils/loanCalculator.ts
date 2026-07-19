export function calculateLoan(amount: number, duration: number, rate: number) {
  const monthlyRate = rate / 12

  const monthlyPayment =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -duration))

  const totalPaid = monthlyPayment * duration
  const totalInterest = totalPaid - amount

  return {
    monthlyPayment,
    totalPaid,
    totalInterest,
  }
}
