import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <motion.div
           initial={{ rotateZ: 0, transition: { duration: 0.3 } }} 
           whileHover={{ rotateZ: 1, transition: { duration: 0.3 } }}
        >
        <NavLink to="/Accueil">
        <div className="nav-title">Romain S.</div>
        </NavLink>
        </motion.div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <ul className="nav-list">

      <motion.div
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.07 } }}
        initial={{ scale: 1, transition: { duration: 0.3 } }}
      >
        <NavLink to="/Compétences">
          <li>Compétences</li>
        </NavLink>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
         whileTap={{ scale: 0.9, transition: { duration: 0.07 } }}
         initial={{ scale: 1, transition: { duration: 0.3 } }}
        >
        <NavLink to="/Projet">
          <li>Projets</li>
        </NavLink>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
         whileTap={{ scale: 0.9, transition: { duration: 0.07 } }}
         initial={{ scale: 1, transition: { duration: 0.3 } }}
        >
        <NavLink to="/Accueil">
        <li>Contact</li>
        </NavLink>
        </motion.div>
      </ul>
    </nav>
  );
};

export default Navbar;
