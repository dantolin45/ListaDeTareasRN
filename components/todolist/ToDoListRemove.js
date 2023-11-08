import { Link } from "react-router-dom";
import { useRecipeCreatedContext } from "../../context/recipeContext";
import { useRecipeFunctions } from "../../context/recipeContext";

const ToDoListRemove = () => {
    const contextrecipe = useRecipeCreatedContext();
    const contextfunctions = useRecipeFunctions();

    return (
        <>
            <h1 className="todolist-h1" >Remover recetas</h1>
            {contextrecipe?.map((recipe) => (
                <section class="recipe" id="todolistremove">

                    <h2>{recipe.title}</h2>
                    <div class="module line-clamp" id="remove">
                        <img className="image" src={recipe.image} />
                    </div>
                    <div className="todo-actions">
                        <Link to={`/recipeDetail/${recipe.title}`}>Ver receta</Link>
                        <button type="submit" value={recipe.id} className="userItem" id="remove" onClick={contextfunctions.RemoveRecipeBySelected}>X</button>
                    </div>
                </section>

            ))}


        </>
    )

}
export default ToDoListRemove;