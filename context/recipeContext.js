import React, { useContext, createContext, useState, useEffect } from "react";
import recipes from "../json/jsonRecipes";

const recipeCreated = createContext();
const recipeFunctions = createContext();

export const RecipeContext = ({ children }) => {

    const [recipe, setRecipe] = useState(recipes);

    const AddRecipe = (values) => {
        console.log(values)
        const newRecipe = {
            id: values.id,
            title : values.title,
            image: values.image,
            description : values.description,
            imageType : "jpg"
        };
        setRecipe([...recipe, newRecipe]);
        return recipe 
    };

    const RemoveRecipeBySelected = (e) => {
        let idSelected = e.target.value;
        const updatedRecipes = recipe.filter((r) => r.id != idSelected);
        setRecipe(updatedRecipes);
    };
    const SearchRecipe = (e) =>{
        let searchByUser = e.target.value;
        const updatedRecipes = recipe.filter((r) => r.title.includes(searchByUser));
        console.log(updatedRecipes)
        setRecipe([...updatedRecipes])
    }


    return (
        <recipeFunctions.Provider value={{ AddRecipe, RemoveRecipeBySelected, SearchRecipe }}>
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