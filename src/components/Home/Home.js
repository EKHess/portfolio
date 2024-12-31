import React from "react";
import image from "../../images/branding/Eric_BN_selfie.jpg";
// import '../../styles/reset.css';
import styles from './Home.module.css';

function Home() {
    return (
        <>
            <section className={styles.bannerSection}>
                <div className={styles.bannerImageContainer}>
                    <img className={styles.img} src={image} alt="Selfie of Eric with the Baker-Nunn Telescope"/>
                </div>
                <div id="portfolio-pitch">
                    <h1>Eric Hess</h1>
                    <h2>Astrophysicist | Full-Stack Engineer</h2>
                    <p>I'm passionate about building robust projects like a full-stack developer, motivated by research goals in physics and astrophysics. My work has enabled telescope operators (like me!) and researchers to handle large datasets, write efficient algorithms, and uncover insights in dynamic, data-rich environments.</p>
                    <p>Check out some of my most recent projects below!</p>
                </div>
            </section>

        </>
    )
}

export default Home;