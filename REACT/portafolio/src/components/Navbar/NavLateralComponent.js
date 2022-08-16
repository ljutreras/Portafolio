import React from "react";
import "./styles.css";

const NavLateralComponent = () => {
  return(
    <div id="nav-menu">
      <nav className="nav d-grid ms-auto align-content-center">
        <a className="nav-link text-light mb-2" href="#inicio">
          Inicio
        </a>
        <a className="nav-portafolio nav-link text-light mb-2" href="#portafolio">
          Portafolio
        </a>
        <a className="nav-resumen nav-link text-light mb-2" href="#resumen">
          Resumen
        </a>
        <a className="nav-contacto nav-link text-light mb-2" href="#contacto">
          Contacto
        </a>
      </nav>
    </div>
)};

export default NavLateralComponent;
