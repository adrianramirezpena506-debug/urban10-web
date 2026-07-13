import { useState } from 'react'
import { buildWhatsAppUrl } from '../lib/whatsapp'
import type { ApartmentId, LeadFormData } from '../types/project'

type FormErrors = Partial<Record<keyof LeadFormData, string>>

interface ContactFormProps {
  selectedApartment: ApartmentId | ''
}

const emptyForm: LeadFormData = {
  name: '', phone: '', email: '', apartment: '', interest: '', message: '', consent: false,
}

function validate(data: LeadFormData): FormErrors {
  const errors: FormErrors = {}
  if (data.name.trim().length < 2) errors.name = 'Ingrese su nombre.'
  if (!/^[+\d][\d\s()-]{6,18}$/.test(data.phone.trim())) errors.phone = 'Ingrese un teléfono válido.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = 'Ingrese un correo válido.'
  if (!data.apartment) errors.apartment = 'Seleccione una opción.'
  if (!data.interest) errors.interest = 'Seleccione su interés principal.'
  if (!data.consent) errors.consent = 'Debe aceptar el uso de sus datos para esta consulta.'
  return errors
}

export function ContactForm({ selectedApartment }: ContactFormProps) {
  const [form, setForm] = useState<LeadFormData>(() => ({ ...emptyForm, apartment: selectedApartment }))
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const update = <K extends keyof LeadFormData>(key: K, value: LeadFormData[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
    setStatus('idle')
  }

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    const nextErrors = validate(form)
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      const first = Object.keys(nextErrors)[0]
      document.getElementById(first)?.focus()
      return
    }
    setStatus('loading')
    window.setTimeout(() => {
      setStatus('success')
      window.open(buildWhatsAppUrl(form), '_blank', 'noopener,noreferrer')
    }, 350)
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Nombre</label>
          <input id="name" autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="phone">Teléfono</label>
          <input id="phone" type="tel" autoComplete="tel" placeholder="8888 8888" value={form.phone} onChange={(e) => update('phone', e.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} />
          {errors.phone && <span id="phone-error" className="field-error">{errors.phone}</span>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" type="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
      </div>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="apartment">Tipo de apartamento</label>
          <select id="apartment" value={form.apartment} onChange={(e) => update('apartment', e.target.value as LeadFormData['apartment'])} aria-invalid={Boolean(errors.apartment)} aria-describedby={errors.apartment ? 'apartment-error' : undefined}>
            <option value="">Seleccione</option>
            <option value="one-bedroom">1 habitación</option>
            <option value="two-bedroom">2 habitaciones</option>
            <option value="unsure">Aún no estoy seguro</option>
          </select>
          {errors.apartment && <span id="apartment-error" className="field-error">{errors.apartment}</span>}
        </div>
        <div className="field">
          <label htmlFor="interest">Interés principal</label>
          <select id="interest" value={form.interest} onChange={(e) => update('interest', e.target.value as LeadFormData['interest'])} aria-invalid={Boolean(errors.interest)} aria-describedby={errors.interest ? 'interest-error' : undefined}>
            <option value="">Seleccione</option>
            <option value="live">Vivir</option>
            <option value="invest">Invertir</option>
          </select>
          {errors.interest && <span id="interest-error" className="field-error">{errors.interest}</span>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Mensaje <span>(opcional)</span></label>
        <textarea id="message" rows={4} placeholder="Cuéntenos qué información necesita." value={form.message} onChange={(e) => update('message', e.target.value)} />
      </div>
      <div className="consent-row">
        <input id="consent" type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} />
        <label htmlFor="consent">Autorizo el uso de estos datos únicamente para atender mi consulta sobre URBAN 10.</label>
      </div>
      {errors.consent && <span id="consent-error" className="field-error consent-error">{errors.consent}</span>}
      <button type="submit" className="button button--gold form-submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Preparando consulta…' : 'Continuar por WhatsApp'} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">Al continuar se abrirá WhatsApp con su consulta preparada. Este sitio no almacena sus datos.</p>
      {status === 'success' && <p className="form-success" role="status">Su consulta está lista. Si WhatsApp no se abrió, intente nuevamente.</p>}
    </form>
  )
}
