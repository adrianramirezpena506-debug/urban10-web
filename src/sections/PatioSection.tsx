export function PatioSection() {
  return (
    <section className="patio-section">
      <div className="patio-media reveal">
        <img src="/assets/urban10/floorplans/one-bedroom-patio-axonometric.webp" alt="Distribución del apartamento de una habitación con patio privado" width="1600" height="1200" loading="lazy" />
        <span className="image-label">Unidad de 1 habitación · Referencia con patio</span>
      </div>
      <div className="patio-copy reveal">
        <p className="eyebrow">Patio privado</p>
        <h2>Un espacio exterior propio</h2>
        <p>Algunas unidades ofrecen patio privado, una alternativa ideal para quienes buscan mayor amplitud, mascotas, reuniones pequeñas o un espacio exterior dentro de la ciudad.</p>
        <div className="patio-note"><span aria-hidden="true">*</span><p>Disponible únicamente en unidades seleccionadas y sujeto a disponibilidad.</p></div>
        <a href="#contacto" className="text-button">Consultar unidades con patio <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
