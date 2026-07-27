import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'
import './Projects.css'

function ProjectMedia({ title, image }) {
  const [failed, setFailed] = useState(false)
  const initials = title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  if (failed || !image) {
    return (
      <div className="projects__fallback" aria-hidden="true">
        <span className="projects__fallback-initials mono">{initials}</span>
        <span className="projects__fallback-name">{title}</span>
      </div>
    )
  }

  return (
    <img
      src={image}
      alt={title}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <div className="section__header">
          <span className="section__index">05 (Trabajo)</span>
          <h2 className="section__title">
            Proyec<span>tos</span>
          </h2>
          <p className="section__subtitle">
            Aplicaciones reales con foco en producto, arquitectura y despliegue.
          </p>
        </div>

        <motion.ul
          className="projects__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {projects.map((project) => (
            <motion.li
              key={project.title}
              className="projects__card"
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              <div className="projects__media">
                <ProjectMedia title={project.title} image={project.image} />
              </div>
              <div className="projects__body">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>
                <p className="projects__learned">
                  <span className="mono">Aprendí:</span> {project.learned}
                </p>
                <ul className="projects__tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="projects__tag mono">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="projects__actions">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="btn btn--primary projects__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink size={16} aria-hidden="true" />
                      Ver demo en vivo
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      className="btn btn--ghost projects__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub size={16} aria-hidden="true" />
                      Ver en GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Projects
