
import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteTask, DoneTask } from '../toolkit/todoSlice'
import EditTask from './editTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash,faCheck} from '@fortawesome/free-solid-svg-icons'        
const Todo = ({el}) => {

    const dispatch =useDispatch()
  return (
    <div style={ el.isDone? {background :'#F0F9FF' ,border:'1px solid grey'} :{background :'#eeee',border:'1px solid grey'}}>
        <h1 style={ el.isDone ? { textDecoration:'line-through'} : {}}> 
        {el.title}
        </h1>
        <button variant="outline-success" onClick={() => dispatch(DoneTask(el.id))}>
        <FontAwesomeIcon icon={faTrash} />
        </button>
        <button variant="outline-danger" onClick={() => dispatch(DeleteTask(el.id))}>
        <FontAwesomeIcon icon={faCheck} />
        </button>
        <EditTask element={el}/>
    </div>
  )
}

export default Todo