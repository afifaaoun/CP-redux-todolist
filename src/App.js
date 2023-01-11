import './App.css';
import AddTodo from './Components/addTodo';
import Filter from './Components/filter';
import TodoList from './Components/todoList';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Filter/>
      <TodoList/>
      
    </div>
  );
}

export default App;
