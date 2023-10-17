import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <span>Romain S.</span>
            <ul>
                <NavLink to="/skill">
                    <li>Compétences</li>
                </NavLink>
                <NavLink to="/Project">
                    <li>Projets</li>
                </NavLink>
                    <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;