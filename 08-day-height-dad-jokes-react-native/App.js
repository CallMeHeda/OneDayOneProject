import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Joke from "./app/components/Joke";

export default function App() {
  return (
    <View style={styles.container}>
      <Joke />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
