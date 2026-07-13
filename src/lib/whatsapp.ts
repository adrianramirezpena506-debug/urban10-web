import { contactConfig } from '../config/contact'
import type { LeadFormData } from '../types/project'

const apartmentLabels: Record<Exclude<LeadFormData['apartment'], ''>, string> = {
  'one-bedroom': 'Apartamento de 1 habitación',
  'two-bedroom': 'Apartamento de 2 habitaciones',
  unsure: 'Aún no estoy seguro',
}

const interestLabels: Record<Exclude<LeadFormData['interest'], ''>, string> = {
  live: 'Vivir',
  invest: 'Invertir',
}

export const defaultWhatsAppMessage =
  'Hola, me interesa recibir información sobre URBAN 10. Quisiera conocer la disponibilidad y condiciones de los apartamentos.'

export function buildWhatsAppUrl(data?: Partial<LeadFormData>) {
  const lines = [defaultWhatsAppMessage]

  if (data?.name) lines.push(`Nombre: ${data.name}`)
  if (data?.apartment) lines.push(`Tipo: ${apartmentLabels[data.apartment]}`)
  if (data?.interest) lines.push(`Interés: ${interestLabels[data.interest]}`)
  if (data?.phone) lines.push(`Teléfono: ${data.phone}`)
  if (data?.email) lines.push(`Correo: ${data.email}`)
  if (data?.message) lines.push(`Mensaje: ${data.message}`)

  return `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
}
