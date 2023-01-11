import React ,{ useState } from "react"
import { useDispatch } from "react-redux"
import { AddTask } from "../toolkit/todoSlice"

const AddTodo =()=>{
    let [titlee,setTitlee]= useState()

const dispatch = useDispatch()
const handelAdd=()=>{
    dispatch(AddTask({
        id : Date.now(),
        title : titlee,
        state : false
    }))
}
return(
    <div>
        <input type='text' onChange={(event) => setTitlee(event.target.value)} placeholder="Add todo..."/>
        <button className='btn btn-danger' onClick = {handelAdd}> Add new task</button>
    </div>
)
}

export default AddTodo
