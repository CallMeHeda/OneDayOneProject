import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { tanks } from "../utils/heroes";
import Card from "../components/Card";
import * as utils from "../utils/utils";
import { useTimer } from "../hooks/useTimer";
import ShowModal from "../components/ShowModal";

function MemorizeTanks() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCardsId, setSelectedCardsId] = useState([]);
  const [identicalCards, setIdenticalCards] = useState([]);

  const isGameComplete = identicalCards.length === shuffledImages.length;
  const timer = useTimer(isGameComplete);

  useEffect(() => {
    utils.shuffleCards(tanks, setShuffledImages);
  }, []);

  return (
    <View style={styles.container}>
      {!isGameComplete ? (
        <Text style={styles.text}>Memorize Tanks: {timer} </Text>
      ) : (
        <ShowModal
          timer={timer}
          setSelectedCardsId={setSelectedCardsId}
          setSelectedCards={setSelectedCards}
          setIdenticalCards={setIdenticalCards}
          reset={utils.reset}
        />
      )}
      <View style={styles.cards}>
        {shuffledImages?.map((image, index) => (
          <Card
            key={index}
            card={image}
            index={index}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            selectedCardsId={selectedCardsId}
            setIdenticalCards={setIdenticalCards}
            identicalCards={identicalCards}
            setSelectedCardsId={setSelectedCardsId}
            checkFlippedImages={utils.checkFlippedImages}
            isCardSelected={utils.isCardSelected}
            shuffledImages={shuffledImages}
          />
        ))}
      </View>
    </View>
  );
}
export default MemorizeTanks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b2a33",
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#2b2a33",
    marginTop: 15,
  },
  text: {
    color: "#cd3545",
    fontSize: 25,
    marginTop: 20,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});
