import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import Tank from "../../assets/images/icons/tank.svg";
import Damage from "../../assets/images/icons/damage.svg";
import Support from "../../assets/images/icons/support.svg";

function Level() {
  return (
    <View style={styles.container}>
      <Button Role={Tank} route={"MemorizeTanks"} />
      <Button Role={Damage} route={"MemorizeDamages"} />
      <Button Role={Support} route={"MemorizeSupports"} />
      {/* <Button Role={Support} route={"MemorizeAll"} /> */}
    </View>
  );
}

export default Level;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    width: "100%",
    height: "100%",
    backgroundColor: "#2b2a33",
    // borderWidth: 2,
    // borderColor: "red",
  },
});
