import { ApartmentCard } from '../components/ApartmentCard'
import { SectionHeading } from '../components/SectionHeading'
import { apartments } from '../data/project'
import type { ApartmentId } from '../types/project'

interface ApartmentsSectionProps {
  onSelect: (id: ApartmentId) => void
}

export function ApartmentsSection({ onSelect }: ApartmentsSectionProps) {
  return (
    <section id="apartamentos" className="section apartments-section">
      <div className="container">
        <SectionHeading eyebrow="Apartamentos" title="Dos formas de vivir URBAN 10" text="Compare las distribuciones, precios iniciales y fechas estimadas de entrega." align="center" />
        <div className="apartments-grid">
          {apartments.map((apartment) => <ApartmentCard key={apartment.id} apartment={apartment} onSelect={onSelect} />)}
        </div>
        <p className="price-disclaimer">Precios iniciales de referencia. Disponibilidad, especificaciones y precios sujetos a cambio sin previo aviso.</p>
      </div>
    </section>
  )
}
