import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../Header/Header";
import '../../styles/style.css';

function Root() {
    return (
        <div className="app-container">
            <header>
                <Header/>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Root;
