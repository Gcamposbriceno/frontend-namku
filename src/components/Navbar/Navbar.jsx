import { useEffect, useState } from "react";
import whiteLogo from "../../assets/white.svg";
import NavbarLink from "../NavbarLink/NavbarLink";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(false);

    const handleScroll = () => {
      const heroElement = document.getElementById("hero-section");

      let threshold;

      if (heroElement) {
        threshold = heroElement.offsetHeight - 80;
      } else {
        threshold = window.innerHeight - 80;
      }

      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <nav
      className={`navbar ${
        !isHomePage || isScrolled || isOpen ? "scrolled" : "transparent"
      }`}
    >
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={whiteLogo} className="logo" alt="White logo" />
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={isOpen ? "links active" : "links"}>
        <li className="nav-item">
          <NavbarLink to="/" onClick={closeMenu}>
            Inicio
          </NavbarLink>
        </li>
        <li className="nav-item">
          <NavbarLink to="/nosotros" onClick={closeMenu}>
            Nosotros
          </NavbarLink>
        </li>
        <li className="nav-item">
          <NavbarLink to="/colabora" onClick={closeMenu}>
            Colabora
          </NavbarLink>
        </li>
        <li className="nav-item">
          <NavbarLink to="/contacto" onClick={closeMenu}>
            Contacto
          </NavbarLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
