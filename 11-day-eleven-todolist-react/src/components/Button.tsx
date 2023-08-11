import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 85px;
  padding: 10px;
  background-color: #cd3545;
  color: #fff;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

interface ButtonProps {
  btnText: string;
  onClick?: () => any;
}

export default function Button(props: ButtonProps) {
  return <StyledButton onClick={props.onClick}>{props.btnText}</StyledButton>;
}
