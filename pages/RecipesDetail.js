import React from "react";
import '../styles/RecipesDetail.css'
import { useFormik } from "formik";

const RecipeDetail = (recipeURL) => {

    const recipe = recipeURL.recipe;
    
    return (
        <>
            <div className="page">
                <div className="containerPage">
                    <div className="RecipeDetailContainer">
                        <div className="RecipeDetail">
                            <h1 className="recipeTitle">{recipe.title}</h1>
                            <img className="recipeImage" src={recipe.image} />
                            <span className="recipeDescription">{recipe.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RecipeDetail