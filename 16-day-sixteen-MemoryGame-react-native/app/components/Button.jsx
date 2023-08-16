import { Pressable, StyleSheet, Text } from "react-native";

function Button() {
  return (
    <Pressable onPress={() => console.log("hello")} style={styles.button}>
      <Text>I'm pressable!</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    // borderWidth: 2,
    borderRadius: 50,
    width: 150,
    padding: 25,
    backgroundColor: "#cd3545",
  },
});
