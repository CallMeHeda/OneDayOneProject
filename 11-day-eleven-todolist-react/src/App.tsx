import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";
import { ITodo } from "./interfaces/ITodo";
// import Todo from "./compenents/Todo";

function App() {
  // state
  const [todos, setTodos] = useState<ITodo[]>([]);

  // comportements
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
      <h1>ToList</h1>
      <NewTodo handleAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todoProps={todo}
              onClick={() => handleDelete(todo.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
