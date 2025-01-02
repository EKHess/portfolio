import React from "react";
import Portfolio from '../Portfolio/Portfolio';
import '../../styles/reset.css';
import '../../styles/style.css';

function Publications({label, content}) {
    return (
        <>
            <Portfolio label={label} content={content} />
        </>
    )
}

export default Publications;