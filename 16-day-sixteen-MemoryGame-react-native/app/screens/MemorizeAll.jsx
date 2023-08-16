import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
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
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-end",
    justifyContent: "center",
    padding: 15,
    // borderWidth: 2,
    // borderColor: "white",
    // marginTop: 30,
  },
});
