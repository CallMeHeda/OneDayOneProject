import { ITodoProps } from "../interfaces/ITodoProps";

export default function Todo({ todoProps, onClick }: ITodoProps) {
  const handleDeleteClick = () => {
    onClick(todoProps.id);
  };

  return (
    <li>
      {todoProps.todo} &nbsp;
      <button onClick={handleDeleteClick}>X</button>
    </li>
  );
}
