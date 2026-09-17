import type { ApartmentType, FaqItem, GalleryCategory, GalleryItem, ProjectPhase } from '../types/project'

export const navigation = [
  { label: 'Proyecto', href: '#proyecto' },
  { label: 'Apartamentos', href: '#apartamentos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Preguntas frecuentes', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
]

export const apartments: ApartmentType[] = [
  {
    id: 'one-bedroom',
    label: '1 habitación',
    eyebrow: 'Fase 1',
    title: 'Esencial, flexible y bien resuelto',
    area: 'Aprox. 50 m²',
    bedrooms: '1 habitación',
    bathrooms: '1.5 baños',
    parking: '1 parqueo',
    price: 'Desde $127,000',
    delivery: 'Septiembre 2026',
    image: '/assets/urban10/floorplans/one-bedroom-patio-overview.webp',
    imageAlt: 'Distribución tridimensional del apartamento de una habitación con patio privado opcional',
    features: ['Segundo parqueo opcional', 'Patio privado en unidades seleccionadas', 'Entrega estimada: septiembre 2026'],
  },
  {
    id: 'two-bedroom',
    label: '2 habitaciones',
    eyebrow: 'Fase 2',
    title: 'Más espacio para compartir y crecer',
    area: 'Aprox. 72 m²',
    bedrooms: '2 habitaciones',
    bathrooms: '2 baños completos',
    parking: '1 parqueo',
    price: 'Desde $168,000',
    delivery: 'Junio 2027',
    image: '/assets/urban10/floorplans/two-bedroom-axonometric.webp',
    imageAlt: 'Distribución tridimensional del apartamento de dos habitaciones',
    features: ['Segundo parqueo opcional', 'Patio privado en unidades seleccionadas', 'Entrega estimada: junio 2027'],
  },
]

export const galleryCategories: GalleryCategory[] = ['Todos', 'Exteriores', 'Interiores', '1 habitación', '2 habitaciones', 'Distribuciones']

export const galleryItems: GalleryItem[] = [
  { src: '/assets/urban10/exteriors/hero-frontal.webp', alt: 'Vista frontal de los dos edificios de URBAN 10', caption: 'Arquitectura contemporánea', category: 'Exteriores', orientation: 'wide' },
  { src: '/assets/urban10/exteriors/aerial-overview.webp', alt: 'Vista aérea del conjunto residencial URBAN 10', caption: 'Conjunto residencial', category: 'Exteriores', orientation: 'wide' },
  { src: '/assets/urban10/exteriors/one-bedroom-building.webp', alt: 'Fachada del edificio de apartamentos de una habitación', caption: 'Fachada de Fase 1', category: 'Exteriores' },
  { src: '/assets/urban10/exteriors/project-wide.webp', alt: 'Vista amplia del acceso y edificios del proyecto', caption: 'Acceso y escala residencial', category: 'Exteriores', orientation: 'wide' },
  { src: '/assets/urban10/interiors/kitchen-one-bedroom.webp', alt: 'Cocina y espacio social del apartamento de una habitación', caption: 'Interior · 1 habitación', category: '1 habitación' },
  { src: '/assets/urban10/interiors/kitchen-dining-two-bedroom.webp', alt: 'Cocina y comedor del apartamento de dos habitaciones', caption: 'Interior · 2 habitaciones', category: '2 habitaciones' },
  { src: '/assets/urban10/floorplans/one-bedroom-patio-axonometric.webp', alt: 'Vista tridimensional del apartamento de una habitación con patio', caption: 'Distribución · 1 habitación', category: 'Distribuciones', orientation: 'tall' },
  { src: '/assets/urban10/floorplans/two-bedroom-top.webp', alt: 'Planta superior del apartamento de dos habitaciones', caption: 'Distribución · 2 habitaciones', category: 'Distribuciones', orientation: 'tall' },
  { src: '/assets/urban10/floorplans/one-bedroom-top.webp', alt: 'Planta superior del apartamento de una habitación', caption: 'Distribución · 1 habitación', category: 'Distribuciones', orientation: 'tall' },
]

export const phases: ProjectPhase[] = [
  { number: '01', title: 'Apartamentos de 1 habitación', status: 'Preventa activa', delivery: 'Entrega estimada: septiembre 2026' },
  { number: '02', title: 'Apartamentos de 2 habitaciones', status: 'Preventa activa', delivery: 'Entrega estimada: junio 2027' },
]

export const faqs: FaqItem[] = [
  { question: '¿Dónde está ubicado URBAN 10?', answer: 'En Barrio La Granja, San Pedro de Montes de Oca. La referencia es de la Escuela Roosevelt, 400 metros este y 500 metros sur.' },
  { question: '¿Cuántos apartamentos tendrá el proyecto?', answer: 'URBAN 10 está compuesto por únicamente 10 apartamentos, distribuidos entre opciones de una y dos habitaciones.' },
  { question: '¿Qué tipos de apartamento están disponibles?', answer: 'El proyecto contempla apartamentos de una habitación de aproximadamente 50 m² y apartamentos de dos habitaciones de aproximadamente 72 m².' },
  { question: '¿Hay unidades con patio privado?', answer: 'Sí. Algunas unidades ofrecen patio privado. Esta opción está disponible únicamente en unidades seleccionadas y está sujeta a disponibilidad.' },
  { question: '¿Se puede adquirir un segundo parqueo?', answer: 'Existe la opción de adquirir un segundo espacio de parqueo, sujeto a disponibilidad y a las condiciones comerciales vigentes.' },
  { question: '¿Cuándo se estima la entrega?', answer: 'La Fase 1, correspondiente a apartamentos de una habitación, se estima para septiembre de 2026. La Fase 2, de dos habitaciones, se estima para junio de 2027.' },
  { question: '¿Los precios pueden cambiar?', answer: 'Sí. Los precios publicados son precios iniciales de referencia y pueden cambiar sin previo aviso, al igual que la disponibilidad y las especificaciones.' },
  { question: '¿Cómo puedo consultar disponibilidad?', answer: 'Puede completar el formulario de esta página o escribir directamente al WhatsApp de ventas +506 8875 3840.' },
]
