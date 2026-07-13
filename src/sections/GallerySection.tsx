import { Gallery } from '../components/Gallery'
import { SectionHeading } from '../components/SectionHeading'

export function GallerySection() {
  return (
    <section id="galeria" className="section gallery-section">
      <div className="container">
        <SectionHeading eyebrow="Galería" title="Arquitectura y espacios pensados para la vida urbana" text="Explore los exteriores, interiores y distribuciones reales presentadas para el proyecto." />
        <Gallery />
      </div>
    </section>
  )
}
