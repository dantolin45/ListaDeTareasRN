import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/js/src/modal.js'


const ModalAddTask = ({ onAddTask }) => {
    const taskArray = [];
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [taskId, setTaskId] = useState(0);



    const onSubmit = (e) => {
        e.preventDefault();
        if (!task) {
            alert("Por favor ingrese una tarea");
            return;
        }
        onAddTask({ task, day, reminder });
        setTask("");
        setDay("");
        setReminder(false);
    }
    return (
        <>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Agregar Tarea        
        </button>


        </>
    )
}
export default ModalAddTask;