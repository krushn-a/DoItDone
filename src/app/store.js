import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer
}) // created a store using configureStore() and takes object and we just exported it

//Now we will make reducers
// in redux toolkit reducers are made differently and are called slice
//har ek application ka ek hi store hota hai which is the single source of truth