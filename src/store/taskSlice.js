import { createSlice } from "@reduxjs/toolkit";


const toStorage = (state) => {
    localStorage.setItem("tasks", JSON.stringify({tasks: state.tasks}));
};

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
            toStorage(state);
        },
        removeTask:(state, action)=>{
            state.tasks=state.tasks.filter(task=>action.payload.id!==task.id);
            toStorage(state);
        },
        fromStorage: (state) => {
            state.tasks = JSON.parse(localStorage.getItem("tasks")).tasks;
        }
    }

})
export const {addTask, removeTask, fromStorage}=taskSlice.actions;
export default taskSlice.reducer