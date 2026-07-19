import { useI18n } from "@/lib/i18n-context"

export default function LoanFAQ(){

  const { t } = useI18n();
  const faqs = t.loanFaq.items

  return(

    <section className="bg-white p-10 rounded-3xl border border-gray-100">

      <h2 className="text-2xl font-bold mb-8">
        {t.faq.title}
      </h2>

      <div className="space-y-6">

        {faqs.map((faq,i)=>(

          <div key={i}>

            <h3 className="font-semibold mb-2">
              {faq.q}
            </h3>

            <p className="text-gray-500 text-sm">
              {faq.a}
            </p>

          </div>

        ))}

      </div>

    </section>

  )

}
