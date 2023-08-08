import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-deck-swiper";

function Joke() {
  let [error, setError] = useState();
  const [joke, setJoke] = useState("");
  const [delivery, setDelivery] = useState("");
  const [cards, setCards] = useState([]);
  const [lang, setLang] = useState("en");
  const [type, setType] = useState("single");

  useEffect(() => {
    fetchJokes(lang, type);
  }, [lang]);

  const fetchJokes = async (lang, type) => {
    await fetch(`https://v2.jokeapi.dev/joke/Any?lang=${lang}&type=${type}`)
      .then((res) => res.json())
      .then(
        (result) => {
          if (lang === "en") {
            setJoke(result.joke);
            setCards((prev) => [...prev, { joke: result.joke }]);
          }
          if (lang === "fr") {
            setJoke(result.setup);
            setDelivery(result.delivery);

            setCards((prev) => [
              ...prev,
              { joke: result.setup, delivery: result.delivery },
            ]);
          }
        },
        (error) => {
          setError(error);
        }
      );
  };

  const handleSwipe = () => {
    fetchJokes(lang, type);
  };

  const reset = (lang, type) => {
    setCards([]);
    setLang(lang);
    setType(type);
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
          cards={cards}
          cardIndex={0}
          renderCard={(cardData = { joke, delivery }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.text}>
                  {lang === "en"
                    ? cardData.joke
                    : cardData.joke + " " + cardData.delivery}
                </Text>
              </View>
            );
          }}
          dragStart={() => {
            handleSwipe();
          }}
          stackSize={3}
          // disableRightSwipe={true}
          // disableTopSwipe={true}
          // disableBottomSwipe={true}
          // disableLeftSwipe={true}
          cardStyle={{ flex: 1 }}
        ></Swiper>

        <View style={styles.englishButton}>
          <TouchableOpacity
            style={styles.englishButton}
            onPress={() => reset("en", "single")}
          >
            <Text>English</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.frenchButton}>
          <TouchableOpacity
            style={styles.frenchButton}
            onPress={() => reset("fr", "twopart")}
          >
            <Text>French</Text>
          </TouchableOpacity>
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
    // backgroundColor: "transparent",
    position: "absolute",
    top: 250,
    width: "50%",
    padding: 10,
    borderRadius: 50,
  },

  englishButton: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#dc3545",
    position: "absolute",
    top: 250,
    left: 110,
    width: "50%",
    padding: 10,
    borderRadius: 50,
  },
});

export default Joke;
