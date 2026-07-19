import { z } from "zod";

export const loanRequestSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  monthlyIncome: z.number().min(0, "Le revenu doit être positif"),
  requestedAmount: z.number().min(1000, "Le montant minimum est de 1000 €"),
  durationMonths: z.number().min(6, "La durée minimale est de 6 mois").max(360, "La durée maximale est de 360 mois"),
});

export const contactSchema = z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Le sujet est requis"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export type LoanRequest = z.infer<typeof loanRequestSchema>;
export type ContactForm = z.infer<typeof contactSchema>;
