import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/reset.css';
import '../../styles/style.css';
import styles from './MobilNav.module.css';

function MobileNav() {
    return (
        <nav className={styles.mobileNavContainer}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/publications">Publications</NavLink>
        </nav>
    )
}

export default MobileNav;