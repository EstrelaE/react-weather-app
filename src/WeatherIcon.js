import React from "react";

export default function WeatherIcon(props) {
  const icons = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "partly-cloudy-day",
    "02n": "partly-cloudy-night",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "overcast-rain-day",
    "09n": "overcast-rain-night",
    "10d": "partly-cloudy-day-rain",
    "10n": "partly-cloudy-night-rain",
    "11d": "thunderstorms-day",
    "11n": "thunderstorms-night",
    "13d": "partly-cloudy-day-snow",
    "13n": "partly-cloudy-night-snow",
    "50d": "fog-day",
    "50n": "fog-night",
  };
  let icon = `https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/${
    icons[props.icon]
  }.svg`;
  console.log(icons[props.icon]);

  return <img src={icon} alt={props.description} />;
}
