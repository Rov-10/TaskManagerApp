import React from 'react';
import { removeTask } from '../../store/taskSlice';
import { useDispatch } from 'react-redux';
import './Task.css'
const Task = ({desc, id}) => {
    
    const dispatch = useDispatch()
    const disRemove = ()=>{
        dispatch(removeTask({id,desc}))
    }
    return (
        <div className='Task'>
            {desc}
            <span onClick={disRemove} style={{color:'red',marginLeft:'30px', cursor:'pointer'}}>&times;</span>
        </div>
    );
}

export default Task;
