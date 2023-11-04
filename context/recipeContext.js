import React, { useContext, createContext, useState, useEffect } from "react";
import recipes from "../json/jsonRecipes";

const recipeCreated = createContext();
const recipeFunctions = createContext();

export const RecipeContext = ({ children }) => {

    const [recipe, setRecipe] = useState(recipes);

    const AddRecipe = (e) => {
        console.log("AddRecipe", e)
        setRecipe(
            ...recipe,
            e)

        window.localStorage.setItem('idRecipe', e.id)
        window.localStorage.setItem('RecipeTitle', e.title)
        window.localStorage.setItem('RecipeURLImage', e.image)
        console.log("AddRecipe", recipe)
    };

    const RemoveRecipeBySelected = (e) => {
        const idExist = window.localStorage.getItem('idRecipe', e.id)
        if (idExist != 0) {
            setRecipe(null);
            window.localStorage.removeItem('idRecipe', e.id)
            window.localStorage.removeItem('RecipeTitle')
            window.localStorage.removeItem('RecipeURLImage')
        }


    };
    return (
        <recipeCreated.Provider value={recipe}>
            <recipeFunctions.Provider value={{ AddRecipe, RemoveRecipeBySelected }}>
                {children}
            </recipeFunctions.Provider>
        </recipeCreated.Provider>
    )
};

export const useRecipeCreatedContext = () => {
    return useContext(recipeCreated);
}
export const useRecipeFunctions = () => {
    return useContext(recipeFunctions);
}