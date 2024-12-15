import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="nav-container">
                <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </div>
        </>
    )
}

export default Header;