import { Select } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default function SelectPicker({
  value,
  selectedIndex,
  setSelectedIndex,
  data,
  renderOption,
}) {
  return (
    <Select
      style={styles.select}
      status="basic"
      value={value}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      {data.map(renderOption)}
    </Select>
  );
}

const styles = StyleSheet.create({
  select: {
    flex: 2,
    margin: 2,
  },
});
