import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTodo } from '../toolkit/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons' 
const EditTask = ({element}) => {
    const [edited,setEdited] =useState()
console.log(edited);
    const dispatch=useDispatch()
    const handelEdit=()=>{
        dispatch(editTodo({id:element.id, title:edited}))}
  return (
    <div>    
        <input type='text' onChange={e => setEdited(e.target.value)}/>
        <button onClick={handelEdit}> 
        <FontAwesomeIcon icon={faPen} />
        </button>
    </div>
  )

}
export default EditTask