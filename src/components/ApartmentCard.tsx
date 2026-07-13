import type { ApartmentId, ApartmentType } from '../types/project'

interface ApartmentCardProps {
  apartment: ApartmentType
  onSelect: (id: ApartmentId) => void
}

export function ApartmentCard({ apartment, onSelect }: ApartmentCardProps) {
  return (
    <article className="apartment-card reveal">
      <div className="apartment-media">
        <img src={apartment.image} alt={apartment.imageAlt} width="1600" height="1200" loading="lazy" />
        <span className="phase-tag">{apartment.eyebrow}</span>
      </div>
      <div className="apartment-content">
        <div className="apartment-title-row">
          <div>
            <p className="eyebrow">{apartment.label}</p>
            <h3>{apartment.title}</h3>
          </div>
          <p className="apartment-price">{apartment.price}<small>Precio inicial</small></p>
        </div>
        <dl className="apartment-specs">
          <div><dt>Área</dt><dd>{apartment.area}</dd></div>
          <div><dt>Habitaciones</dt><dd>{apartment.bedrooms}</dd></div>
          <div><dt>Baños</dt><dd>{apartment.bathrooms}</dd></div>
          <div><dt>Parqueo</dt><dd>{apartment.parking}</dd></div>
        </dl>
        <ul className="feature-list">
          {apartment.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <button type="button" className="text-button" onClick={() => onSelect(apartment.id)}>
          Consultar disponibilidad <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  )
}
