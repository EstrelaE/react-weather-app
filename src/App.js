import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>
          <a href="https://github.com/EstrelaE/weather-app-react">
            Open-source
          </a>{" "}
          project by{" "}
          <a href="https://estrela-espiridiao.netlify.app">
            Estrela Espiridião
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
