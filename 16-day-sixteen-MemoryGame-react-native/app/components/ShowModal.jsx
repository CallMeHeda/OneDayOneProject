import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

function ShowModal({
  timer,
  setSelectedCardsId,
  setSelectedCards,
  setIdenticalCards,
  reset,
}) {
  const navigation = useNavigation();

  const handlePress = () => {
    reset(setSelectedCardsId, setSelectedCards, setIdenticalCards);
    navigation.navigate("Level");
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={true} hasBackdrop={false} animationIn="slideInUp">
        <View style={styles.modal}>
          <Text style={styles.text}>Game completed in {timer} seconds</Text>
          <Pressable onPress={() => handlePress()} style={styles.button}>
            <Text style={[styles.textBtn]}>Reset</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

export default ShowModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b2a33",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    gap: 30,
    borderRadius: 50,
  },
  text: {
    textAlign: "center",
    color: "#cd3545",
    fontSize: 30,
    marginTop: 15,
    textTransform: "uppercase",
  },
  textBtn: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 50,
    backgroundColor: "#cd3545",
    width: 150,
    height: 50,
  },
});
