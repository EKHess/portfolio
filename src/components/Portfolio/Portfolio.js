import React from "react";
import Tile from "../Tile/Tile";
// import { projects } from "../../data/portfolio/portfolio";

function Portfolio({content}) {
    return (
        <div className="portfolio-grid-container">
            {content.map((project) => (
                <Tile data={project}/>
            ))}
        </div>
    )
}

export default Portfolio;