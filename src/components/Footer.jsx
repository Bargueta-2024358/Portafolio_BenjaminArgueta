import { FiArrowUp } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__info">
          <p className="footer__meta">
            Ciudad de Guatemala · Desarrollador web
          </p>
          <p className="footer__copy">
            © {year} Benjamín Elí Argueta Caal
          </p>
        </div>

        <a href="#inicio" className="footer__top btn btn--ghost">
          <FiArrowUp size={16} aria-hidden="true" />
          Volver arriba
        </a>
      </div>
    </footer>
  )
}

export default Footer
