import React from "react";
import '../styles/Home.css'
import recipes from "../json/jsonRecipes";
import { Link } from "react-router-dom";
const Home = () => {


    return (
        <>
            <main>
                <h1>Bienvenido a {recipes[0].titleEnterprise}!</h1>
                <section class="recipe">

                    <h2>{recipes[0].title}</h2>
                    <div class="module line-clamp">
                        <p>{recipes[0].description}</p>
                    </div>
                    <Link to={`/recipeDetail/${recipes[0].title}`}>Ver receta</Link>
                </section>
                <section class="recipe">

                    <h2>{recipes[1].title}</h2>
                    <div class="module line-clamp">
                        <p>{recipes[1].description}</p>
                    </div>
                    <Link to={`/recipeDetail/${recipes[1].title}`}>Ver receta</Link>
                </section>
                <section class="recipe">

                    <h2>{recipes[2].title}</h2>
                    <div class="module line-clamp">
                        <p>{recipes[2].description}</p>
                    </div>
                    <Link to={`/recipeDetail/${recipes[2].title}`}>Ver receta</Link>

                </section>
            </main>
        </>
    )
}
export default Home;