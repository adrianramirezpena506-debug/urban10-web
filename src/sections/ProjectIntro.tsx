import { SectionHeading } from '../components/SectionHeading'

const highlights = [
  ['10', 'apartamentos'],
  ['San Pedro', 'ubicación estratégica'],
  ['Patio', 'en unidades seleccionadas'],
  ['1 o 2', 'espacios de parqueo'],
]

export function ProjectIntro() {
  return (
    <section id="proyecto" className="section project-intro">
      <div className="container">
        <div className="intro-layout">
          <SectionHeading eyebrow="El proyecto" title="Un proyecto residencial diferente en San Pedro" />
          <div className="intro-copy reveal">
            <p className="lead">URBAN 10 combina una ubicación estratégica, arquitectura contemporánea y una escala residencial más privada.</p>
            <p>El proyecto está compuesto por únicamente 10 apartamentos, con distribuciones funcionales de una y dos habitaciones pensadas para vivir o como inversión a largo plazo.</p>
          </div>
        </div>
        <div className="highlight-rail">
          {highlights.map(([value, label], index) => (
            <div className="highlight reveal" key={label} style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}>
              <strong>{value}</strong><span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
