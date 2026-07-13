import { phases } from '../data/project'

export function PhasesSection() {
  return (
    <section className="section phases-section">
      <div className="container phases-layout">
        <div className="phases-heading reveal">
          <p className="eyebrow">Avance del proyecto</p>
          <h2>Dos fases, una misma visión residencial</h2>
          <p>Ambas fases se encuentran en preventa activa.</p>
        </div>
        <div className="timeline">
          {phases.map((phase) => (
            <article key={phase.number} className="timeline-item reveal">
              <span>{phase.number}</span>
              <div><p className="status-dot">{phase.status}</p><h3>{phase.title}</h3><p>{phase.delivery}</p></div>
            </article>
          ))}
          <p className="timeline-disclaimer">Las fechas son estimadas y pueden ajustarse según el avance de obra, permisos y condiciones propias del desarrollo.</p>
        </div>
      </div>
    </section>
  )
}
