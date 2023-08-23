import React from "react";
import "./assets/styles/app.css";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Canvas />
      <Footer />
    </div>
  );
}

export default App;
