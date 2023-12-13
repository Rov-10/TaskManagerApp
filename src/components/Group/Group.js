import React from 'react';
import { removeGroup } from '../../store/groupSlise';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from '../Task/AddTask';
import TaskList from '../Task/TaskList';
import { removeTask } from '../../store/taskSlice';
import './Group.css'
const Group = ({desc, id}) => {
    const tasksToDelete = useSelector(state => state.task.tasks)
    const dispatch = useDispatch()
    const disRemove =()=>{
        dispatch(removeGroup({id, desc}))
        tasksToDelete.map(task => task.group === desc ? dispatch(removeTask(task)): null);
    }
    
    return (
        <div className='Group'>
            <div className='GroupHead'>
            {desc}
            <span onClick={disRemove} ></span>
            </div>
            <div className='GroupCont'>
            <TaskList groupId={id} />
            <AddTask groupId={id}/>
            </div>
        </div>
    );
}

export default Group;
