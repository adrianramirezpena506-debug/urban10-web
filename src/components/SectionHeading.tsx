interface SectionHeadingProps {
  eyebrow: string
  title: string
  text?: string
  inverse?: boolean
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, text, inverse = false, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align} ${inverse ? 'section-heading--inverse' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  )
}
