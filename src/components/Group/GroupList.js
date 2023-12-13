import React from 'react';
import { useSelector } from 'react-redux';
import Group from './Group.js';
import'./GroupList.css'
const GroupList = () => {
    const groups =useSelector(state=> state.group.groups) 

    return (
        <div className='GroupList'>
            {groups.map(group=> <Group key={group.id} id={group.id} desc={group.desc}/>)}
        </div>
    );
}


export default GroupList;

