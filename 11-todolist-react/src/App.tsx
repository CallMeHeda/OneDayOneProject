import "./assets/app.css";

import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";
import { ITodo } from "./interfaces/ITodo";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleDelete = (id: number) => {
    const todosCopy = [...todos];
    const todosCopyUpdated = todosCopy.filter((todo) => todo.id !== id);
    setTodos(todosCopyUpdated);
  };

  const handleAddTodo = (todoToAdd: { id: number; todo: string }) => {
    const todosCopy = [...todos];
    todosCopy.push(todoToAdd);
    setTodos(todosCopy);
  };

  return (
    <div>
      <Header />
      <NewTodo handleAdd={handleAddTodo} />
      <Todos todos={todos} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
