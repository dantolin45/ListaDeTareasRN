import { Modal } from "bootstrap";
import React, { useState } from "react";
import ModalAddRecipe from "./ModalAddRecipe";
import ToDoList from "./ToDoList";
import '../../styles/MainToDo.css'
const Main = () => {


    return (
        <div className="container-listrecipes">

            <div className="todolist-container">
                <h1>Lista de recetas hechas aaaaaaaaaaaaaaaaaaaaa</h1>
                <ToDoList />
            </div>
            
            <div className="addtask-container">
            <ModalAddRecipe/>
            </div>
        </div>
    )
}
export default Main;