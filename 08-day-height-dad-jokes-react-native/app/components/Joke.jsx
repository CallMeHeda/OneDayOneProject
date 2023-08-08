import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Swiper from "react-native-deck-swiper";

const Test = () => {
  let [error, setError] = useState();
  const [joke, setJoke] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, [joke]);

  const fetchJokes = async () => {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=en&type=single")
      .then((res) => res.json())
      .then(
        (result) => {
          setJoke(result.joke);
          // console.log(result);
          setCards((prevCards) => [...prevCards, { joke: result.joke }]);
        },
        (error) => {
          setError(error);
        }
      );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "relative",
          top: 65,
        }}
      >
        <Text style={styles.text}>Day 8 : Jokes App</Text>
      </View>

      <View
        style={{
          marginTop: 30,
        }}
      >
        <Swiper
          cards={cards.map((card) => card.joke)}
          renderCard={(joke) => {
            return (
              <View style={styles.card}>
                <Text style={styles.text}>{joke}</Text>
              </View>
            );
          }}
          onSwiped={() => {
            fetchJokes();
          }}
          cardIndex={0}
          stackSize={3}
          disableRightSwipe={true}
          disableTopSwipe={true}
          disableBottomSwipe={true}
          style={{ flex: 1 }}
        ></Swiper>
      </View>

      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>French Jokes</Text>
      </TouchableOpacity> */}

      {/* <View style={styles.button}>
        <Button
          title="Show Answer"
          onPress={() => console.log("Right button pressed")}
        />
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderColor: "green",
  },
  card: {
    flex: 1,
    alignSelf: "center",
    borderRadius: 50,
    backgroundColor: "#dc3545",
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    width: "90%",
    maxHeight: "80%",
    padding: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#dc3545",
    position: "absolute",
    bottom: 10,
    width: "50%",
    padding: 10,
    borderRadius: 50,
  },
});

export default Test;
