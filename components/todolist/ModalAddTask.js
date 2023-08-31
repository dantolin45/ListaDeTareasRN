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

        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form className="add-form" onSubmit={onSubmit}>
                        <div className="form-control">
                            <label>Tarea</label>
                            <input type="text" placeholder="Agrega una tarea" value={task} onChange={(e) => setTask(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label>Día y Hora</label>
                            <input type="text" placeholder="Agrega un día y hora" value={day} onChange={(e) => setDay(e.target.value)} />
                        </div>
                        <div className="form-control form-control-check">
                            <label>Recordatorio</label>
                            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                        </div>
                        <input type="submit" value="Guardar Tarea" className="btn btn-block" />
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default ModalAddTask;