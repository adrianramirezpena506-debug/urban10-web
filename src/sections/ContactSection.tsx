import { ContactForm } from '../components/ContactForm'
import { contactConfig } from '../config/contact'
import type { ApartmentId } from '../types/project'

interface ContactSectionProps { selectedApartment: ApartmentId | '' }

export function ContactSection({ selectedApartment }: ContactSectionProps) {
  return (
    <section id="contacto" className="contact-section">
      <div className="container contact-layout">
        <div className="contact-copy reveal">
          <p className="eyebrow">Preventa activa</p>
          <h2>Conozca las unidades disponibles</h2>
          <p>Solicite información sobre precios, distribuciones, patios, parqueos y proceso de preventa.</p>
          <div className="contact-direct"><span>WhatsApp de ventas</span><a href={`https://wa.me/${contactConfig.whatsapp}`} target="_blank" rel="noreferrer">{contactConfig.whatsappDisplay} ↗</a></div>
        </div>
        <ContactForm key={selectedApartment || 'none'} selectedApartment={selectedApartment} />
      </div>
    </section>
  )
}
