import { createSlice } from "@reduxjs/toolkit";

const toStorage = (state) => {
    localStorage.setItem("groups", JSON.stringify({groups: state.groups}));
}

export const groupSlice = createSlice({

        name:'group',
        initialState:{
            groups:[]
        },
        reducers:{

            addGroup:(state, action)=>{
                state.groups=[
                    action.payload,...state.groups
                ]
                toStorage(state);
            },
            removeGroup:(state, action)=>{
                state.groups=state.groups.filter(group=>action.payload.id!==group.id);
                toStorage(state);
            },
            fromStorage: (state) => {
                state.groups = JSON.parse(localStorage.getItem("groups"));
            }
        }

})
export const {addGroup, removeGroup, fromStorage}= groupSlice.actions;
export default groupSlice.reducer