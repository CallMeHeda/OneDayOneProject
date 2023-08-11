import { ChangeEvent, FormEvent } from "react";

export interface IForm {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
