import { motion, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/skills'
import './Skills.css'

const RADIUS = 42
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function levelFromPercent(percent) {
  if (percent >= 85) return 'Avanzado'
  if (percent >= 70) return 'Sólido'
  return 'Intermedio'
}

function SkillStat({ skill, index }) {
  const [value, setValue] = useState(0)
  const [inView, setInView] = useState(false)
  const started = useRef(false)
  const offset = CIRCUMFERENCE - (CIRCUMFERENCE * skill.percent) / 100

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const controls = animate(0, skill.percent, {
      duration: 1.15,
      delay: index * 0.07,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, skill.percent, index])

  return (
    <motion.li
      className="skills__stat"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onViewportEnter={() => setInView(true)}
    >
      <div className="skills__ring-wrap" aria-hidden="true">
        <svg className="skills__ring" viewBox="0 0 100 100">
          <circle className="skills__ring-track" cx="50" cy="50" r={RADIUS} />
          <motion.circle
            className="skills__ring-value"
            cx="50"
            cy="50"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={inView ? { strokeDashoffset: offset } : undefined}
            transition={{
              duration: 1.15,
              delay: index * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </svg>
        <div className="skills__value">
          <span className="skills__number mono">{value}</span>
          <span className="skills__unit mono">%</span>
        </div>
      </div>

      <div className="skills__info">
        <h3 className="skills__name">{skill.name}</h3>
        <span className="skills__level mono">{levelFromPercent(skill.percent)}</span>
      </div>
    </motion.li>
  )
}

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
            Nivel de dominio por tecnología (estadística personal).
          </p>
        </div>

        <ul className="skills__grid">
          {skills.map((skill, index) => (
            <SkillStat key={skill.name} skill={skill} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
