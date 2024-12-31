import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/reset.css';
import '../../styles/style.css';

function MobileNav() {
    return (
        <nav>
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/publications">Publications</NavLink>
        </nav>
    )
}

export default MobileNav;