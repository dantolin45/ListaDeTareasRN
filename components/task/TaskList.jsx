import React,{useState, useEffect} from "react";

import  {getJoke}  from "./Api";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getJoke().then((data) => {
            setTasks(data);
        }
        );
    }, []);

    return (
        <div>
            <table>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text} </h3>
            ))}
            </table>
        </div>
    )
}
export default TaskList;