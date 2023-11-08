import React, { useContext, createContext, useState } from "react";

const userLogged = createContext();

const userFunctions = createContext();

export const UserProvider = ({ children }) => {
    const [User, setUser] = useState(null);

    
    const [Logged, setLogged] = useState(false);

    const setUserFormik = (e) => {
        if (Logged === false) {
            setUser(e)
            setLogged(true)

            return User;
        }
        else {
            alert("Ya hay un usuario logueado")
        }

    }

    const logOut = () => {

        if (Logged === true) {
            setUser(null)
            setLogged(false);
        }
        else {
            alert("No hay usuario para cerrar sesion")
        }
    }

    return (
        <userLogged.Provider value={User}>
            <userFunctions.Provider value={{Logged, setUserFormik, logOut }}>
                {children}
            </userFunctions.Provider>
        </userLogged.Provider>
    )
}
export const useUserContext = () => {
    return useContext(userLogged);
}
export const useUserFunctions = () => {
    return useContext(userFunctions);
}