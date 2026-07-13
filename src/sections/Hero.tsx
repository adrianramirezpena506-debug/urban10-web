export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src="/assets/urban10/exteriors/hero-frontal.webp" alt="Vista frontal del proyecto residencial URBAN 10" width="1600" height="900" fetchPriority="high" />
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Preventa activa <span /> San Pedro</p>
          <h1 id="hero-title">Su próximo hogar, <em>en un entorno más privado y bien ubicado</em></h1>
          <p>URBAN 10 es un desarrollo residencial boutique en Barrio La Granja, con apartamentos de una y dos habitaciones, diseño moderno y opciones con patio privado.</p>
          <div className="hero-actions">
            <a href="#apartamentos" className="button button--gold">Ver apartamentos</a>
            <a href="#contacto" className="button button--outline-light">Solicitar información</a>
          </div>
        </div>
        <div className="hero-facts" aria-label="Datos principales del proyecto">
          <span><strong>10</strong> unidades en total</span>
          <span><strong>1 y 2</strong> habitaciones</span>
          <span><strong>$127k</strong> precio inicial</span>
        </div>
      </div>
      <a href="#proyecto" className="scroll-indicator" aria-label="Continuar al proyecto"><span /> Descubra URBAN 10</a>
    </section>
  )
}
