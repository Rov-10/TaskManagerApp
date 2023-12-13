import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import groupReducer from "./groupSlise";
export default configureStore({

    reducer:{
        task:taskReducer,
        group:groupReducer
    }

})