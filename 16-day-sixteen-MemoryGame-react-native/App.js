import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MemorizeSupports from "./app/screens/MemorizeSupports";
import MemorizeDamages from "./app/screens/MemorizeDamages";
import MemorizeTanks from "./app/screens/MemorizeTanks";
import MemorizeAll from "./app/screens/MemorizeAll";

export default function App() {
  return (
    <View style={styles.container}>
      <MemorizeAll />
      {/* <MemorizeTanks /> */}
      {/* <MemorizeDamages /> */}
      {/* <MemorizeSupports /> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2a33",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "red",
  },
});
