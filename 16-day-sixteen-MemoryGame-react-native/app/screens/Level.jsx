import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Tank from "../../assets/images/icons/tank.svg";
import Damage from "../../assets/images/icons/damage.svg";
import Support from "../../assets/images/icons/support.svg";
import All from "../../assets/images/icons/all.svg";

function Level() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choice your level</Text>
      <View style={styles.buttons}>
        <Button Role={Tank} route={"MemorizeTanks"} />
        <Button Role={Damage} route={"MemorizeDamages"} />
        <Button Role={Support} route={"MemorizeSupports"} />
        <Button Role={All} route={"MemorizeAll"} />
      </View>
    </View>
  );
}

export default Level;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b2a33",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  text: {
    color: "#fff",
    fontSize: 40,
    marginBottom: 40,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});
