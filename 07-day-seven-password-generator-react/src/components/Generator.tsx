import { useState, ChangeEvent, MouseEvent } from "react";

export default function Generator() {
  const [password, setPassword] = useState<string>("");
  const [rangeValue, setRangeValue] = useState<number>(8);

  const characters: string[] = [];

  for (let i = 33; i <= 126; i++) {
    characters.push(String.fromCharCode(i));
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(e.target.value));
  };

  const generatePassword = () => {
    let password = "";
    for (let i = 0; i < rangeValue; i++) {
      let randomNumbers = Math.floor(Math.random() * characters.length);
      password += characters[randomNumbers];
    }
    setPassword(password);
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    generatePassword();
  };

  return (
    <div className="generator">
      <form className="form">
        {/* INPUT PASSWORD */}
        <div>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            readOnly
          />
        </div>
        {/* INPUT RANGE */}
        <div>
          <input
            type="range"
            name="length"
            id="length"
            min={6}
            max={25}
            value={rangeValue}
            onChange={handleChange}
          />
          <span className="range">{rangeValue}</span>
        </div>
        <div className="buttonBox">
          <button className="btn" onClick={handleClick}>
            Generate password
          </button>
        </div>
      </form>
    </div>
  );
}
