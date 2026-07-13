import { faqs } from '../data/project'

export function FaqAccordion() {
  return (
    <div className="faq-list">
      {faqs.map((item, index) => (
        <details key={item.question} className="faq-item reveal">
          <summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}<i aria-hidden="true" /></summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
