import Swiper from "react-native-deck-swiper";
import { StyleSheet, Text, View } from "react-native";

function SwiperComponent({ cards, lang, handleSwipe, joke, delivery }) {
  return (
    <Swiper
      cards={cards}
      cardIndex={0}
      renderCard={(cardData = { joke, delivery }) => {
        return (
          <View style={styles.card}>
            <Text style={styles.text}>
              {lang === "en"
                ? cardData.joke
                : cardData.joke + " " + cardData.delivery}
            </Text>
          </View>
        );
      }}
      dragStart={() => {
        handleSwipe();
      }}
      stackSize={3}
      // disableRightSwipe={true}
      // disableTopSwipe={true}
      // disableBottomSwipe={true}
      // disableLeftSwipe={true}
      cardStyle={{ flex: 1 }}
    ></Swiper>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#3D698F",
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    width: "90%",
    maxHeight: "80%",
    padding: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#FDF9EC",
    fontWeight: "bold",
    textTransform: "capitalize",
    letterSpacing: 2,
  },
});

export default SwiperComponent;
