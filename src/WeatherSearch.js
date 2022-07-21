import React, { useState } from "react";
import WeatherData from "./WeatherData";

import axios from "axios";
import "./WeatherSearch.css";

export default function Weather(props) {
  const [place, setPlace] = useState(props.defaultPlace);
  const [weather, setWeather] = useState({ state: false });

  function updatePlace(event) {
    setPlace(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getData();
  }

  function getData() {
    const key = "7d4b36832aa0df817c40b6929c606b4e";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&APPID=${key}`;
    axios.get(url).then(displayTemp);
  }

  function displayTemp(response) {
    setWeather({
      state: true,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  if (weather.state) {
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
            {/* <div className="col-1">
              <button className="btn btn-primary">
                <i class="fas fa-crosshairs"></i>
              </button>
            </div>
            <div className="col-1">
              <button className="btn btn-primary">Random</button>
            </div> */}
          </div>
        </form>

        <WeatherData data={weather} />
      </div>
    );
  } else {
    getData();
    return;
  }
}
