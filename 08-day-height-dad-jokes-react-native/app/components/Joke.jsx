import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

function Joke() {
  let [error, setError] = useState();
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    fetch(`https://v2.jokeapi.dev/joke/Any?&type=single`)
      .then((res) => res.json())
      .then(
        (result) => {
          setJoke(result.joke);
          console.log(result);
        },
        (error) => {
          setError(error);
        }
      );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{joke}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
    width: "100%",
  },
  text: {
    textAlign: "center",
    borderWidth: 2,
  },
});

export default Joke;
