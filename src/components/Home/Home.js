import React from "react";
import image from "../../images/branding/Eric_BN_selfie.jpg";
import Portfolio from '../Portfolio/Portfolio';
import {projects} from '../../data/displayShelf/displayShelf';
import { NavLink } from "react-router-dom";
import '../../styles/reset.css';
import '../../styles/style.css';
import styles from './Home.module.css';

function Home() {
    return (
        <>
            <section className={styles.bannerSection}>
                <div className={styles.bannerImageContainer}>
                    <img className={styles.img} src={image} alt="Selfie of Eric with the Baker-Nunn Telescope"/>
                </div>
                <div className={styles.bioSection}>
                    <h1 className={styles.name}>Eric Hess</h1>
                    <h2 className={styles.skills}>Machine Learning + Scientific Computing</h2>
                    <div className={styles.bioText}>
                        <p>I'm an aspring data scientist with a background in astrophysics, and hands-on experience analyzing complex datasets using Python, machine learning, and developer tools.</p>
                    </div>
                    <div className={styles.bioTextMobile}>
                        <p>I'm an aspring data scientist with a background in astrophysics, and hands-on experience analyzing complex datasets using Python, machine learning, and developer tools.</p>
                    </div>
                    <div className={styles.viewPortfolio}>
                            <NavLink  to="/portfolio">View Portfolio</NavLink>
                    </div>
                </div>
            </section>

            <div className={styles.displayShelf}>
                    <h1 className={styles.subheader}>Check out some of my latest work below!</h1>
                    <Portfolio content={projects}/>
                    <div className={styles.viewPortfolio}>
                        <NavLink  to="/portfolio">View Portfolio</NavLink>
                    </div>
            </div>

        </>
    )
}

export default Home;