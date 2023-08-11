import styled from "@emotion/styled";

const StyledFooter = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  p {
    text-align: center;
    font-size: 18px;
    color: rgb(238, 221, 221);
    margin: 0;
    letter-spacing: 1px;
  }
  span {
    color: #dc3545;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <footer>
        <p>
          © 2023 - <span>Fatima.</span> Tous droits réservés.
        </p>
      </footer>
    </StyledFooter>
  );
}
