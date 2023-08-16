import { View, TouchableOpacity, StyleSheet } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

export default function Card({
  card,
  index,
  selectedCards,
  selectedCardsId,
  setSelectedCards,
  setSelectedCardsId,
  setIdenticalCards,
  identicalCards,
  checkFlippedImages,
  isCardSelected,
}) {
  const animatedValue = useSharedValue(0);

  const frontCardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${animatedValue.value}deg` }],
      backfaceVisibility: "hidden",
    };
  });

  const backCardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${animatedValue.value + 180}deg` }],
      backfaceVisibility: "hidden",
    };
  });

  const flipCard = () => {
    animatedValue.value = withTiming(animatedValue.value === 0 ? 180 : 0, {
      duration: 400,
      easing: Easing.linear,
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (!identicalCards.includes(card)) {
          flipCard();
          checkFlippedImages(
            card,
            index,
            selectedCards,
            selectedCardsId,
            setSelectedCards,
            setSelectedCardsId,
            setIdenticalCards
          );
        }
      }}
    >
      <View style={styles.cardContainer}>
        {isCardSelected(card, index, selectedCardsId, identicalCards) ? (
          <Animated.Image
            source={card.image}
            style={[styles.face, frontCardStyle]}
          />
        ) : (
          <Animated.Image
            source={require("../../assets/images/logo.jpg")}
            style={[styles.card, backCardStyle]}
          ></Animated.Image>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    width: 85,
    height: 85,
    // borderWidth: 2,
    // borderColor: "red",
  },
  cardContainer: {
    width: "90%",
    height: "90%",
    position: "relative",
    // borderWidth: 2,
  },
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    position: "absolute",
  },
  face: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    position: "absolute",
  },
});
