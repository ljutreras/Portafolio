import React from "react";
import "./styles.css";

const ResumenComponent = () => {
  return (
    <div id="resumen" className="position-relative min-vh-100">
      <div className="cv">
        <h1 className="titulo-resumen">Resumen</h1>
        <p className="resumen-parrafo">
          Desarrollador Full Stack Java Jr, busco especializarme en el área de
          investigación y desarrollo, en mi experiencia, he realizado el rol de
          líder en trabajo de equipo, me especializo en el área de orientación
          al detalle y código limpio como también en habilidades técnicas como
          lo es Java, Spring Boot, Html y CSS.
        </p>
        <div className="row">
          <div className="resumen-left position-relative col-lg-6">
            <h1 className="mb-5">Estudio</h1>
            <h2>
              <strong>Generation Chile</strong>
            </h2>
            <p> Bootcamp Desarrollador FullStack Java Junior</p>

            <h3 className="mt-5">Frontend</h3>
            <ul className="ms-5 mb-4">
              <li>Desarrollo frontend con REACT</li>
              <li>Manejo de HTML5 y CSS3</li>
              <li>Diseño con BOOTSTRAP</li>
              <li>JavaScript</li>
            </ul>
            <h3>Backend</h3>
            <ul className="ms-5 mb-4">
              <li>Diseño e implementación de algoritmos JAVA.</li>
              <li>Desarrollo de REST API utilizando Spring Boot</li>
              <li>Integración con base de datos utilizando JPA</li>
              <li>Manejo de SQL (MYSQL)</li>
            </ul>
            <h3>Otras herramientas</h3>
            <ul className="ms-5 mb-4">
              <li>Versionamiento de código con Git en Github</li>
              <li>Metodologías ágiles SCRUM (Trello)</li>
              <li>Manejo de IDE (INTELLIJ IDEA, VSCode)</li>
              <li>DBEAVER (MYSQL)</li>
              <li>Linux (Ubuntu 20.04.4)</li>
            </ul>
          </div>
          <div className="resumen-right position-relative col-lg-6">
            <h1 className="mb-5">Laboral</h1>
            <h2 className="mt-4 cic">
              <strong>CIC S.A.</strong>
            </h2>
            <p> Operario de produccion</p>
            <h3 className="mt-3">Actividad</h3>
            <p className="ms-5 mb-5">
              Fabricación de estructuras de madera de una cama, se promueve el
              trabajo en equipo, la mejora continua de la calidad de las bases
              fabricadas, ademas de la orientación al detalle y el orden de
              trabajo para una labor eficiente.
            </p>
            <h2 className="mt-5 grunenthal">
              <strong>GRUPO GRÜNENTHAL</strong>
            </h2>
            <p> Operario de produccion II</p>
            <h3 className="mt-3">Actividad</h3>
            <p className="ms-5 mb-4">
              Fabricación de productos farmacéuticos, se trabaja en base a la
              orientación al detalle debido al peso, dureza, humedad, entre
              otros. Se adquiere habilidad de trabajo en equipo debido al
              proceso de fabricación, la confianza y honestidad en la medición
              de productos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumenComponent;
