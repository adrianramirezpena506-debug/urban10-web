import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { GalleryItem } from '../types/project'

interface LightboxProps {
  items: GalleryItem[]
  index: number
  onChange: (index: number) => void
  onClose: () => void
}

export function Lightbox({ items, index, onChange, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const current = items[index]
  const previous = () => onChange((index - 1 + items.length) % items.length)
  const next = () => onChange((index + 1) % items.length)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length)
      if (event.key === 'ArrowRight') onChange((index + 1) % items.length)
      if (event.key === 'Tab') {
        const dialog = document.querySelector<HTMLElement>('.lightbox')
        const focusable = dialog?.querySelectorAll<HTMLElement>('button:not([disabled])')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [index, items.length, onChange, onClose])

  if (!current) return null

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Galería: ${current.caption}`} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <button ref={closeRef} className="lightbox-close" type="button" onClick={onClose} aria-label="Cerrar galería">Cerrar <span aria-hidden="true">×</span></button>
      <button className="lightbox-nav lightbox-nav--prev" type="button" onClick={previous} aria-label="Imagen anterior">←</button>
      <figure
        className="lightbox-figure"
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={(event) => {
          if (touchStart === null) return
          const delta = event.changedTouches[0].clientX - touchStart
          if (Math.abs(delta) > 45) {
            if (delta > 0) previous()
            else next()
          }
          setTouchStart(null)
        }}
      >
        <img src={current.src} alt={current.alt} />
        <figcaption>
          <span>{current.caption}</span>
          <span>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
        </figcaption>
      </figure>
      <button className="lightbox-nav lightbox-nav--next" type="button" onClick={next} aria-label="Imagen siguiente">→</button>
    </div>,
    document.body,
  )
}
