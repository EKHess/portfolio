import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../styles/reset.css';
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
                <Footer/>
            </footer>
        </div>
    )
}

export default Root;
