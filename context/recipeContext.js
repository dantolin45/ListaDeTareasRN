import React,{ useContext, createContext, useState} from "react";

const recipeCreated = createContext();

export const useRecipeCreatedContext =() =>{
    return useContext(recipeCreated);
}

export const RecipeProvider =({ children })=>{

    const [recipe, setRecipe] = useState([]);

    const AddRecipe =(e)=>{
        console.log("AddRecipe", e)
        setRecipe(
            ...recipe,
            e)

        window.localStorage.setItem('idRecipe', e.id)
        window.localStorage.setItem('RecipeTitle', e.title)
        window.localStorage.setItem('RecipeURLImage', e.image)
        console.log("AddRecipe", recipe)
    }

    const RemoveRecipeBySelected = (e)=>{
        const idExist = window.localStorage.getItem('idRecipe', e.id)
        if (idExist != 0)
        {
            setRecipe(null);
            window.localStorage.removeItem('idRecipe', e.id)
            window.localStorage.removeItem('RecipeTitle')
            window.localStorage.removeItem('RecipeURLImage')
        }

        
    }
    return <RecipeProvider.Provider value={{AddRecipe, recipe}}>
        {children}
    </RecipeProvider.Provider>
}