import "./App.css";
import Navbar from "./components/Navbar";
import ONama from "./components/ONama";
import Lokacija from "./components/Lokacija";
import { Kontakt } from "./components/Kontakt";
import { Impresium } from "./components/Impresium";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ONama />
      <Lokacija />
      <Kontakt />
      <Impresium />
    </div>
  );
}

export default App;
