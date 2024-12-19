import React from 'react';
import { useNavigate } from 'react-router-dom';

function Back() {

    const navigate = useNavigate();

    const goBack = () => {
        // Go back one page in memory
        navigate(-2);
    }

    return (
        <span onClick={goBack}>
            <ion-icon name="chevron-back-outline"></ion-icon>
        </span>
    )
}

export default Back;