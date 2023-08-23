import { ITodo } from "./ITodo";

export interface INewTodo {
  handleAdd: (todo: ITodo) => void;
}
