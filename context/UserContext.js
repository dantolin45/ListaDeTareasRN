import React, { useContext, createContext, useState } from "react";

const userLogged = createContext();

const userFunctions = createContext();
export const UserProvider = ({ children }) => {
    const [User, setUser] = useState();
    const isLogged = window.localStorage.getItem('isLogged')
    
    const [Logged, setLogged] = useState(isLogged);

    const setUserFormik = (e) => {
        if (Logged === null) {
            setUser(e)
            setLogged(true)
            window.localStorage.setItem('UserName', e.name);
            window.localStorage.setItem('isLogged', true);
            return User;
        }
        else {
            alert("Ya hay un usuario logueado")
        }

    }

    const logOut = () => {
        const isLogged = window.localStorage.getItem('isLogged')

        if (isLogged === "true") {
            window.localStorage.removeItem('UserName');
            window.localStorage.removeItem('isLogged');
            setUser(null)
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