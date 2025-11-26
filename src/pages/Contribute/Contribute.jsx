import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contribute.css";
import PaymentButton from "../../components/PaymentButton/PaymentButton";
import titleImg from "../../assets/Fotos para web/_AGS4956.jpg";
import sponsorImg from "../../assets/Fotos para web/_AGS8472-2.jpg";

function Contribute() {
  useEffect(() => {
    document.title = "Ñamku - Colabora";
  }, []);
  return (
    <div className="content">
      <div>
        <img
          src={titleImg}
          alt="imagen de nuestro equipo"
          className="title-bg"
          style={{ objectPosition: "0% center" }}
        />
        <div className="title-dark-tint"></div>
        <div className="page-title-container">
          <h1 className="page-title">Colabora</h1>
        </div>
      </div>
      <div className="title-break"></div>
      <div className="row section">
        <div className="contact-row-text">
          <h2>Colabora con Nosotros</h2>
          <p>
            Dado que somos una fundación sin fines de lucro, todos los aportes
            son bienvenidos, ya sea a través del voluntariado, donación de
            especies (materiales de construcción, alimentos para animales,
            medicamentos, instrumentos quirúrgicos, etc.), o la manera que tú
            prefieras.
          </p>
          <p>
            ¿Quieres ayudar a Fundación Ñamku? ¡Contáctanos y cuéntanos como
            quieres colaborar!
          </p>
        </div>
        <div className="contact-row-action">
          <ContactForm />
        </div>
      </div>
      <div className="row alt-bg" id="patrocina">
        <div className="section">
          <h2>Conviértete en un Patrocinador</h2>
          <p>
            Ayúdanos a cuidar y proteger a las especies. Puedes contribuir al
            mantenimiento de las especies animales que viven en nuestra region y
            colaborar en los proyectos de investigación, conservación y
            educación en los que participamos para ayudar a proteger la vida
            silvestre amenazada.
          </p>
          <PaymentButton />
        </div>
        <img src={sponsorImg} alt="imagen de pajaro" className="section-img" />
      </div>
    </div>
  );
}

export default Contribute;
