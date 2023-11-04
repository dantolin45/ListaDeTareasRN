import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import motherfuckingrecipes from '../assets/android-chrome-512x512.png';
import { useUserFunctions } from "../context/UserContext";

const Navbar = () => {
    const userFunctions = useUserFunctions();
    const isLogged = window.localStorage.getItem("isLogged")
   
    const userName = window.localStorage.getItem("UserName") 

    function Logged() {
        if (isLogged === "true") {
            return (
               <><Link className="navbar-link" to="/" onClick={userFunctions.logOut}> Bienvenido/a {userName}!</Link></>
            )
        } 
        else {
            return (<Link className="navbar-link" to="/userlogin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></Link>)
        }
    }
    return (

        <>
            <nav class="navbar">
                <div class="navbar-brand">
                    <a href="/">
                        <img className="navbar-image" src={motherfuckingrecipes} />
                    </a>
                </div>

                <ul class="navbar-menu">
                    <li class="navbar-item"><Link className="navbar-link" to="/recetas">Recetas</Link></li>
                    <li class="navbar-item"><Link className="navbar-link" to="/listatareas">Lista de Tareas</Link></li>
                    <li class="navbar-item" id="user"> {Logged()} </li>
                </ul>
            </nav>
        </>

    );
}

export default Navbar;