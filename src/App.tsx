import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { contactConfig } from './config/contact'
import { useReveal } from './hooks/useReveal'
import { buildWhatsAppUrl } from './lib/whatsapp'
import { ApartmentsSection } from './sections/ApartmentsSection'
import { ContactSection } from './sections/ContactSection'
import { FaqSection } from './sections/FaqSection'
import { GallerySection } from './sections/GallerySection'
import { Hero } from './sections/Hero'
import { LocationSection } from './sections/LocationSection'
import { PatioSection } from './sections/PatioSection'
import { PhasesSection } from './sections/PhasesSection'
import { ProjectIntro } from './sections/ProjectIntro'
import { ValueSection } from './sections/ValueSection'
import type { ApartmentId } from './types/project'

function App() {
  const [selectedApartment, setSelectedApartment] = useState<ApartmentId | ''>('')
  useReveal()

  useEffect(() => {
    if (!contactConfig.publicUrl) return
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = contactConfig.publicUrl
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const target = document.querySelector(hash)
    if (!target) return
    window.requestAnimationFrame(() => target.scrollIntoView())
  }, [])

  const selectApartment = (id: ApartmentId) => {
    setSelectedApartment(id)
    window.setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <ProjectIntro />
        <ApartmentsSection onSelect={selectApartment} />
        <PatioSection />
        <GallerySection />
        <LocationSection />
        <PhasesSection />
        <ValueSection />
        <FaqSection />
        <ContactSection selectedApartment={selectedApartment} />
      </main>
      <Footer />
      <a className="floating-whatsapp" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label={`Consultar por WhatsApp al ${contactConfig.whatsappDisplay}`}>
        <span aria-hidden="true">W</span><i>WhatsApp de ventas<small>{contactConfig.whatsappDisplay}</small></i>
      </a>
      <div className="mobile-contact-bar">
        <a href="#contacto">Solicitar información</a>
        <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">WhatsApp ↗</a>
      </div>
    </>
  )
}

export default App
