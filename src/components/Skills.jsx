import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <div className="section__header">
          <span className="section__index">02 (Stack)</span>
          <h2 className="section__title">
            Habili<span>dades</span>
          </h2>
          <p className="section__subtitle">
            Tecnologías con las que trabajo y sigo profundizando.
          </p>
        </div>

        <ul className="skills__list">
          {skills.map((skill, index) => (
            <li key={skill.name} className="skills__item">
              <div className="skills__meta">
                <span className="skills__name mono">{skill.name}</span>
                <span className="skills__percent mono">{skill.percent}%</span>
              </div>
              <div className="skills__track" role="presentation">
                <motion.div
                  className="skills__fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.06,
                    ease: 'easeOut',
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
