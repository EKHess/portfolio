import React from "react";
import Portfolio from '../Portfolio/Portfolio';
import {publications} from '../../data/publications/publications';

function Publications({content}) {
    return (
        <>
            <Portfolio content={publications} />
        </>
    )
}

export default Publications;