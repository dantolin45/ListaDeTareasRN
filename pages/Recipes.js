import React, { useState, useEffect } from "react";

import { getRecipe } from "../components/api/Api";
import '../styles/RecipeList.css'

const Recipes = () => {


    const [recipesApi, setRecipesApi] = useState([]);

    useEffect(() => {

        getRecipe().then((data) => {
            setRecipesApi(data.results);

        })
        console.log(recipesApi)
    }, []);

    return (
        <div className="container">
            <div className="cards">

                {recipesApi?.map((recipes) => (
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