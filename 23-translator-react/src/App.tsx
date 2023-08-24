import "./assets/app.css";
import Translator from "./components/Translator";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Translator />
      <Footer />
    </div>
  );
}

export default App;
