import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css';
import motherfuckingrecipes from '../../assets/android-chrome-512x512.png';

    
const Navbar = () => {
    
    
    return (
        
            <nav className="navbar">
                <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/"><img className="image" src={motherfuckingrecipes} /></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/recetas">Recetas</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/listatareas">Lista de Tareas</Link></li>
                        </ul>
                </div>
            </nav>
        
    );
}

export default Navbar;