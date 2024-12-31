import React from "react";
import Tile from "../Tile/Tile";
import '../../styles/reset.css';
import '../../styles/style.css';
import styles from './Portfolio.module.css';

function Portfolio({content}) {
    return (
        <div className={styles.portfolioGridContainer}>
            {content.map((project) => (
                <Tile data={project}/>
            ))}
        </div>
    )
}

export default Portfolio;