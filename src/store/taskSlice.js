import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({

    name:'task',
    initialState:{
        tasks:[]
        
    },
    reducers:{

        addTask:(state, action)=>{
            state.tasks=[
                action.payload,...state.tasks
            ]

        },
        removeTask:(state, action)=>{
            state.tasks=state.tasks.filter(task=>action.payload.id!==task.id)
        }
    }

})
export const {addTask, removeTask}=taskSlice.actions;
export default taskSlice.reducer