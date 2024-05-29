import { useState } from "react";
import "./App.css";
import Input from "./component/Input";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <TodoList todos={todos}></TodoList>
      <Input setTodos={addTodo}></Input>
    </div>
  );
}

export default App;
