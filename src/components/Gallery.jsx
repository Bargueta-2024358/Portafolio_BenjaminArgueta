import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { gallery } from '../data/gallery'
import './Gallery.css'

const LOAD_TIMEOUT_MS = 8000

function GalleryCard({ item }) {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStatus((current) => (current === 'loading' ? 'blocked' : current))
    }, LOAD_TIMEOUT_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const handleLoad = (event) => {
    try {
      const frame = event.currentTarget
      const href = frame.contentWindow?.location?.href ?? ''
      if (!href || href === 'about:blank') {
        setStatus('blocked')
        return
      }
    } catch {
      // Cross-origin frame loaded successfully (cannot inspect location).
    }
    setStatus((current) => (current === 'blocked' ? current : 'ready'))
  }

  const handleError = () => {
    setStatus('blocked')
  }

  return (
    <article className="gallery__card">
      <div className="gallery__preview">
        {status === 'loading' && (
          <div className="gallery__skeleton" aria-hidden="true">
            <span className="gallery__spinner" />
            <span className="gallery__skeleton-label mono">Cargando preview…</span>
          </div>
        )}

        {status === 'blocked' ? (
          <div className="gallery__fallback">
            <p className="gallery__fallback-title">{item.title}</p>
            <p className="gallery__fallback-text">
              La vista previa no está disponible en este sitio.
            </p>
            <a
              href={item.url}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink size={16} aria-hidden="true" />
              Ver demo en vivo
            </a>
          </div>
        ) : (
          <iframe
            src={item.url}
            title={`Vista previa de ${item.title}`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            onLoad={handleLoad}
            onError={handleError}
            className={`gallery__iframe${status === 'ready' ? ' is-ready' : ''}`}
            tabIndex={-1}
          />
        )}

        {status !== 'blocked' && (
          <div className="gallery__overlay">
            <div className="gallery__overlay-content">
              <h3 className="gallery__title">{item.title}</h3>
              <p className="gallery__caption">{item.caption}</p>
              <a
                href={item.url}
                className="btn btn--primary gallery__open"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink size={16} aria-hidden="true" />
                Abrir en vivo
              </a>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

function Gallery() {
  return (
    <section id="galeria" className="section gallery">
      <div className="container">
        <div className="section__header">
          <span className="section__index">04 (En vivo)</span>
          <h2 className="section__title">
            Galer<span>ía</span>
          </h2>
          <p className="section__subtitle">
            Previews en vivo de proyectos desplegados.
          </p>
        </div>

        <motion.ul
          className="gallery__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {gallery.map((item) => (
            <motion.li
              key={item.url}
              className="gallery__item"
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.45 }}
            >
              <GalleryCard item={item} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Gallery
