import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import InstagramCarousel from "../../components/InstagramCarousel/InstagramCarousel.jsx";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./HomePage.css";

import hero1 from "../../assets/img/mt-1475-home-header-bg.jpg";
import campanaImg from "../../assets/2LucaxlaFauna_Mesa de trabajo 1 copia 2.png";
import hero3 from "../../assets/Fotos para web/_AGS2697.jpg";
import zorrilloImg from "../../assets/Fotos para web/_AGS5398.jpg";
import penguinImg from "../../assets/Fotos para web/_AGS4888.jpg";

function HomePage() {
  useEffect(() => {
    document.title = "Ñamku - Inicio";
  }, []);

  return (
    <div className="content home-page">
      <div className="hero-wrapper">
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
            <Link to="/colabora">
              <img
                src={campanaImg}
                alt="Nature 2"
                className="slide-bg-no-anim"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide className="slide-content">
            <img src={hero3} alt="Nature 3" className="slide-bg" />
            <div className="hero-dark-tint"></div>
            <div className="slide-text-container">
              <h2>Conoce quiénes somos</h2>
              <button className="btn-call-to-action">
                <Link to="/nosotros">Nosotros</Link>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="section">
        <h3>Nuestra Motivación</h3>
        <h2>Rescate y la Rehabilitación</h2>
        <p>
          El desarrollo constante en las áreas de la agroindustria, extracción y
          procesamiento de combustibles, minería, forestal, construcción, etc.
          generan, inevitablemente, cambios en el medio ambiente y en los
          diversos ecosistemas que lo forman. Estos cambios, finalmente
          repercuten en las poblaciones de fauna nativa que en ellos habitan,
          generando migraciones temporales o permanentes y, en casos más
          extremos, la desaparición en dichas áreas geográficas. A las acciones
          generadas es fundamental crear una acción que permita mitigar estos
          cambios, con la finalidad de hacer compatibles el desarrollo con la
          perpetuación de las diversas especies existentes en nuestro país.
        </p>
      </div>
      <div className="alt-bg">
        <div className="section">
          <h2>¿Qué Hacemos?</h2>
          <h3>
            Comienza el invierno y una hembra de zorro culpeo recorre el bosque
            y los cerros en busca de su alimento.
          </h3>
          <p>
            Durante el atardecer ha hecho varios intentos de cazar una presa,
            pero una grave lesión en una de sus patas, causada por una trampa
            para conejos, le impide lograrlo.
          </p>
        </div>
        <img className="section-img" src={zorrilloImg} alt="imagen" />
      </div>
      <InstagramCarousel />
      <div className="row">
        <div className="section">
          <h2>Colabora con Nosotros</h2>
          <h3>
            Regularmente, organizamos actividades abiertas para nuestros
            visitantes.
          </h3>
          <p>
            Para todos estos eventos necesitamos de tu ayuda colaborando en
            voluntariado, recursos materiales o recursos financieros.
          </p>
          <button className="btn-call-to-action">
            <Link to="/colabora">Colabora</Link>
          </button>
        </div>
        <img className="section-img" src={penguinImg} alt="imagen" />
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

export default HomePage;
