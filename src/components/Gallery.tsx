import { useMemo, useState } from 'react'
import { galleryCategories, galleryItems } from '../data/project'
import type { GalleryCategory } from '../types/project'
import { Lightbox } from './Lightbox'

export function Gallery() {
  const [category, setCategory] = useState<GalleryCategory>('Todos')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visibleItems = useMemo(() => galleryItems.filter((item) => {
    if (category === 'Todos') return true
    if (category === 'Interiores') return item.category === '1 habitación' || item.category === '2 habitaciones'
    if (category === '1 habitación') return item.category === category || item.caption.includes('1 habitación')
    if (category === '2 habitaciones') return item.category === category || item.caption.includes('2 habitaciones')
    return item.category === category
  }), [category])

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filtrar galería">
        {galleryCategories.map((item) => (
          <button key={item} type="button" className={category === item ? 'is-active' : ''} aria-pressed={category === item} onClick={() => { setCategory(item); setLightboxIndex(null) }}>
            {item}
          </button>
        ))}
      </div>
      <div className={`gallery-grid ${visibleItems.length <= 3 ? 'gallery-grid--compact' : ''}`}>
        {visibleItems.map((item, index) => (
          <button key={`${category}-${item.src}`} type="button" className={`gallery-item gallery-item--${item.orientation || 'standard'}`} onClick={() => setLightboxIndex(index)} aria-label={`Ampliar: ${item.caption}`}>
            <img src={item.src} alt={item.alt} width="1600" height="900" loading="lazy" />
            <span><small>{item.category}</small>{item.caption}</span>
          </button>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox items={visibleItems} index={lightboxIndex} onChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  )
}
