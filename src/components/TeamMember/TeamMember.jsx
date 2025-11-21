import React from "react";
import "./TeamMember.css";

function TeamMember({ name, title, imageName, children }) {
  return (
    <div className="team-member">
      <img src={`src/assets/equipo/${imageName}`} alt={name} />
      <h3>{name}</h3>
      <p style={{ color: "var(--color-primary)" }}>{title}</p>
      <p>{children}</p>
    </div>
  );
}

export default TeamMember;
