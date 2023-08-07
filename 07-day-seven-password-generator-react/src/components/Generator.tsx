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
    <div className="generator flex justify-center">
      <form className="m-6 lg:m-12 lg:w-1/3">
        {/* INPUT PASSWORD */}
        <div className="flex">
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            readOnly
            className="flex w-full bg-gray-800 text-white py-2 px-3 mb-2 focus:outline-none"
          />
        </div>
        {/* INPUT RANGE */}
        <div className="flex justify-center items-center">
          <input
            type="range"
            name="length"
            id="length"
            min={6}
            max={25}
            value={rangeValue}
            onChange={handleChange}
            className="w-full mr-2 accent-rose-700"
          />
          <span className="range flex font-serif font-medium">
            {rangeValue}
          </span>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="btn flex items-center p-2 rounded bg-slate-700 shadow-md shadow-black text-slate-200 capitalize"
            onClick={handleClick}
          >
            Generate password
          </button>
        </div>
      </form>
    </div>
  );
}
