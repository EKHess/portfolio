import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Back.module.css';

function Back() {

    const navigate = useNavigate();

    const goBack = () => {
        // Go back one page in memory
        navigate(-2);
    }

    return (
        <span onClick={goBack} className={styles.backBtn}>
            <ion-icon name="chevron-back-outline"></ion-icon>
        </span>
    )
}

export default Back;