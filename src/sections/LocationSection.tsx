const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Barrio+La+Granja+San+Pedro+de+Montes+de+Oca+Costa+Rica'

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
      <div className="map-art" aria-label="Referencia gráfica de la ubicación en Barrio La Granja">
        <span className="road road--one" /><span className="road road--two" /><span className="road road--three" />
        <div className="map-pin"><span>10</span><p><strong>URBAN 10</strong>Barrio La Granja</p></div>
        <p className="map-note">Referencia general · Consulte el mapa para navegación</p>
      </div>
    </section>
  )
}
