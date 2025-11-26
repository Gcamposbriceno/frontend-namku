import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarLink.css";

function NavbarLink({ to, onClick, children }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive ? "navbar-link active-link" : "navbar-link"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavbarLink;
