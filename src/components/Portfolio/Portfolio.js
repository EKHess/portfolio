import React from "react";
import Tile from "../Tile/Tile";
import '../../styles/reset.css';
import '../../styles/style.css';
import styles from './Portfolio.module.css';

function Portfolio({label, content}) {
    return (
        <>
            <h1 className={styles.portfolioHeader}>{label}</h1>
            <div className={styles.portfolioGridContainer}>
                {content.map((project) => (
                    <Tile data={project}/>
                ))}
            </div>
        </>
    )
}

export default Portfolio;