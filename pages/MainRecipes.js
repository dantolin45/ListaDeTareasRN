import React from "react";
import ModalAddRecipe from "../components/todolist/ModalAddRecipe";
import ToDoList from "../components/todolist/ToDoList";
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
                        <h1 className="todolist-h1">Lista de recetas hechas</h1>

                    </div>

                    <div className="addtask-container">
                        <ModalAddRecipe />
                    </div>
                </div>
            )

        }
    }

    return (<>{isLogged()}</>)
}
export default Main;