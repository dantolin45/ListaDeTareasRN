import React,{useState, useEffect} from "react";

import  { getRecipe, getTasteByIdRecipe }  from "./api/Api";

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
                
        getRecipe().then((data) => {
                setRecipes(data.results);
                
                if(recipes!=null)
                {
                    recipes?.map((r) => {
                        
                        getTasteByIdRecipe(r.id).then((data) =>{
                        setRecipes(
                            ...r,
                            data.results
                        )
                        
                    })
                }
                )
                }
                
            })
        console.log(recipes)
    }, []);

    return (
        <div>
            <table>
                {recipes?.map((recipes) =>(
                <div className="recipes">
                <h3 key={recipes.id}>{recipes.title} </h3>
                <img src={recipes.image}/>
                <b>{recipes.sweetness}</b>
                </div>
                ))}
            </table>
        </div>
    )
}
export default RecipesList;