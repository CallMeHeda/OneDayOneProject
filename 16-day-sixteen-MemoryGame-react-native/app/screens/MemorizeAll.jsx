import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { all } from "../utils/heroes";
import Card from "../components/Card";
import * as utils from "../utils/utils";

function MemorizeAll() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCardsId, setSelectedCardsId] = useState([]);
  const [identicalCards, setIdenticalCards] = useState([]);

  useEffect(() => {
    utils.shuffleCards(all, setShuffledImages);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Memorize All</Text>
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
export default MemorizeAll;

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
    marginTop: 10,
  },
  text: {
    color: "#cd3545",
    fontSize: 40,
    marginTop: 10,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});
