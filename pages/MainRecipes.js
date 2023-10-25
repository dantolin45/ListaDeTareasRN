import React from "react";
import ModalAddRecipe from "../components/todolist/ModalAddRecipe";
import ToDoList from "../components/todolist/ToDoList";
import '../styles/MainToDo.css'
const Main = () => {


    return (
        <div className="container">

            <div className="todolist-container">
                <h1>Lista de recetas hechas</h1>
            
            </div>
            
            <div className="addtask-container">
            <ModalAddRecipe/>
            </div>
        </div>
    )
}
export default Main;