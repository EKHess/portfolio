import React from "react";

function Tile({data}) {
    return (
        <div className="tile">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <a href={data.url} target="_blank" rel="noreferrer">View on {data.hostedBy}</a>
        </div>
    )
}

export default Tile;