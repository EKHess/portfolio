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
                <NavLink to="/home" className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
                <NavLink to="/portfolio" className={({ isActive }) => (isActive ? styles.active : '')}>Portfolio</NavLink>
                <NavLink to="/publications" className={({ isActive }) => (isActive ? styles.active : '')}>Publications</NavLink>
            </div>
            <div className={styles.navContainerMobile}>
                <Back/>
                <NavLink to="/mobileNav"><ion-icon name="menu-outline"></ion-icon></NavLink>
            </div>
        </>
    )
}

export default Header;