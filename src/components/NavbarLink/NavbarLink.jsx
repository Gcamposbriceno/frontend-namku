import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarLink.css";

function NavbarLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "navbar-link active-link" : "navbar-link"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavbarLink;
