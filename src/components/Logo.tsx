interface LogoProps {
  light?: boolean
  className?: string
}

export function Logo({ light = false, className = '' }: LogoProps) {
  return (
    <span className={`logo-lockup ${light ? 'logo-lockup--light' : ''} ${className}`.trim()}>
      <img src="/assets/urban10/logo/urban10-logo.png" alt="URBAN 10" width="1009" height="213" />
    </span>
  )
}
