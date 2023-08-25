import { Input } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default function InputNum({ value, onChangeText }) {
  return (
    <Input
      style={styles.input}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 2,
    marginVertical: 3,
    borderColor: "transparent",
  },
});
