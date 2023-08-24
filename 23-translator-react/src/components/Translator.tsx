import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { Dropdown } from "primereact/dropdown";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { Button } from "primereact/button";

export default function Translator() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const [language, setLanguage] = useState("");
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

  //   useEffect(() => {
  //     console.log(textToTranslate);
  //   }, [textToTranslate]);

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
      //   console.log(textToTranslate);
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

  const selectedLanguagesTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.label}</div>
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

  const renderHeaderLanguage = () => {
    return (
      <Dropdown
        value={language}
        onChange={handleDropdownChange}
        name="language"
        options={languageOptions}
        optionLabel="name"
        placeholder="Starting Language"
        valueTemplate={selectedLanguagesTemplate}
        itemTemplate={LanguageOptionTemplate}
        className="w-full md:w-14rem"
      />
    );
  };
  const renderHeaderTargetLanguage = () => {
    return (
      <Dropdown
        value={languageTarget}
        onChange={handleDropdownChange}
        name="languageTarget"
        options={languageOptions}
        optionLabel="name"
        placeholder="Select a Language"
        valueTemplate={selectedLanguagesTemplate}
        itemTemplate={LanguageOptionTemplate}
        className="w-full md:w-14rem"
      />
    );
  };
  const headerLanguage = renderHeaderLanguage();
  const headerTargetLanguage = renderHeaderTargetLanguage();

  return (
    <div>
      <h1>Translation</h1>
      <form>
        <label htmlFor="textToTranslate">Text to Translate:</label>
        <div className="flex flex-row flex-wrap justify-content-center gap-2">
          <div className="card ">
            <Editor
              value={textToTranslate}
              onTextChange={handleInputChange}
              headerTemplate={headerLanguage}
              style={{ width: "750px", height: "320px" }}
            />
          </div>
          <div className="card">
            <Editor
              value={translatedText}
              readOnly
              headerTemplate={headerTargetLanguage}
              style={{ width: "750px", height: "320px" }}
            />
          </div>
        </div>
        <br />
      </form>
    </div>
  );
}
