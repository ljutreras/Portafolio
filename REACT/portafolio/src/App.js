import React from "react";
import "./assets/styles.css";
import NavLateralComponent from "./components/Navbar/NavLateralComponent";
import InicioComponent from "./components/Inicio/InicioComponent";
import PortafolioComponent from "./components/Portafolio/PortafolioComponent";
import ResumenComponent from "./components/Resumen/ResumenComponent";
import ContactoComponent from "./components/Contacto/ContactoComponent";

const App = () => {
  return (
    <>
      <NavLateralComponent />,
      <InicioComponent />,
      <PortafolioComponent />,
      <ResumenComponent />,
      <ContactoComponent />
    </>
  );
};

export default App;
