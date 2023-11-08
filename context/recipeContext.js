import React, { useContext, createContext, useState, useEffect } from "react";
import recipes from "../json/jsonRecipes";

const recipeCreated = createContext();
const recipeFunctions = createContext();

export const RecipeContext = ({ children }) => {

    const [recipe, setRecipe] = useState(recipes);

    const AddRecipe = (values) => {




        const newTask = {
            id: tasks.length + 1,
            name :values.title,
            description : values.description,
            image:values.image
        };
        setTasks([...tasks, newTask]);
    };

    const RemoveRecipeBySelected = (e) => {
        let idSelected = e.target.value;
        const updatedRecipes = recipe.filter((r) => r.id != idSelected);
        setRecipe(updatedRecipes);
    };


    return (
        <recipeFunctions.Provider value={{ AddRecipe, RemoveRecipeBySelected }}>
            <recipeCreated.Provider value={recipe}>
                {children}
            </recipeCreated.Provider>
        </recipeFunctions.Provider>
    )
};

export const useRecipeCreatedContext = () => {
    return useContext(recipeCreated);
}
export const useRecipeFunctions = () => {
    return useContext(recipeFunctions);
}