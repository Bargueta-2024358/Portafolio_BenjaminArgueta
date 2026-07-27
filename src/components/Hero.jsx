import { motion } from 'framer-motion'
import perfil from '../assets/img/perfil.jpg'
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__media" aria-hidden="true">
        <motion.img
          src={perfil}
          alt=""
          className="hero__photo"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero__veil" />
        <div className="hero__grain" />
      </div>

      <div className="hero__frame" aria-hidden="true">
        <span className="hero__corner hero__corner--tl" />
        <span className="hero__corner hero__corner--tr" />
        <span className="hero__corner hero__corner--bl" />
        <span className="hero__corner hero__corner--br" />
      </div>

      <motion.div
        className="hero__meta mono"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span>GT (Ciudad de Guatemala)</span>
        <span>Portfolio 2026</span>
      </motion.div>

      <motion.div
        className="hero__content container"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.p
          className="hero__brand"
          initial={{ opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Elipsis
        </motion.p>

        <div className="hero__copy">
          <h1 className="hero__title">Benjamín Argueta</h1>
          <p className="hero__role mono">Desarrollador Web</p>
          <p className="hero__tagline">Usar la imaginación como arma</p>
        </div>

        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--primary">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn--ghost">
            Contactar
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#sobre-mi"
        className="hero__scroll mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="hero__scroll-line" />
        Scroll
      </motion.a>
    </section>
  )
}

export default Hero
