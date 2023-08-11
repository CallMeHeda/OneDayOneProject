import styled from "@emotion/styled";
import { IInput } from "../interfaces/IInput";

const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  margin-right: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default function Input({ addTodo, handleChange }: IInput) {
  return (
    <StyledInput
      type="text"
      name="todo"
      id="inputTodo"
      value={addTodo}
      onChange={handleChange}
    />
  );
}
