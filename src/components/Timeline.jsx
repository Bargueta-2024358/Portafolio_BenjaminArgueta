import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { timeline } from '../data/timeline'
import './Timeline.css'

function useIsDesktop(minWidth = 900) {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(`(min-width: ${minWidth}px)`).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`)
    const onChange = () => setIsDesktop(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [minWidth])

  return isDesktop
}

function Timeline() {
  const reduceMotion = useReducedMotion()
  const isDesktop = useIsDesktop()

  return (
    <section id="trayectoria" className="section timeline">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            Trayector<span>ia</span>
          </h2>
          <p className="section__subtitle">
            Formación y experiencia construyendo software.
          </p>
        </div>

        <ol className="timeline__list">
          {timeline.map((item, index) => {
            const fromLeft = index % 2 === 0
            let initial = { opacity: 0, y: 28 }

            if (reduceMotion) {
              initial = { opacity: 0 }
            } else if (isDesktop) {
              initial = { opacity: 0, x: fromLeft ? -48 : 48 }
            }

            return (
              <motion.li
                key={item.id}
                className={`timeline__item ${fromLeft ? 'timeline__item--left' : 'timeline__item--right'}`}
                initial={initial}
                whileInView={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, x: 0, y: 0 }
                }
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <article className="timeline__card">
                  <span className="timeline__period mono">{item.period}</span>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__desc">{item.description}</p>
                </article>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Timeline
