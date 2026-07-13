const coordinates = '9.92676382643485,-84.05048519126767'
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates}`
const mapEmbedUrl = `https://www.google.com/maps?q=${coordinates}&z=17&output=embed`

export function LocationSection() {
  return (
    <section id="ubicacion" className="location-section">
      <div className="location-copy reveal">
        <p className="eyebrow">Barrio La Granja</p>
        <h2>Una ubicación estratégica en San Pedro</h2>
        <p className="location-address">De la Escuela Roosevelt, 400 metros este y 500 metros sur.</p>
        <p>Una zona consolidada para vivienda e inversión, con acceso a comercios, servicios y conexiones hacia San Pedro, Curridabat y Zapote.</p>
        <ul className="location-list">
          <li>Cercanía a universidades</li>
          <li>Acceso a comercios y servicios</li>
          <li>Conexión con sectores del este de San José</li>
        </ul>
        <a className="button button--dark" href={mapUrl} target="_blank" rel="noreferrer">Abrir ubicación en Google Maps ↗</a>
      </div>
      <div className="map-art">
        <iframe
          src={mapEmbedUrl}
          title="Ubicación de URBAN 10 en Barrio La Granja, San Pedro"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="map-label" aria-hidden="true"><strong>URBAN 10</strong><span>Barrio La Granja · San Pedro</span></div>
      </div>
    </section>
  )
}
