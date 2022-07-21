import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConvert from "./WeatherConvert";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="Overview">
        <h1>
          {props.data.city}, {props.data.country}
        </h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            <WeatherIcon
              icon={props.data.icon}
              description={props.data.description}
            />
            <WeatherConvert temp={props.data.temp} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
