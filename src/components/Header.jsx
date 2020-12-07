import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="navbar-container">
      <nav>
        <ul className="navbar">
          <li>
            <div className="pokeLogo"></div>
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
          <li>
            <Link to="/panel">Panel</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
