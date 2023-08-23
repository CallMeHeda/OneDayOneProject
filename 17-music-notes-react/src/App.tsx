import { useState } from "react";
import "./global.scss";
import Beat from "./components/Beat";
import PianoView from "./components/PianoView";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Beat");

  const handleSelectPiano = () => {
    setSelectedComponent("Piano");
  };

  const handleSelectBeat = () => {
    setSelectedComponent("Beat");
  };

  return (
    <div className="app">
      <Header />
      <div className="buttons">
        <Button
          setSelectedComponent={setSelectedComponent}
          handleClick={handleSelectPiano}
          title="Piano"
        />

        <Button
          setSelectedComponent={setSelectedComponent}
          handleClick={handleSelectBeat}
          title="Beats"
        />
      </div>

      {selectedComponent === "Piano" && <PianoView />}
      {selectedComponent === "Beat" && <Beat />}

      <Footer />
    </div>
  );
}

export default App;
