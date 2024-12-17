import React from "react";
import styles from "./Tile.module.css";

function Tile({data}) {
    return (
        <div className={styles.tile}>
            <h1 className={styles.tileHeader}>{data.title}</h1>
            <p>Date: {data.year}-{data.month}</p>
            <p>{data.description}</p>
            <a href={data.url} target="_blank" rel="noreferrer">View on {data.hostedBy}</a>
        </div>
    )
}

export default Tile;