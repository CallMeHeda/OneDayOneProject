import styled from "@emotion/styled";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: rgb(238, 221, 221);
  letter-spacing: 2px;
  font-family: sans-serif;
  text-transform: uppercase;
  margin: 60px 0;
  span {
    color: #dc3545;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <span>DAY 23 :</span>&nbsp;Translator<span>.</span>
    </StyledHeader>
  );
}
