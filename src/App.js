import WeatherSearch from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <WeatherSearch defaultPlace="Lisbon" />
      <footer>
        <p>
          <a href="https://github.com/EstrelaE/react-weather-app">
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
