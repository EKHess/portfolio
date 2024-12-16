import React from "react";

function Tile({project}) {
    return (
        <div className="tile">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
    )
}

export default Tile;