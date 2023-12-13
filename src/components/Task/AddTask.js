import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/taskSlice';
import uuid from 'react-uuid';
import './AddTask.css'

const AddTask = ({groupId}) => {
    const [desc, setDesc] = useState('')
    const [create, setCreate]= useState(false)
    const dispatch = useDispatch()
    function handleSubmitTask(){
        if(desc.trim().length){
            dispatch(addTask({desc,id:uuid(), group: groupId }))
            setDesc("")
            setCreate(false)
        }
    }
    if(create){
    return (
        <div className='AddTask'> 
            <input placeholder='Enter your new task' value={desc} onChange={e=>setDesc(e.target.value)} type="text" />
                <div className='AddTaskBtns'>
                    <span id='btnN'onClick={handleSubmitTask} className=''>+</span>
                    <span id='btnx' onClick={()=>{setCreate(false);setDesc("")}}>&times;</span>
                </div>
        </div>
    );}
    else{
    return(
        <div onClick={()=>{setCreate(true)}} className='CreateBtnTask'>
            <span>Create new task</span>
        </div>)
    }
}

export default AddTask;
