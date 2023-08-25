import styled from "@emotion/native";
import { Text } from "react-native";

const StyledHeader = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: rgb(238, 221, 221);
  letter-spacing: 2px;
  font-family: sans-serif;
  text-transform: uppercase;
  margin: 90px 0 30px 0;
  text-align: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Text style={{ color: "#dc3545" }}>DAY 24 :</Text>&nbsp;Currency Converter
      <Text style={{ color: "#dc3545" }}>.</Text>
    </StyledHeader>
  );
}
