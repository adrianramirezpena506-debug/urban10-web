export const contactConfig = {
  whatsapp: '50688753840',
  whatsappDisplay: '+506 8875 3840',
  email: '', // TODO: agregar correo oficial cuando esté confirmado.
  phone: '', // TODO: agregar teléfono adicional si se habilita otro canal.
  publicUrl: import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || '',
} as const
