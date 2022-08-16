import React from "react";
import NavLateralComponent from "./components/NavLateralComponent";
import "./assets/styles.css";
import InicioComponent from "./components/InicioComponent";
import PortafolioComponent from "./components/PortafolioComponent";
import ResumenComponent from "./components/ResumenComponent";

const App = () => {
  return (
    <div>
      <NavLateralComponent />,
      <InicioComponent />,
      <PortafolioComponent />,
      <ResumenComponent />
    </div>
  );
};

export default App;
