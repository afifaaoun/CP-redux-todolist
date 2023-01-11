import { useSelector } from "react-redux";
import Todo from "./todo";

const TodoList = () => {

    const todos = useSelector(state => state.todos)
    console.log(todos);
    
      const doneTask = todos.todo.filter((el) => el.isDone !== false);
      const undoneTask = todos.todo.filter((el) => el.isDone === false);
    return (
        <div>
         <h1 >TodoList</h1>

         <h3 > Tasks to DO: </h3>   {undoneTask.length}
         <h3> Finished Tasks:</h3> {doneTask.length}
          {todos.todo.map((el, index) => {
            return(
              <div key={index}>
                <Todo el={el}/>
              </div>
            )
          })} 
          
        </div>
          )
    }

    export default TodoList;

