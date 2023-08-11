import styled from "@emotion/styled";
import { ITodos } from "../interfaces/ITodos";
import Todo from "./Todo";

const StyledTodos = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 40px;
`;

export default function Todos({ todos, handleDelete }: ITodos) {
  return (
    <StyledTodos>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todoProps={todo}
            onClick={() => handleDelete(todo.id)}
          />
        );
      })}
    </StyledTodos>
  );
}
