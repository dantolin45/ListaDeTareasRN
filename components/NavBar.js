import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import motherfuckingrecipes from '../assets/android-chrome-512x512.png';


const Navbar = () => {

    return (

        <nav class="navbar">
            <div class="navbar-brand">
                <a href="/">
                    <img className="navbar-image" src={motherfuckingrecipes} />
                </a>
            </div>

            <ul class="navbar-menu">
                <li class="navbar-item"><Link className="navbar-link" to="/recetas">Recetas</Link></li>
                <li class="navbar-item"><Link className="navbar-link" to="/listatareas">Lista de Tareas</Link></li>
            </ul>
        </nav>

    );
}

export default Navbar;