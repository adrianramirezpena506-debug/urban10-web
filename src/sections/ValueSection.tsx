const values = [
  ['01', 'Escala boutique', 'Solo 10 apartamentos para una experiencia residencial más privada.'],
  ['02', 'Ubicación conectada', 'San Pedro, con acceso a servicios y sectores consolidados del este.'],
  ['03', 'Distribuciones funcionales', 'Opciones de una y dos habitaciones para diferentes etapas y objetivos.'],
  ['04', 'Opciones que suman', 'Patio privado y segundo parqueo disponibles en unidades seleccionadas.'],
]

export function ValueSection() {
  return (
    <section className="section value-section">
      <div className="container">
        <div className="value-header reveal"><p className="eyebrow">Por qué URBAN 10</p><h2>Una decisión con sentido urbano</h2><p>Arquitectura moderna, ubicación estratégica y espacios resueltos para vivir o pensar a largo plazo.</p></div>
        <div className="value-grid">
          {values.map(([number, title, text]) => <article key={number} className="value-item reveal"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  )
}
