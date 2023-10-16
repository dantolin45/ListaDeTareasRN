import React, { useState, useEffect } from "react";

import { getRecipe, getTasteByIdRecipe } from "../components/api/Api";
import '../styles/RecipeList.css'

const Recipes = () => {


    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        getRecipe().then((data) => {
            setRecipes(data.results);

        })
        console.log(recipes)
    }, []);

    return (
        <div className="container">
            <div className="cards">

                {recipes?.map((recipes) => (
                    <div className="card">
                        <h3 className="card-title" key={recipes.id}>{recipes.title} </h3>
                        <img className="image" src={recipes.image} />

                    </div>
                ))}

            </div>
        </div>
    )

}
export default Recipes;