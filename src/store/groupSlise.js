import { createSlice } from "@reduxjs/toolkit";

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

            },
            removeGroup:(state, action)=>{
                state.groups=state.groups.filter(group=>action.payload.id!==group.id)
            }

        }

})
export const {addGroup, removeGroup}= groupSlice.actions;
export default groupSlice.reducer