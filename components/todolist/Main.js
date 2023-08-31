import { Modal } from "bootstrap";
import React,{useState} from "react";
import ModalAddTask from "./ModalAddTask";
import ToDoList from "./ToDoList";

const Main = () => {


    return (
        <div className="container">
            <h1>Lista de Tareas</h1>
            <ModalAddTask/>
        </div>
    )
}
export default Main;