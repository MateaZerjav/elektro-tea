import "./App.css";
import Navbar from "./components/Navbar";
import ONama from "./components/ONama";
import Lokacija from "./components/Lokacija";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ONama />
      <Lokacija />
    </div>
  );
}

export default App;
