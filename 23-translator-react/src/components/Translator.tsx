import axios from "axios";
import { useState, useEffect } from "react";
import LanguageDropdown from "./LanguageDropdown";
import TranslationEditor from "./TranslationEditor";
import { EditorTextChangeEvent } from "primereact/editor";

export default function Translator() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const [language, setLanguage] = useState("French");
  const [languageTarget, setLanguageTarget] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [languages, setLanguages] = useState([{ language: "", name: "" }]);

  const languageOptions = languages.map((language) => ({
    value: language.language,
    label: language.name,
  }));

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (language && languageTarget) {
      handleTranslate();
    }
  }, [textToTranslate, language, languageTarget]);

  const handleTranslate = async () => {
    const options = {
      method: "POST",
      url: "https://api-free.deepl.com/v2/translate",
      params: {
        text: textToTranslate,
        source_lang: language,
        target_lang: languageTarget,
        auth_key: process.env.REACT_APP_API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      const translatedText = response.data.translations[0].text;
      setTranslatedText(translatedText);
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

  const handleInputChange = (e: EditorTextChangeEvent) => {
    if (e.htmlValue !== null) {
      setTextToTranslate(e.htmlValue);
    }
  };
  const handleDropdownChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "language") {
      setLanguage(value);
    } else {
      setLanguageTarget(value);
    }
  };

  const renderHeaderLanguage = () => {
    return (
      <LanguageDropdown
        value={language}
        onChange={handleDropdownChange}
        name="language"
        options={languageOptions}
        placeholder="Language"
      />
    );
  };
  const renderHeaderTargetLanguage = () => {
    return (
      <LanguageDropdown
        value={languageTarget}
        onChange={handleDropdownChange}
        name="languageTarget"
        options={languageOptions}
        placeholder="Select a language"
      />
    );
  };
  const headerLanguage = renderHeaderLanguage();
  const headerTargetLanguage = renderHeaderTargetLanguage();

  return (
    <div className="flex flex-row flex-wrap justify-content-center gap-1 align-self-center mt-8">
      <TranslationEditor
        value={textToTranslate}
        onTextChange={handleInputChange}
        headerTemplate={headerLanguage}
        style={{
          width: "750px",
          height: "400px",
        }}
      />
      <TranslationEditor
        value={translatedText}
        readOnly
        headerTemplate={headerTargetLanguage}
        style={{
          width: "750px",
          height: "400px",
        }}
      />
    </div>
  );
}
