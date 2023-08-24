import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";

export default function Translator() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const [languageTarget, setLanguageTarget] = useState("en");
  const [translatedText, setTranslatedText] = useState("");
  const [languages, setLanguages] = useState([{ language: "", name: "" }]);

  useEffect(() => {
    getData();
  }, []);

  const handleTranslate = async (e: any) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "https://api-free.deepl.com/v2/translate",
      params: {
        text: textToTranslate,
        source_lang: languages,
        target_lang: languageTarget,
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

  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://api-free.deepl.com/v2/languages",
      params: {
        auth_key: process.env.REACT_APP_API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      setLanguages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "textToTranslate") {
      setTextToTranslate(value);
    } else if (name === "language") {
      setLanguageTarget(value);
    }
  };

  return (
    <div>
      <h1>Translation</h1>
      <form onSubmit={handleTranslate}>
        <label htmlFor="textToTranslate">Text to Translate:</label>
        <input
          type="text"
          name="textToTranslate"
          id="textToTranslate"
          value={textToTranslate}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="language">Target Language:</label>
        <select
          id="language"
          value={languageTarget}
          name="language"
          onChange={handleInputChange}
          required
        >
          {languages.map((lang, index) => (
            <option key={index} value={lang.language}>
              {lang.name}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Translate</button>
      </form>
      <div>
        <h2>Translated Text:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}
