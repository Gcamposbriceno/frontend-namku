import React from "react";
import "./TeamMember.css";

function TeamMember({ name, title, image, children }) {
  return (
    <div className="team-member-card">
      <div className="member-img-wrapper">
        <img src={image} alt={name} className="member-photo" />
      </div>
      <div className="member-content">
        <h3>{name}</h3>
        {title && <span className="member-role">{title}</span>}
        <p className="member-bio">{children}</p>
      </div>
    </div>
  );
}

export default TeamMember;
