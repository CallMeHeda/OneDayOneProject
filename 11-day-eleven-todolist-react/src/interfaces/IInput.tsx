import { ChangeEvent, FormEvent } from "react";

export interface IInput {
  addTodo: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
