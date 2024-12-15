import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../Header/Header";

function Root() {
    return (
        <>
            <header>
                <Header/>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>

            </footer>
        </>
    )
}

export default Root;
