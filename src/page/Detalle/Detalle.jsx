import React from "react";
import { Link } from "react-router-dom";
import "./Detalle.css";

const Detalle = () => {
  return (
    <div>
      <br/><br/><br/>
      <div className="detalle-container">
        <div className="detalle-header">
          <img src="public/id_2.png" alt="Foto de desarrollador" className="detalle-imagen"/>
          <h1 className="detalle-title">Lizeth Muriel Trujillo</h1>
          </div> 
        
        <div className="detalle-content">
        <h2>Sobre mí</h2>
          <p>
          Soy estudiante de Ingeniería de Sistemas que esta aprendiendo por el desarrollo
          web y la creación de aplicaciones modernas mediante el apoyo y enseñanza del profesor Wilmer patiño.
           Este proyecto es una demostración de cómo construir APIs en React, una habilidad esencial
          en el desarrollo de software. Que aunque no tengo muy buenas habilidades, intento aprender.
          </p>

          <h2>Importancia de Aprender APIs</h2>
          <p>
          Aprender a construir APIs en React es fundamental para cualquier
          ingeniero de sistemas, ya que permite conectar aplicaciones con
          servicios externos, manejar datos dinámicos y crear experiencias de
          usuario interactivas. Este conocimiento es clave para desarrollar
          aplicaciones escalables y eficientes.
          </p>

        
        </div>
      </div>
    </div>
  );
};

export default Detalle;
