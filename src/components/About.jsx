import { motion } from 'framer-motion'
import {
  FiUser,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiBriefcase,
  FiBookOpen,
} from 'react-icons/fi'
import { aboutFacts } from '../data/about'
import './About.css'

const icons = {
  name: FiUser,
  age: FiCalendar,
  location: FiMapPin,
  contact: FiMail,
  experience: FiBriefcase,
  education: FiBookOpen,
}

function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="container">
        <div className="section__header">
          <span className="section__index">01 (Identidad)</span>
          <h2 className="section__title">
            Sobre <span>mí</span>
          </h2>
        </div>

        <div className="about__grid">
          <motion.div
            className="about__bio"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Mi apodo es <span className="mono accent">Elipsis</span>. Mi interés
              me genera ambición, y esa ambición se traduce en el esfuerzo y el
              empeño que le pongo a cada trabajo (sin importar el área), siempre
              tratando de dar lo mejor que puedo ofrecer.
            </p>
          </motion.div>

          <motion.aside
            className="about__card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3 className="about__card-title mono">Datos generales</h3>
            <ul className="about__facts">
              {aboutFacts.map((fact) => {
                const Icon = icons[fact.id]
                return (
                  <li key={fact.id} className="about__fact">
                    <span className="about__fact-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <div>
                      <span className="about__fact-label mono">{fact.label}</span>
                      {fact.href ? (
                        <a href={fact.href} className="about__fact-value about__fact-value--link">
                          {fact.value}
                        </a>
                      ) : (
                        <p className="about__fact-value">{fact.value}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default About
