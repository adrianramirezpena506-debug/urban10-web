import { FaqAccordion } from '../components/FaqAccordion'

export function FaqSection() {
  return (
    <section id="preguntas" className="section faq-section">
      <div className="container faq-layout">
        <div className="faq-heading reveal"><p className="eyebrow">Información clara</p><h2>Preguntas frecuentes</h2><p>Lo esencial sobre ubicación, apartamentos, precios y fechas estimadas.</p></div>
        <FaqAccordion />
      </div>
    </section>
  )
}
