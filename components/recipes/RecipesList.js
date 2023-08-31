import React,{useState, useEffect} from "react";

import  {getRecipe}  from "../api/Api";

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipe().then((data) => {
            setRecipes(data.results);
            console.log(data.results);
        }
        );
    }, []);

    return (
        <div>
            <table>
                {recipes?.map((recipes) =>(
                <div className="recipes">
                <h3 key={recipes.id}>{recipes.title} </h3>
                <img src={recipes.image}/> 
                </div>
                ))}
            </table>
        </div>
    )
}
export default RecipesList;