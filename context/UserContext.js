import React, { useContext, createContext, useState } from "react";

const userLogged = createContext();

export const UserProvider = ({ children }) => {
    const [User, setUser] = useState();

    return (
        <UserProvider.Provider value={User}>
            {children}
        </UserProvider.Provider>
    )
}
export const useRecipeCreatedContext = () => {
    return useContext(userLogged);
}