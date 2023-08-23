import { ITodo } from "./ITodo";

export interface ITodos {
  todos: ITodo[];
  handleDelete: (id: number) => void;
}
