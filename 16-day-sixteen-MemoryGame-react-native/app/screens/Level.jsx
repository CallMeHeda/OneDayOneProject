import { StyleSheet, View } from "react-native";
import Button from "../components/Button";

function Level() {
  return (
    <View style={styles.container}>
      <Button />
    </View>
  );
}

export default Level;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#2b2a33",
    // borderWidth: 2,
    // borderColor: "red",
  },
});
