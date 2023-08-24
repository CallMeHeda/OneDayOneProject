import axios from "axios";
import { useState, ChangeEvent } from "react";

export default function Translator() {
  const [textToTranslate, setTextToTranslate] = useState("Bonjour");
  const [language, setLanguage] = useState("en");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async (e: any) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "https://api-free.deepl.com/v2/translate",
      params: {
        text: textToTranslate,
        target_lang: language,
        auth_key: process.env.REACT_APP_API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setTranslatedText(response.data.translations[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async (e: any) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://api-free.deepl.com/v2/languages",
      params: {
        auth_key: process.env.REACT_APP_API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button type="submit" onClick={handleTranslate}>
        Translate
      </button>
      <div>
        <h2>Translated Text:</h2>
        <p>{translatedText}</p>
      </div>

      <button onClick={getData}>CLICK</button>
    </div>
  );
}
