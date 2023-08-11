import { FormEvent, useState } from "react";
import { INewTodo } from "../interfaces/INewTodo";
import Form from "./Form";

export default function NewTodo({ handleAdd }: INewTodo) {
  const [addTodo, setAddTodo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todoToAdd = { id: new Date().getTime(), todo: addTodo };
    if (todoToAdd.todo !== "") {
      handleAdd(todoToAdd);
      console.log(todoToAdd);
    }
    setAddTodo("");
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      addTodo={addTodo}
      handleChange={handleChange}
    />
  );
}
