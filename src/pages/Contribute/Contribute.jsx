import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contribute.css";
import PaymentButton from "../../components/PaymentButton/PaymentButton";
import titleImg from "../../assets/Fotos para web/_AGS4956.jpg";
import sponsorImg from "../../assets/Fotos para web/_AGS8472-2.jpg";
import introImg from "../../assets/Fotos para web/_AGS2505.jpg";

function Contribute() {
  useEffect(() => {
    document.title = "Ñamku - Colabora";
  }, []);
  return (
    <div className="content">
      <div className="page-title-container">
        <img
          src={titleImg}
          alt="imagen de nuestro equipo"
          className="title-bg"
          style={{ objectPosition: "center 70%" }}
        />
        <div className="title-dark-tint"></div>
        <h1 className="page-title">Colabora</h1>
      </div>

      <div className="row">
        <div className="row-text">
          <h2>Colabora con Fundación Ñamku</h2>
          <p>
            Somos una <b>fundación sin fines de lucro</b>, por lo que{" "}
            <b>cada aporte es fundamental</b> para seguir protegiendo la fauna
            silvestre.
          </p>
          <p>
            Puedes colaborar de distintas maneras:
            <ul>
              <li>Voluntariado</li>
              <li>
                Donación de materiales (construcción, insumos, equipamiento)
              </li>
              <li>Alimentos para animales</li>
              <li>Medicamentos e insumos veterinarios</li>
              <li>Aportes económicos</li>
            </ul>
          </p>
          <p>
            Tu ayuda se transforma directamente en{" "}
            <b>
              medicina, alimentación, infraestructura, rescate, educación y
              conservación real.
            </b>
          </p>
          <p>
            <b>
              Colabora con nosotros y sé parte activa de la protección de la
              fauna silvestre de Chile.
            </b>
          </p>
        </div>
        <img src={introImg} alt="imagen de pajaro" className="section-img" />
      </div>

      <div className="row alt-bg">
        <div className="section contact-row-text">
          <h2>¿Quieres ayudar a Fundación Ñamku?</h2>
          <p>
            Tu apoyo puede marcar la diferencia en la vida de muchas especies.
          </p>
          <p>
            <b>¡Contáctanos y cuéntanos cómo quieres colaborar!</b>
          </p>
          <p>
            Como voluntario, donante, patrocinador o aliado en la conservación
            de la fauna silvestre. Cada gesto cuenta. Cada ayuda transforma.
          </p>
        </div>
        <div className="section contact-row-action">
          <ContactForm />
        </div>
      </div>
      <div className="row" id="patrocina">
        <div className="row-text">
          <h2>Conviértete en un Patrocinador de Fundación Ñamku</h2>
          <p>
            Como patrocinador apoyas directamente el rescate, la rehabilitación,
            la investigación y la educación para proteger la fauna silvestre
            amenazada. Contribuyendo directamente al mantenimiento,
            alimentación, atención veterinaria y rehabilitación de las especies
            animales que protegemos.
          </p>
          <p>
            Tu aporte también apoya nuestros:
            <ul>
              <li>Proyectos de investigación en conservación</li>
              <li>Programas de educación ambiental</li>
              <li>Rescate y rehabilitación de fauna silvestre amenazada.</li>
            </ul>
          </p>
          <p>
            <b>
              Hazte patrocinador hoy y ayúdanos a devolverle una oportunidad a
              la naturaleza.
            </b>
          </p>
          <div className="contribute-button">
            <PaymentButton />
          </div>
        </div>
        <img src={sponsorImg} alt="imagen de pajaro" className="section-img" />
      </div>
    </div>
  );
}

export default Contribute;
