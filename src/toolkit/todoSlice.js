import { createSlice } from "@reduxjs/toolkit"
import { tasks } from "../Components/data";


const initialState ={
    todo : tasks
}

 const TodoSlice = createSlice ({
    name : 'TodoSlice',
    initialState ,
    reducers :{
        AddTask : (state, action)=>{
    state.todo.push(action.payload)}
        ,
        DeleteTask : (state, action)=>{
    state.todo =state.todo.filter(el => el.id !== action.payload)        
        },
        DoneTask :(state,action)=> {
    state.todo.map(el=> el.id=== action.payload? ( el.isDone =!el.isDone):null)
        },
        FilterTask : (state, action)=>{
        return {
            ...state.todo, todo: state.todo.filter(el=>el.isDone === action.payload)
        }

        // state.todo = state.todo.filter(el=>el.isDone === action.payload) without spreading
        },
        editTodo: (state, action) => {
            
    state.todo.map((el) => {
        if(el.id === action.payload.id){
            el.title = action.payload.title
        }
        
    });
        }
 }})
export const {AddTask, DeleteTask, DoneTask,editTodo,FilterTask} = TodoSlice.actions
export default TodoSlice.reducer
