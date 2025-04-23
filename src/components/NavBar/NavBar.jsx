import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">The Dragon Ball API</h1>
      <div className="nav-links">
        <Link to={"/"} className="nav-link">
          <button className="nav-button">Inicio</button>
        </Link>
        <Link to={"/masculino"} className="nav-link">
          <button className="nav-button">Masculino</button>
        </Link>
        <Link to={"/femenino"} className="nav-link">
          <button className="nav-button">Femenino</button>
        </Link>
        <Link to={"/details"} className="nav-link">
          <button className="nav-button">Acerca De</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
