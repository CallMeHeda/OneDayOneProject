import { ITodo } from "./ITodo";

export interface ITodoProps {
  todoProps: ITodo;
  onClick: (id: number) => void;
}
