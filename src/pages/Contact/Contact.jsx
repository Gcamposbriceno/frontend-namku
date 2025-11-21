import React, { useEffect } from "react";
import SocialMediaCard from "../../components/SocialMediaCard/SocialMediaCard.jsx";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    document.title = "Ñamku - Contacto";
  }, []);
  return (
    <div className="content">
      <h1 className="page-title">Contacto</h1>
      <SocialMediaCard />
    </div>
  );
}

export default Contact;
