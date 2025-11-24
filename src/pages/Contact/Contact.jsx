import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import InstagramCarousel from "../../components/InstagramCarousel/InstagramCarousel.jsx";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton.jsx";
import "./Contact.css";
import titleImg from "../../assets/Fotos para web/_AGS7107-2.jpg";
import wspImg from "../../assets/Fotos para web/_AGS1732.jpg";

function Contact() {
  useEffect(() => {
    document.title = "Ñamku - Contacto";
  }, []);
  return (
    <div className="content">
      <div>
        <img
          src={titleImg}
          alt="imagen de nuestro equipo"
          className="title-bg"
        />
        <div className="title-dark-tint"></div>
        <div className="page-title-container">
          <h1 className="page-title">Contacto</h1>
        </div>
      </div>
      <div className="title-break"></div>
      <div className="contact-row section">
        <div className="contact-row-text">
          <h2>Contáctanos</h2>
          <p>
            ¿Quieres conocer más de nosotros, o averiguar cómo puedes aportar a
            Fundación Ñamku? ¡Envíanos un mensaje!
          </p>
        </div>
        <div className="contact-row-action">
          <ContactForm />
        </div>
      </div>
      <div className="alt-bg">
        <InstagramCarousel />
      </div>
      <div className="row wsp-row">
        <div className="section row-child">
          <h2>Escríbenos a nuestro WhatsApp</h2>
          <WhatsAppButton />
        </div>
        <img className="section-img" src={wspImg} alt="imagen" />
      </div>
      <div className="row alt-bg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16878.976804750895!2d-71.5107447896585!3d-32.918960285285316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689c3382b6c0391%3A0xf839772547101965!2sParque%20Ecol%C3%B3gico%20La%20Isla!5e0!3m2!1ses!2scl!4v1763088271742!5m2!1ses!2scl"
          width="800"
          height="600"
          style={{ border: 0 }}
          className="map-embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="row-child">
          <h2>Visítanos</h2>
          <p>
            Parque Ecológico La Isla, Concón. Ruta F-30-E Km 1, Región de
            Valparaíso, Chile
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
