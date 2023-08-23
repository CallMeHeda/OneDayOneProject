import React from "react";
import Generator from "./components/Generator";

function App() {
  return (
    <div className="app">
      <h1 className="text-center mt-7 font-serif uppercase lg:text-xl lg:mt-10">
        <span className="text-rose-700">DAY 7 :</span> Password Generator
        <span className="text-rose-700">.</span>
      </h1>
      <Generator />
      <footer className="flex justify-center fixed bottom-0 left-0 p-4 w-full">
        <p className="text-sm">
          © 2023 - <span className="text-rose-700">Fatima.</span> Tous droits
          réservés.
        </p>
      </footer>
    </div>
  );
}

export default App;
