import React from "react";
import Portfolio from '../Portfolio/Portfolio';
import '../../styles/reset.css';
import '../../styles/style.css';

function Media({label, content}) {
    return (
        <>
            <Portfolio label={label} content={content} />
        </>
    )
}

export default Media;