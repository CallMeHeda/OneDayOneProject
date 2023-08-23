function Button(props: {
  setSelectedComponent: (component: string) => void;
  handleClick: () => void;
  title: string;
}) {
  return <button onClick={props.handleClick}>{props.title}</button>;
}

export default Button;
