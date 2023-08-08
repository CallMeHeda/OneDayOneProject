import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Joke from "./app/components/Joke";

export default function App() {
  return (
    <View style={styles.container}>
      <Joke />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23272f",
    alignItems: "center",
    justifyContent: "center",
  },
});
