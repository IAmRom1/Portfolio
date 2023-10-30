import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <NavLink to="/Accueil">
        <div className="nav-title">Romain S.</div>
        </NavLink>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <ul className="nav-list">
        <NavLink to="/Compétences">
          <li>Compétences</li>
        </NavLink>
        <NavLink to="/Projet">
          <li>Projets</li>
        </NavLink>
        <NavLink to="/Accueil">
        <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
