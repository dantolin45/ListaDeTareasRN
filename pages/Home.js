import React from "react";
import '../styles/Home.css'
import { Link } from "react-router-dom";
import { useRecipeCreatedContext } from "../context/recipeContext";

const Home = () => {
    const contextrecipe = useRecipeCreatedContext();

    function isLoading() {
        if (contextrecipe === null) {
            return (
                <main>
                    <h1>Espera</h1>
                </main>
            )
        }
        else {

            return (
                <main>
                    <h1>Bienvenido a {contextrecipe[0]?.titleEnterprise}!</h1>
                    <section class="recipe">

                        <h2>{contextrecipe[0]?.title}</h2>
                        <div class="module line-clamp">
                            <p>{contextrecipe[0]?.description}</p>
                        </div>
                        <Link to={`/recipeDetail/${contextrecipe[0]?.title}`}>Ver receta</Link>
                    </section>
                    <section class="recipe">

                        <h2>{contextrecipe[1]?.title}</h2>
                        <div class="module line-clamp">
                            <p>{contextrecipe[1]?.description}</p>
                        </div>
                        <Link to={`/recipeDetail/${contextrecipe[1]?.title}`}>Ver receta</Link>
                    </section>
                    <section class="recipe">

                        <h2>{contextrecipe[2]?.title}</h2>
                        <div class="module line-clamp">
                            <p>{contextrecipe[2]?.description}</p>
                        </div>
                        <Link to={`/recipeDetail/${contextrecipe[2]?.title}`}>Ver receta</Link>

                    </section>
                </main>
            )
        }

    }
    return (
        <>
            {isLoading()}
        </>
    )
}
export default Home;