import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View
      style={{
        position: "relative",
        top: 65,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Text style={styles.day}>Day 8 :</Text>
      <Text style={styles.title}> Jokes App</Text>
      <Text style={styles.day}>.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  day: {
    textAlign: "center",
    fontSize: 24,
    color: "#cd3545",
  },
});

export default Header;
