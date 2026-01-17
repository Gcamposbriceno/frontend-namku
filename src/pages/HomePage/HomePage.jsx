import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import InstagramCarousel from "../../components/InstagramCarousel/InstagramCarousel.jsx";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./HomePage.css";

import hero1 from "../../assets/mt-1475-home-header-bg.jpg";
import campanaImg from "../../assets/3LucaxlaFauna.png";
import aboutUsHero from "../../assets/Fotos para web/DSC_3147.jpg";
import zorrilloImg from "../../assets/Fotos para web/_AGS5398.jpg";
import colaboraImg from "../../assets/Fotos para web/_AGS4948.jpg";

function HomePage() {
  useEffect(() => {
    document.title = "Ñamku - Inicio";
  }, []);

  return (
    <div className="content home-page">
      <div className="hero-wrapper" id="hero-section">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="hero-swiper"
        >
          <SwiperSlide className="slide-content">
            <img src={hero1} alt="Nature 1" className="slide-bg" />
            <div className="hero-dark-tint"></div>
            <div className="slide-text-container">
              <h1>BIENVENIDOS A ÑAMKU</h1>
              <h3>Fundación Para la Fauna Silvestre</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-content">
            <Link to="https://www.webpay.cl/company/171156?utm_source=transbank&utm_medium=portal3.0&utm_campaign=link_portal">
              <img
                src={campanaImg}
                alt="Nature 2"
                className="slide-bg-no-anim"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide className="slide-content">
            <img
              src={aboutUsHero}
              alt="Nature 3"
              className="slide-bg"
              style={{ objectPosition: "center 40%" }}
            />
            <div className="hero-dark-tint"></div>
            <div className="slide-text-container">
              <h2>Conoce quiénes somos</h2>
              <button
                className="btn-call-to-action"
                onClick={() => {
                  window.location.href = "/nosotros";
                }}
              >
                <a>Nosotros</a>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="section">
        <h3>Nuestra Motivación</h3>
        <h2>Rescate y Rehabilitación de Fauna Silvestre</h2>
        <p>
          El crecimiento de actividades humanas como la agroindustria, la
          minería, la forestación, la construcción y la extracción de recursos
          naturales, ha generado cambios profundos en los ecosistemas de nuestro
          país.
        </p>
        <p>
          Estas transformaciones impactan directamente en las poblaciones de
          fauna nativa, provocando desplazamientos forzados, pérdida de hábitat
          y, en los casos más extremos, la desaparición local de especies.
        </p>
        <p>
          Frente a este escenario, nace nuestra motivación:{" "}
          <b>proteger, rescatar y rehabilitar a la fauna silvestre</b> afectada
          por la acción del ser humano, generando acciones concretas que
          permitan mitigar estos impactos.
        </p>
        <p>
          En Fundación Ñamku trabajamos para hacer compatible el desarrollo con
          la conservación de la biodiversidad, promoviendo un equilibrio real
          entre desarrollo y biodiversidad.
        </p>
      </div>
      <div className="row alt-bg">
        <div className="section">
          <h2>¿Qué Hacemos?</h2>
          <p>
            Cada rescate es una historia de esperanza.{" "}
            <b>
              Rehabilitar y reinsertar fauna silvestre significa restaurar el
              equilibrio natural
            </b>
            , permitiendo que cada animal vuelva a ocupar el lugar que le
            corresponde dentro del frágil ecosistema del que forma parte.
          </p>
          <p>
            En Fundación Ñamku trabajamos todos los días por la{" "}
            <b>
              protección de la vida silvestre, la conservación de especies
              nativas y la educación ambiental
            </b>
            , porque cada rescate cuenta.
          </p>
        </div>
        <img className="section-img" src={zorrilloImg} alt="imagen" />
      </div>
      <InstagramCarousel />
      <div className="row">
        <div className="section">
          <h2>Colabora con Nosotros</h2>
          <h3>¡Tu ayuda puede salvar vidas!</h3>
          <p>
            Tu apoyo nos permite seguir rescatando, sanando y protegiendo a la
            fauna silvestre. Puedes colaborar como voluntario, donante o
            patrocinador.
          </p>
          <h3>Súmate hoy y ayúdanos a seguir protegiendo la vida silvestre.</h3>
          <button
            className="btn-call-to-action"
            onClick={() => {
              window.location.href = "/colabora";
            }}
          >
            <a>Colabora</a>
          </button>
        </div>
        <img className="section-img" src={colaboraImg} alt="imagen" />
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
          <h2>Nuestra Ubicación</h2>
          <p>
            Parque Ecológico La Isla, Concón. Ruta F-30-E Km 1, Región de
            Valparaíso, Chile
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
