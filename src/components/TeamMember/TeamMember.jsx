import React from "react";
import "./TeamMember.css";

// Cambiamos 'imageName' por 'image'
function TeamMember({ name, title, image, children }) {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="member-photo" />
      <h3>{name}</h3>
      <p className="member-title">{title}</p>
      <p className="member-bio">{children}</p>
    </div>
  );
}

export default TeamMember;
