export type ApartmentId = 'one-bedroom' | 'two-bedroom'

export interface ApartmentType {
  id: ApartmentId
  label: string
  title: string
  eyebrow: string
  area: string
  bedrooms: string
  bathrooms: string
  parking: string
  price: string
  delivery: string
  image: string
  imageAlt: string
  features: string[]
}

export type GalleryCategory = 'Todos' | 'Exteriores' | 'Interiores' | '1 habitación' | '2 habitaciones' | 'Distribuciones'

export interface GalleryItem {
  src: string
  alt: string
  caption: string
  category: Exclude<GalleryCategory, 'Todos'>
  orientation?: 'wide' | 'tall'
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ProjectPhase {
  number: string
  title: string
  status: string
  delivery: string
}

export interface LeadFormData {
  name: string
  phone: string
  email: string
  apartment: ApartmentId | 'unsure' | ''
  interest: 'live' | 'invest' | ''
  message: string
  consent: boolean
}
