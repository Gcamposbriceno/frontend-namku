import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contribute.css";
import PaymentButton from "../../components/PaymentButton/PaymentButton";

function Contribute() {
  useEffect(() => {
    document.title = "Ñamku - Colabora";
  }, []);
  return (
    <div className="content">
      <h1 className="page-title">Colabora</h1>
      <div className="contact-row section">
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
      <div className="contact-row section">
        <div className="contact-row-text">
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
      </div>
    </div>
  );
}

export default Contribute;
