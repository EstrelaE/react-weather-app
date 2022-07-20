import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [place, setPlace] = useState("");
  const [weather, setWeather] = useState({
    city: "Lisbon",
    country: "Portugal",
    description: "Clear Sky",
    date: "09/07/2022",
    temp: 26,
    wind: 6,
    humidity: 30,
    url: "https://openweathermap.org/img/wn/01d@2x.png",
  });

  function updatePlace(event) {
    setPlace(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const key = "7d4b36832aa0df817c40b6929c606b4e";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&APPID=${key}`;
    axios.get(url).then(displayTemp);
  }

  function displayTemp(response) {
    setWeather({
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      date: "09/07/2022",
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      url: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  return (
    <div className="Weather">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row ">
          <div className="col-6">
            <input
              onChange={updatePlace}
              type="search"
              placeholder="Search for a place.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-1">
            <button type="submit" className="btn btn-primary">
              <i class="fas fa-search-location"></i>
            </button>
          </div>
          <div className="col-1">
            <button className="btn btn-primary">
              <i class="fas fa-crosshairs"></i>
            </button>
          </div>
          <div className="col-1">
            <button className="btn btn-primary">Random</button>
          </div>
        </div>
      </form>
      <div className="Overview">
        <h1>
          {weather.city}, {weather.country}
        </h1>
        <ul>
          <li>
            {weather.date} <small> (last updated)</small>
          </li>
          <li>{weather.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            <img src={weather.url} alt={weather.description} />
            <strong>{weather.temp}</strong> ºC
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind:{weather.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
