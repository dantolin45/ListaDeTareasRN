import React from "react";
import '../styles/RecipesDetail.css'

const RecipeDetail = (recipeURL) => {

    const recipe = recipeURL.recipe;
    console.log(recipe.title)
    return (
        <>
            <div className="page">
                <div className="containerPage">
                    <div className="ProductDetailContainer">
                        <div className="ProductDetail">
                            <h1 className="recipeTitle">{recipe.title}</h1>


                            <img className="sizeTitle" src={recipe.image} />

                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}
export default RecipeDetail