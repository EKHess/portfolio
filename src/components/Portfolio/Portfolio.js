import React from "react";
import Tile from "../Tile/Tile";
import { projects } from "../../data/portfolio/portfolio";

function Portfolio() {
    return (
        <div className="portfolio-grid-container">
            {projects.map((project) => (
                <Tile project={project}/>
            ))}
        </div>
    )
}

export default Portfolio;