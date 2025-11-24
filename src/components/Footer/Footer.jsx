import { Link } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";
import logo from "../../assets/white.svg";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column brand-column">
          <div className="footer-logo">
            <img src={logo} alt="Ñamku Logo" />
            <h3>Fundación Ñamku</h3>
          </div>
          <p className="footer-desc">
            Rehabilitación y conservación de la fauna silvestre nativa.
          </p>
          <div className="contact-info">
            <div className="contact-links">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Parque+Ecologico+La+Isla,+Concón"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link map"
              >
                <FaMapMarkerAlt size={20} />
                <span>Parque Ecológico La Isla, Concón</span>
              </a>
              <a
                href="mailto:info@namkufundacion.cl"
                className="icon-link email"
              >
                <FaEnvelope size={20} />
                <span>info@namkufundacion.cl</span>
              </a>
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link whatsapp"
                aria-label="Envíanos un WhatsApp"
              >
                <FaWhatsapp size={24} />
                <span>+56 9 1234 5678</span>
              </a>

              <a
                href="https://instagram.com/fundacion_namku"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link instagram"
                aria-label="Síguenos en Instagram"
              >
                <FaInstagram size={24} />
                <span>@fundacion_namku</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-column links-column">
          <h4>Navegación</h4>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/colabora">Colabora</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column form-column">
          <ContactForm />
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Fundación Ñamku. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
