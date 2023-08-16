import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { supports } from "../utils/heroes";
import * as utils from "../utils/utils";

function MemorizeSupports() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    utils.shuffleCards(supports, setShuffledImages);
    console.log(shuffledImages);
  }, []);

  return <View></View>;
}
export default MemorizeSupports;
