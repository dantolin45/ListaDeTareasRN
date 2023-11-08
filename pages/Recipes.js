import React from "react";
import { Link } from "react-router-dom";
import '../styles/RecipeList.css'
import { useRecipeCreatedContext } from "../context/recipeContext";
import { useUserFunctions } from "../context/UserContext";
import HaveToLogin from "../components/HaveToLogin";
import SearchBarxRecipes from "../components/SearchBarxRecipes";
const Recipes = () => {
    const contextrecipe = useRecipeCreatedContext();
    const context = useUserFunctions();

    function isLogged() {
        if (context.Logged === true) {

            return (<><HaveToLogin /></>)
        }
        else {
            return (
                <div className="containercards">
                    
                    <div className="cards">
                        <SearchBarxRecipes />
                        {contextrecipe?.map((recipe) => (
                            <Link to={`/recipeDetail/${recipe.title}`}>
                                <div className="card">
                                    
                                    <h3 className="card-title" key={recipe.id}>{recipe.title} </h3>
                                    <img className="image" src={recipe.image} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }
    }

    return (
        <>{isLogged()}</>
    )

}
export default Recipes;