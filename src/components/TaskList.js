import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';


const TaskList = () => {
    const tasks= useSelector(state => state.task.tasks)
    
    return (
        <div>
            {tasks.map(task=> <Task key={task.id} id={task.id} desc={task.desc}/>)}
        </div>
    );
}

export default TaskList;
