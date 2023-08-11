import styled from "@emotion/styled";
import { ITodoProps } from "../interfaces/ITodoProps";
import Button from "./Button";

const StyledTodo = styled.li`
  display: flex;
  align-items: center;
  margin-right: 40%;
  padding: 10px;
  color: #fff;
  font-size: 18px;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

export default function Todo({ todoProps, onClick }: ITodoProps) {
  const handleDeleteClick = () => {
    onClick(todoProps.id);
  };

  return (
    <StyledTodo>
      {todoProps.todo} &nbsp;
      <Button onClick={handleDeleteClick} btnText="Delete" />
    </StyledTodo>
  );
}
