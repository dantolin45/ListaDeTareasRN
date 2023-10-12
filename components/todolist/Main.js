import { Modal } from "bootstrap";
import React, { useState } from "react";
import ModalAddTask from "./ModalAddTask";
import ToDoList from "./ToDoList";

const Main = () => {


    return (
        <div className="container-listrecipes">

            <div className="todolist-container">
                <h1>Lista de recetas hechas aaaaaaaaaaaaaaaaaaaaa</h1>
                <ToDoList />
            </div>
            
            <div className="addtask-container">
            <ModalAddTask/>
            </div>
        </div>
    )
}
export default Main;