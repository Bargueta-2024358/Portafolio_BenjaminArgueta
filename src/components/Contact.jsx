import { motion } from 'framer-motion'
import { FiMail, FiLinkedin } from 'react-icons/fi'
import './Contact.css'

function Contact() {
  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <motion.div
          className="contact__panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section__index">06 (Contacto)</span>
          <h2 className="section__title contact__title">
            ¿Trabajamos <span>juntos?</span>
          </h2>
          <p className="contact__text">
            Si buscas alguien para un proyecto, prácticas o una colaboración,
            escríbeme. Estoy abierto a nuevas oportunidades para seguir
            aprendiendo y aportar.
          </p>

          <div className="contact__actions">
            <a
              href="mailto:neverente@gmail.com"
              className="btn btn--primary"
            >
              <FiMail size={18} aria-hidden="true" />
              neverente@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/benjamin-el%C3%AD-argueta-caal-11122941b/"
              className="btn btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
