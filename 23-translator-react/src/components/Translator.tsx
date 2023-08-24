import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { Dropdown } from "primereact/dropdown";

export default function Translator() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const [languageTarget, setLanguageTarget] = useState("en");
  const [languageTarget2, setLanguageTarget2] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [languages, setLanguages] = useState([{ language: "", name: "" }]);

  const languageOptions = languages.map((language) => ({
    value: language.language,
    label: language.name,
  }));

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
        source_lang: languageTarget,
        target_lang: languageTarget2,
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
      console.log(languages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextToTranslate(e.target.value);
  };
  const handleDropdownChange = (e: { value: any }) => {
    setLanguageTarget2(e.value);
  };

  const selectedLanguagesTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.value}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const LanguageOptionTemplate = (option: any) => {
    return (
      <div className="flex align-items-center">
        <div>{option.label}</div>
      </div>
    );
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
        <Dropdown
          value={languageTarget2}
          onChange={handleDropdownChange}
          name="language"
          options={languageOptions}
          optionLabel="name"
          placeholder="Select a language"
          filter
          valueTemplate={selectedLanguagesTemplate}
          itemTemplate={LanguageOptionTemplate}
          className="w-full md:w-14rem"
        />

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
