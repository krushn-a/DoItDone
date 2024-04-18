import {createSlice, nanoid } from "@reduxjs/toolkit"

//Now we create a initial state our store
const initialState = {
    todos: [{
        id: 1,
        text: "Learn Redux",
    }]
}

//now we ll create a slice/reducers

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state,action)=>{
            state.todos = state.todos.map((todo)=>(todo.id === action.payload.id ? {...todo,text:action.payload.todoMsg}:todo))
        }
    }   
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer
//state gives accesss to all values of current state
//creating a todo inside addTodo
//and yeh jo todo kya hai individual todo hai jo create hote hain and phir isko hum apne state mai push kardete hain
//so basically action kya hai : yeh woh sare values contain karta hai jiski hume jarurat hai for reducers function like id,todo etc
//payload is itself an object of action, where payload contains all the values.
//state.todos ka matlab: state ke andar jo todos hai uske andar ka state
//by(hitesh sir):
//state: state ke andar updated state value, in the store milti hai
//so isse mujhe state ka acces miljata hai