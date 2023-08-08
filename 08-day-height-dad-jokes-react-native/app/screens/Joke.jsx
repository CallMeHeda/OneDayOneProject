import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useFetchData } from "../hooks/useFetchData";
import SwiperComponent from "../components/SwiperComponent";
import Header from "../components/Header";
import Buttons from "../components/Buttons";

function Joke() {
  const {
    fetchJokes,
    lang,
    type,
    cards,
    joke,
    delivery,
    setLang,
    setType,
    setCards,
  } = useFetchData();

  useEffect(() => {
    fetchJokes(lang, type);
  }, [lang]);

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
      <Header></Header>

      <View
        style={{
          marginTop: 30,
        }}
      >
        <SwiperComponent
          cards={cards}
          lang={lang}
          joke={joke}
          delivery={delivery}
          handleSwipe={handleSwipe}
        />
      </View>
      <Buttons reset={reset}></Buttons>
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
