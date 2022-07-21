import React, { useState } from "react";

export default function WeatherConvert(props) {
  const [unit, setUnit] = useState("celsius");
  const [temp, setTemp] = useState(props.temp);
  function convertTemp(event) {
    event.preventDefault();
    let fahrenheit = props.temp * 1.8 + 32;
    if (unit === "celsius") {
      setUnit("fahrenheit");
      setTemp(Math.round(fahrenheit));
    } else {
      setUnit("celsius");
      setTemp(props.temp);
    }
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherConvert">
        <strong>{temp}</strong> ºC |{" "}
        <a href="/" onClick={convertTemp}>
          ºF
        </a>
      </span>
    );
  } else if (unit === "fahrenheit") {
    return (
      <span className="WeatherConvert">
        <strong>{temp}</strong>{" "}
        <a href="/" onClick={convertTemp}>
          ºC{" "}
        </a>{" "}
        | ºF
      </span>
    );
  }
}
