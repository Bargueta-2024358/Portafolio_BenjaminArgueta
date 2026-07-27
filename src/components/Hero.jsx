import { motion } from 'framer-motion'
import perfil from '../assets/img/perfil.jpg'
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <motion.div
        className="hero__content container"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className="hero__avatar"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
        >
          <img src={perfil} alt="Benjamín Argueta" />
        </motion.div>

        <h1 className="hero__title">Benjamín Argueta</h1>
        <p className="hero__alias mono">Elipsis</p>
        <p className="hero__role">Desarrollador Web</p>
        <p className="hero__tagline">Usar la imaginación como arma</p>

        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--primary">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn--ghost">
            Contactar
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
