import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <>
            <div className={styles.navContainerDesktop}>
                <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/publications">Publications</NavLink>
            </div>
            <div className={styles.navContainerMobile}>
                <NavLink><ion-icon name="chevron-back-outline"></ion-icon></NavLink>
                <NavLink to="/mobileNav"><ion-icon name="menu-outline"></ion-icon></NavLink>
            </div>
        </>
    )
}

export default Header;