import React from "react";
import ModalAddRecipe from "../components/todolist/ModalAddRecipe";
import ToDoListRemove from "../components/todolist/ToDoListRemove";
import { useUserFunctions } from "../context/UserContext";
import '../styles/MainToDo.css'
import HaveToLogin from "../components/HaveToLogin";

const Main = () => {
    const loggedcontext = useUserFunctions();
    function isLogged() {
        console.log(loggedcontext.Logged)
        if (loggedcontext.Logged === false) {

            return (<><HaveToLogin /></>)
        }
        else {
            return (

                <div className="mainrecipesContainer">

                    <div className="todolist-container">
                        <ModalAddRecipe />
                        <ToDoListRemove />
                    </div>

                </div>
            )

        }
    }

    return (<>{isLogged()}</>)
}
export default Main;