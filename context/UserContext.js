import React, { useContext, createContext, useState } from "react";

const userLogged = createContext();

export const UserProvider = ({ children }) => {
    const [User, setUser] = useState();

    const changueUser = (e) => {

        setUser({
            name: e.name,
            password: e.password
        })

        window.localStorage.setItem('UserName', e.name);
        window.localStorage.setItem('isLogged', true);
    

}
const logOut = () => {
    const isLogged = window.localStorage.getItem('isLogged')
    
    if (isLogged === 'true') {
        window.localStorage.removeItem('UserName');
        window.localStorage.removeItem('isLogged');
        setUser(null)
    }
    else {
        alert("No hay usuario para cerrar sesion")
    }
}

    return (
        <UserProvider.Provider value={{User, changueUser, logOut}}>
            {children}
        </UserProvider.Provider>
    )
}
export const useUserContext = () => {
    return useContext(userLogged);
}