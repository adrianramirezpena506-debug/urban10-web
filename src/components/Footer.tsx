import { contactConfig } from '../config/contact'
import { navigation } from '../data/project'
import { buildWhatsAppUrl } from '../lib/whatsapp'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>Proyecto residencial boutique en Barrio La Granja, San Pedro de Montes de Oca.</p>
        </div>
        <div>
          <h2>Navegación</h2>
          <div className="footer-links">{navigation.slice(0, 5).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
        </div>
        <div>
          <h2>Contacto</h2>
          <p>WhatsApp de ventas</p>
          <a className="footer-phone" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">{contactConfig.whatsappDisplay} ↗</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Imágenes con fines ilustrativos. Precios, disponibilidad, especificaciones y fechas estimadas pueden cambiar sin previo aviso.</p>
        <p>© {new Date().getFullYear()} URBAN 10</p>
      </div>
    </footer>
  )
}
