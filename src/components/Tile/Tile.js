import React from "react";
import styles from "./Tile.module.css";

function Tile({data}) {
    return (
        <div className={styles.tile}>
            <h1 className={styles.tileHeader}>{data.title}</h1>
            <p className={styles.tileDate}>Date: {data.year}-{data.month}</p>
            <p className={styles.tileDescription}>{data.description}</p>
            <div className={styles.tileLinkContainer}>
                <a className={styles.tileLink} href={data.url} target="_blank" rel="noreferrer">View on {data.hostedBy} <ion-icon name="open-outline"></ion-icon></a>
            </div>
        </div>
    )
}

export default Tile;