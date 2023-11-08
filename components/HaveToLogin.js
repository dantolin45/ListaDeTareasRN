import React from "react";
import { Link } from "react-router-dom";

const HaveToLogin=()=>{
    return(<>
    Tenes que logearte haz click aqui
    <Link to="/userlogin" className="navbar-link">Logeate</Link></>)
}
export default HaveToLogin;