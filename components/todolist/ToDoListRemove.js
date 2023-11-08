import { Link } from "react-router-dom";
import { useRecipeCreatedContext } from "../../context/recipeContext";

const ToDoList = () => {
    const contextrecipe = useRecipeCreatedContext();

    return (
        <>

            {contextrecipe?.map((recipe) => (
                <Link to={`/recipeDetail/${recipe.title}`}>
                    <div className="todolistremove">
                        <h3 className="card-title" key={recipe.id}>{recipe.title} </h3>
                        <img className="image" src={recipe.image} />
                    </div>
                </Link>
            ))}


        </>
    )

}
export default ToDoList;