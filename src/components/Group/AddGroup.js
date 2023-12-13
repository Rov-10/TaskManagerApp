import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addGroup } from '../../store/groupSlise';
import uuid from 'react-uuid';
import './AddGroup.css'
const AddGroup = () => {
    const [desc, setDesc] = useState('')
    const [create, setCreate ]= useState(false)
    const dispatch= useDispatch()
    function handleSubmitGroup(){
        if(desc.trim().length){
            
        dispatch(addGroup({desc,id:uuid()}))
        setDesc('')
        setCreate(false)
    }
    }    
    if (create){
    return (
        <div className='AddGroup'>
            <input placeholder='Enter your new group name'value={desc} onChange={e=>setDesc(e.target.value)} type="text" />
            <div className='AddGroupBtns'>            
                <button onClick={handleSubmitGroup} >Add Group</button>
                <span onClick={()=>{setCreate(false);setDesc("")}}>&times;</span>
            </div>
        </div>
    );}
    else{
        return(
        <div onClick={()=>{setCreate(true)}} className='CreateBtn'>
            <span>Create new group</span>
        </div>)
    }
}

export default AddGroup;
