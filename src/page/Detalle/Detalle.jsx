import React from "react";
import { Link } from "react-router-dom";
import "./Detalle.css";

const Detalle = () => {
  return (
    <div>
      <br/><br/><br/>
      <div className="detalle-container">
        <h1 className="detalle-title">Dragon Ball Z</h1>
        <div className="detalle-content">
          <p>
            Dragon Ball Z es una popular serie de anime y manga
            creada por Akira Toriyama. Es la secuela de{" "}
            Dragon Ball y se emitió por primera vez en Japón en
            1989. La serie sigue las aventuras de Goku, un
            guerrero Saiyajin, y sus amigos mientras defienden la Tierra de
            varios villanos poderosos.
          </p>

          <h2>Argumento Principal</h2>
          <p>
            La historia de Dragon Ball Z se desarrolla después de los eventos de
            Dragon Ball. Goku, ahora un adulto, enfrenta nuevos desafíos y
            enemigos que amenazan no solo su vida, sino también la de sus seres
            queridos y del planeta. La serie se divide en varias sagas,
            incluidas las sagas de Saiyajin,{" "}
            Namek, Androides, y{" "}
            Majin Boo, cada una con sus propios antagonistas y
            conflictos.
          </p>

          <h2>Temas</h2>
          <p>
            Dragon Ball Z aborda temas como la amistad, la superación personal,
            el sacrificio y la lucha entre el bien y el mal. Las batallas son
            intensas, y a menudo los personajes deben superar sus límites para
            derrotar a los enemigos.
          </p>

          <h2>Impacto Cultural</h2>
          <p>
            La serie ha tenido un impacto duradero en la cultura pop, inspirando
            numerosas adaptaciones, videojuegos, películas y merchandise. Su
            estilo de combate, personajes memorables y la frase icónica
            "¡Kamehameha!" han dejado una huella en el mundo del
            entretenimiento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
