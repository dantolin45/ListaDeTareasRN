import React from "react";
import { Link } from "react-router-dom";
import '../styles/RecipeList.css'
import { useRecipeCreatedContext } from "../context/recipeContext";
import { useNavigate } from "react-router-dom";
import { useUserFunctions } from "../context/UserContext";
import HaveToLogin from "../components/HaveToLogin";

const Recipes = () => {
    const navigate = useNavigate();
    const contextrecipe = useRecipeCreatedContext();
    const context = useUserFunctions();

    function isLogged() {
        console.log(context.Logged)
        if (context.Logged === false) {

            return (<><HaveToLogin /></>)
        }
        else {
            return (
                <div className="container">
                    <div className="cards">
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