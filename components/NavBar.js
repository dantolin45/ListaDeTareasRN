import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import motherfuckingrecipes from '../assets/android-chrome-512x512.png';

    
const Navbar = () => {
    
    
    return (
        
            <nav className="navbar-container">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="active" to="/"><img className="image" src={motherfuckingrecipes} /></Link></li>
                            <li className="nav-item"><Link to="/recetas">Recetas</Link></li>
                            <li className="nav-item"><Link to="/listatareas">Lista de Tareas</Link></li>
                        </ul>
            </nav>
        
    );
}

export default Navbar;