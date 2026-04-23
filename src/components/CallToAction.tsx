import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Сделать заказ</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Готовы сшить
            <br />
            что-то <HighlightedText>особенное</HighlightedText>?
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами — обсудим детали заказа, снимем мерки и предложим лучшие материалы. Работаем как с частными клиентами, так и с организациями.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:+78352632527"
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
            >
              Позвонить нам
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              Узнать о нас
            </a>
          </div>

          <div className="w-full overflow-hidden rounded-lg" style={{ height: "360px" }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=%D0%A7%D0%B5%D0%B1%D0%BE%D0%BA%D1%81%D0%B0%D1%80%D1%8B%2C%20%D1%83%D0%BB.%20%D0%A2%D0%B5%D0%BA%D1%81%D1%82%D0%B8%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%BE%D0%B2%2C%2012&z=16&pt=47.252160,56.143785,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта ателье Зима"
              allowFullScreen
            />
          </div>
          <p className="text-primary-foreground/50 text-sm mt-4">ул. Текстильщиков, 12, Чебоксары · Открыто до 18:00</p>
        </div>
      </div>
    </section>
  )
}