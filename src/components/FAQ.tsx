import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как сделать заказ?",
    answer:
      "Позвоните нам или оставьте заявку на сайте. Мы согласуем удобное время для встречи, снимем мерки и обсудим все детали заказа. После утверждения материала и фасона — приступим к пошиву.",
  },
  {
    question: "Сколько времени занимает пошив?",
    answer:
      "Сроки зависят от типа изделия и сложности заказа. Форменная одежда — от 7 до 14 рабочих дней. Изделия из меха и кожи — от 14 до 30 дней. Точные сроки согласуются индивидуально.",
  },
  {
    question: "Вы работаете с организациями?",
    answer:
      "Да, мы активно работаем с корпоративными клиентами — охранными структурами, медицинскими учреждениями, транспортными предприятиями и госорганами. Оформляем договоры, работаем с НДС.",
  },
  {
    question: "Какие материалы используете?",
    answer:
      "Для форменной одежды — сертифицированные ткани российского и зарубежного производства. Для меховых изделий — натуральный мех от проверенных поставщиков: норка, песец, лиса, каракуль. Для кожи — натуральная и экокожа разной выделки.",
  },
  {
    question: "Делаете ли вы ремонт и реставрацию?",
    answer:
      "Да, мы выполняем ремонт и реставрацию меховых и кожаных изделий: замена подкладки, реставрация меха, перешив, замена молний и фурнитуры. Принимаем любые изделия в работу.",
  },
  {
    question: "Как с вами связаться?",
    answer:
      "Звоните по телефону или пишите нам. Мы находимся в Йошкар-Оле. Расскажите, что вам нужно, и мы предложим лучшее решение.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
