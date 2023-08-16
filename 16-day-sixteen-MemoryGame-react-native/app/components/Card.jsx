import { View, TouchableOpacity, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";

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
  shuffledImages,
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

  const getCardStyle = () => {
    // TANKS CARD STYLE
    if (shuffledImages.length === 22) {
      return {
        ...styles.container,
        width: 80,
        height: 80,
      };
    }
    // DAMAGES STYLE
    if (shuffledImages.length === 34) {
      return {
        ...styles.container,
        width: 65,
        height: 65,
      };
    }
    // SUPPORTS CARD STYLE
    if (shuffledImages.length === 20) {
      return {
        ...styles.container,
        width: 85,
        height: 85,
      };
    }
    // ALL CHARACTERS CARDS STYLE
    if (shuffledImages.length === 76) {
      return {
        ...styles.container,
        width: 45,
        height: 45,
      };
    }

    return styles.container;
  };

  return (
    <TouchableOpacity
      style={getCardStyle()}
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
            source={require("../../assets/images/logoCard.jpg")}
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
  },
  cardContainer: {
    width: "90%",
    height: "90%",
    position: "relative",
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
