import React from "react";
import "./styles.css";

const ContactoComponent =()=>{
    return(
        <div id="contacto" className="position-relative">
            <h1 className="titulo-contacto">Contacto</h1>
            <div className="row">
                <form className="col-5 position-relative formulario-contacto" action="">
                    <label className="form-label" htmlFor="nombre">Nombre</label>
                    <input className="form-control mb-4" type="text" placeholder="Ingrese su nombre"/>
                    <label className="form-label" htmlFor="correo">Correo</label>
                    <input className="form-control mb-4" type="correo" placeholder="ejemplo@ejemplo.com"/>
                    <label className="form-label" htmlFor="asunto">Asunto</label>
                    <input className="form-control mb-4" type="text"/>
                    <label className="form-label" htmlFor="mensaje">Mensaje</label>
                    <textarea className="form-control" name="mensaje" id="textarea" cols="30" rows="10"
                        placeholder="Escriba su mensaje aquí..."/>
                    <div className="d-grid mt-4">
                        <button className="boton-enviar" type="button">Enviar</button>
                     </div>
                </form>
            </div>
        </div>
        
)}

export default ContactoComponent;