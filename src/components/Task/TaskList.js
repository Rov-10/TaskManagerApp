import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import'./TaskList.css'

const TaskList = ({groupId}) => {
    const tasks= useSelector(state => state.task.tasks)
    
    return (
        <div className='TaskList'>
            {tasks.map(task=> task.group === groupId ? <Task key={task.id} id={task.id} desc={task.desc}/>: '')}
        </div>
    );
}

export default TaskList;
