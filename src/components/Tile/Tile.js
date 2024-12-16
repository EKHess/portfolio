import React from "react";

function Tile({project}) {
    return (
        <div className="tile">
            <h1>{project.title}</h1>
            <h2>{project.description}</h2>
        </div>
    )
}

export default Tile;