import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./SocialMediaCard.css";

function SocialMediaCard() {
  return (
    <div className="social-media-card">
      <div className="up">
        <button className="card1">
          <FaInstagram size={30} className="instagram-card" />
        </button>
        <button className="card2">
          <FaWhatsapp size={30} className="whatsapp-card" />
        </button>
      </div>
      <div className="down">
        <button className="card3">
          <FaMapMarkerAlt size={30} className="maps-card" />
        </button>
        <button className="card4">
          <FaEnvelope size={30} className="email-card" />
        </button>
      </div>
    </div>
  );
}

export default SocialMediaCard;
