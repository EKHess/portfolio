import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/reset.css';
import '../../styles/style.css';
import styles from "./Header.module.css";
import Back from "../Back/Back";

function Header() {
    return (
        <>
            <div className={styles.navContainerDesktop}>
                <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/publications">Publications</NavLink>
            </div>
            <div className={styles.navContainerMobile}>
                <Back/>
                <NavLink to="/mobileNav"><ion-icon name="menu-outline"></ion-icon></NavLink>
            </div>
        </>
    )
}

export default Header;