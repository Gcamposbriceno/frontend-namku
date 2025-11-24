import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./SocialMediaCard.css";

function SocialMediaCard() {
  const HandleClick = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
    link.remove();
  };

  return (
    <div className="social-media-card">
      <div className="up">
        <button
          className="card1"
          onClick={() => HandleClick("https://instagram.com/fundacion_namku")}
        >
          <FaInstagram size={30} className="instagram-card" />
        </button>
        <button
          className="card2"
          onClick={() => HandleClick("https://wa.me/56912345678")}
        >
          <FaWhatsapp size={30} className="whatsapp-card" />
        </button>
      </div>
      <div className="down">
        <button
          className="card3"
          onClick={() =>
            HandleClick(
              "https://www.google.com/maps/search/?api=1&query=Parque+Ecologico+La+Isla,+Concón"
            )
          }
        >
          <FaMapMarkerAlt size={30} className="maps-card" />
        </button>
        <button
          className="card4"
          onClick={() => HandleClick("mailto:info@namkufundacion.cl")}
        >
          <FaEnvelope size={30} className="email-card" />
        </button>
      </div>
    </div>
  );
}

export default SocialMediaCard;
