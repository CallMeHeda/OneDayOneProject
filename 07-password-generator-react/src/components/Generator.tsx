import { useState, ChangeEvent, MouseEvent } from "react";
import { FaCopy } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

export default function Generator() {
  const [password, setPassword] = useState<string>("");
  const [rangeValue, setRangeValue] = useState<number>(8);
  const [passwordCopied, setPasswordCopied] = useState<string>("");

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

  const handleCopyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setPasswordCopied("Password copied");
    }
  };

  return (
    <div className="generator flex justify-center">
      <form className="m-6 lg:m-12 lg:w-1/3">
        <div className="flex justify-end items-center uppercase mb-2">
          <span className="text-xs">{passwordCopied}</span>
        </div>
        {/* INPUT PASSWORD */}
        <div className="flex">
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            className="flex w-full bg-gray-800 text-white py-2 px-3 mb-2 focus:outline-none"
            readOnly
          />
          <div className="relative">
            <span className="flex justify-center h-5/6 items-center absolute inset-y-0 right-2">
              <FaCopy onClick={handleCopyPassword} />
            </span>
          </div>
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
          <span className="flex font-serif font-medium">{rangeValue}</span>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="flex items-center p-2 rounded bg-slate-700 shadow-md shadow-black text-slate-200 capitalize"
            onClick={handleClick}
          >
            Generate password <FaKey className="ml-2 text-rose-500" />
          </button>
        </div>
      </form>
    </div>
  );
}
