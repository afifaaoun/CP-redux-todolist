import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { FilterTask } from '../toolkit/todoSlice';

const Filter = () => {
    const [filtered, setFiltered] = useState();
    const dispatch= useDispatch()
    console.log(typeof(filtered));

    return(
    <div >
        <input type='text' onChange={e => setFiltered(e.target.value)} placeHolder="search"/>
        <button   onClick={() => dispatch(FilterTask(Boolean(filtered)))}>
            Search
        </button>
    </div>)
    
}
export default Filter