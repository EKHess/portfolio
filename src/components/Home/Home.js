import React from "react";
import image from "./Eric_BN_selfie.jpg";
import './home.module.css';

function Home() {
    return (
        <>
            <section className="banner-section">
                <div className="image-container">
                    <img src={image} alt="Selfie of Eric with the Baker-Nunn Telescope"/>
                </div>
                <div id="portfolio-pitch">
                    <h1>Eric Hess</h1>
                    <h2>Astrophysicist | Full-Stack Engineer</h2>
                    <p>Bridging astrophysics and the magic of full-stack developement. My work has sharpened my ability to handle large datasets, write efficient algorithms, and uncover insights in dynamic, data-rich environments.</p>
                    <p>Check out some of my most recent projects below!</p>
                </div>
            </section>

        </>
    )
}

export default Home;