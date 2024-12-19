import React from "react";
import { NavLink } from "react-router-dom";

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