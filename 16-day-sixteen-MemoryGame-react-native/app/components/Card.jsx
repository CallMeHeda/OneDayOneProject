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
  useEffect(() => {
    // if (shuffledImages.length === 34 || shuffledImages.length === 76) {
    //   ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    // } else {
    //   ScreenOrientation.unlockAsync();
    // }
    changeScreenOrientation();
  }, [shuffledImages]);

  async function changeScreenOrientation() {
    if (shuffledImages.length === 34 || shuffledImages.length === 76) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    } else {
      await ScreenOrientation.unlockAsync();
    }
  }

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
    // DAMAGES STYLE
    if (shuffledImages.length === 34) {
      return {
        ...styles.container,
        width: 70,
        height: 70,
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
