import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../features/todo/todoSlice'

function UpdateTodo({todo}){
    const [todoMsg,setTodoMsg] = useState(todo.text)
    const [isTodoEditable,setisTodoEditable] = useState(false)
    const dispatch = useDispatch()

    const editTodo = (id)=>{
        dispatch(updateTodo(id,todoMsg))
        setisTodoEditable(false)
    }
    return(
        <>
            <input
            className={`border outline-none bg-transparent w-full text-white ${isTodoEditable?"border-black/10 px-2" : "border-transparent"}`}
                type='text'
                value={todoMsg}
                onChange={(e)=>setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button 
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md mx-4"
                onClick={()=>{
                    if(isTodoEditable)
                        editTodo(todo.id)
                    else
                        setisTodoEditable((prev)=>!prev)  
                }}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
        </>
    )
}

export default UpdateTodo