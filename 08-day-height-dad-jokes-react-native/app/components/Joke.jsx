import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import CountryFlag from "react-native-country-flag";

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
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={styles.day}>Day 8 :</Text>
        <Text style={styles.title}> Jokes App</Text>
        <Text style={styles.day}>.</Text>
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
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          top: 555,
        }}
      >
        <TouchableOpacity
          onPress={() => reset("en", "single")}
          style={[styles.boxShadow, { borderRadius: 50, width: 60 }]}
        >
          <CountryFlag
            style={[{ borderRadius: 50, width: 60 }]}
            isoCode="gb"
            size={60}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => reset("fr", "twopart")}
          style={[styles.boxShadow, { borderRadius: 50, width: 60 }]}
        >
          <CountryFlag
            style={{ borderRadius: 50, width: 60 }}
            isoCode="fr"
            size={60}
          />
        </TouchableOpacity>
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
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  day: {
    textAlign: "center",
    fontSize: 24,
    color: "#cd3545",
  },
  card: {
    flex: 1,
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "#78A1BB",
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
  boxShadow: {
    shadowColor: "#bfb7b7",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Joke;
