import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { supports } from "../utils/heroes";
import Card from "../components/Card";
import * as utils from "../utils/utils";

function MemorizeSupports() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCardsId, setSelectedCardsId] = useState([]);
  const [identicalCards, setIdenticalCards] = useState([]);

  useEffect(() => {
    utils.shuffleCards(supports, setShuffledImages);
  }, []);

  return (
    <View>
      <View style={styles.container}>
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
          />
        ))}
      </View>
    </View>
  );
}
export default MemorizeSupports;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    // borderWidth: 2,
  },
});
