import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';
import uuid from 'react-uuid';


const AddTask = () => {
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch()
    function handleSubmit(){
      dispatch(addTask({desc,id:uuid()}))
      setDesc("")
    }
    return (
        <div>
            <input value={desc} onChange={e=>setDesc(e.target.value)} type="text" />
            <button onClick={handleSubmit} className=''>Add</button>
        </div>
    );
}

export default AddTask;
