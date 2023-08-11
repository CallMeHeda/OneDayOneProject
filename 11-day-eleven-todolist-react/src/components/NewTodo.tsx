import { ChangeEvent, FormEvent, useState } from "react";
import { INewTodo } from "../interfaces/INewTodo";

export default function NewTodo({ handleAdd }: INewTodo) {
  const [addTodo, setAddTodo] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todoToAdd = { id: new Date().getTime(), todo: addTodo };
    if (todoToAdd.todo !== "") {
      handleAdd(todoToAdd);
    }
    setAddTodo("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        id="inputTodo"
        placeholder="Ajouter une tache"
        value={addTodo}
        onChange={handleChange}
      />
      <button>Ajouter</button>
    </form>
  );
}
