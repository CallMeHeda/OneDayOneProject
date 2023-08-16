import { useState } from "react";

export function useFetchData() {
  let [error, setError] = useState();
  const [joke, setJoke] = useState("");
  const [delivery, setDelivery] = useState("");
  const [cards, setCards] = useState([]);
  const [lang, setLang] = useState("en");
  const [type, setType] = useState("single");

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

  return {
    fetchJokes,
    lang,
    type,
    joke,
    delivery,
    cards,
    setCards,
    setJoke,
    setDelivery,
    setLang,
    setType,
    setError,
  };
}
