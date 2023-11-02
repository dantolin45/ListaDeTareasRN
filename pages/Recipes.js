import React from "react";
import { Link } from "react-router-dom";
import recipes from "../json/jsonRecipes";
import '../styles/RecipeList.css'

const Recipes = () => {

    console.log(recipes)
    


    return (
        <div className="container">
            <div className="cards">
                {recipes?.map((recipe) => (
                    <Link to={`/recipeDetail/${recipe.title}`}>
                    <div className="card">
                        <h3 className="card-title" key={recipe.id}>{recipe.title} </h3>
                        <img className="image" src={recipe.image} />
                    </div>
                    </Link>
                ))}

            </div>
        </div>
    )

}
export default Recipes;