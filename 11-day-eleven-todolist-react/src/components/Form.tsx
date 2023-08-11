import Button from "./Button";
import { IForm } from "../interfaces/IForm";
import styled from "@emotion/styled";
import Input from "./Input";
import { IInput } from "../interfaces/IInput";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export default function Form({
  handleSubmit,
  addTodo,
  handleChange,
}: IForm & IInput) {
  const btnText = "To do";

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input addTodo={addTodo} handleChange={handleChange} />
      <Button btnText={btnText} />
    </StyledForm>
  );
}
