import styled from "@emotion/native";
import { Text } from "react-native";

const StyledFooter = styled.Text`
  margin-bottom: 25px;
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 18px;
  color: rgb(238, 221, 221);
  letter-spacing: 1px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      © 2023 - <Text style={{ color: "#dc3545" }}>Fatima.</Text> All rights
      reserved.
    </StyledFooter>
  );
}
