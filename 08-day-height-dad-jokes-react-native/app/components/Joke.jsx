import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";

function Joke() {
  let [error, setError] = useState();
  const [joke, setJoke] = useState("");
  const [delivery, setDelivery] = useState("");
  const [cards, setCards] = useState([]);
  const [lang, setLang] = useState("en");
  const [type, setType] = useState("single");

  useEffect(() => {
    fetchJokes();
  }, [lang]);

  const fetchJokes = async () => {
    fetch(`https://v2.jokeapi.dev/joke/Any?lang=${lang}&type=${type}`)
      .then((res) => res.json())
      .then(
        (result) => {
          if (lang === "en") {
            setType("single");
            setJoke(result.joke);
            // setDelivery("");

            setCards((prevCards) => [...prevCards, { joke: result.joke }]);
          }
          if (lang === "fr") {
            setType("twopart");
            setJoke(result.setup);
            setDelivery(result.delivery);

            setCards((prevCards) => [
              ...prevCards,
              { joke: result.setup, delivery: result.delivery },
            ]);
          }
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
        <Text style={styles.text}>Day 8 : Jokes App {lang}</Text>
      </View>

      <View
        style={{
          marginTop: 30,
        }}
      >
        <Swiper
          cards={cards.map((card) => {
            return { joke: card.joke, delivery: card.delivery };
          })}
          renderCard={(cardData = { joke, delivery }) => {
            return (
              <View style={styles.card}>
                {lang === "en" ? (
                  <Text style={styles.text}>{cardData.joke}</Text>
                ) : (
                  <Text style={styles.text}>{cardData.delivery}</Text>
                )}
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

        <View style={styles.englishButton}>
          <Button title="english" onPress={() => setLang("en")}></Button>
        </View>

        <View style={styles.frenchButton}>
          <Button title="french" onPress={() => setLang("fr")}></Button>
        </View>
      </View>
    </View>
  );
}

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
  frenchButton: {
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

  englishButton: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#dc3545",
    position: "absolute",
    top: 10,
    width: "50%",
    padding: 10,
    borderRadius: 50,
  },
});

export default Joke;
