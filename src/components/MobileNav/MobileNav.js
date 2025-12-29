import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/reset.css';
import '../../styles/style.css';
import styles from './MobilNav.module.css';

function MobileNav() {
    return (
        <nav className={styles.mobileNavContainer}>
            <NavLink className={styles.mobileNavLink} to="/home">Home</NavLink>
            <NavLink className={styles.mobileNavLink} to="/portfolio">Portfolio</NavLink>
            <NavLink className={styles.mobileNavLink} to="/publications">Publications</NavLink>
        </nav>
    )
}

export default MobileNav;