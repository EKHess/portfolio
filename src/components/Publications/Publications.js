import React from "react";
import Portfolio from '../Portfolio/Portfolio';
import {publications} from '../../data/publications/publications';
import '../../styles/reset.css';
import '../../styles/style.css';

function Publications({content}) {
    return (
        <>
            <Portfolio content={publications} />
        </>
    )
}

export default Publications;