import { useEffect, useState } from "react";
import whiteLogo from "../../assets/white.svg";
import NavbarLink from "../NavbarLink/NavbarLink";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(false);

    const handleScroll = () => {
      // window.innerHeight is the height of the viewport (the hero image height)
      // We subtract roughly 80px (navbar height) so it turns solid right before leaving the image
      const heroHeight = window.innerHeight - 80;

      if (window.scrollY > heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={whiteLogo} className="logo" alt="White logo" />
        </Link>
      </div>
      <ul className="links">
        <li>
          <NavbarLink to="/">Inicio</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/nosotros">Nosotros</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/colabora">Colabora</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/contacto">Contacto</NavbarLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
