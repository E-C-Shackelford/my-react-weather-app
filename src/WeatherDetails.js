import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <h1 id="city">{props.data.city}</h1>
      <h2>
        <FormatDate date={props.data.date} />
      </h2>
      <h3 className="temp">
        <WeatherTemperature celsius={props.data.temperature} />
      </h3>
      <div className="weather-conditions">
        <div className="text-capitalize weather-descriptor" id="description">
          {props.data.condition}
        </div>
        <div className="weather-icon weather-icon-main" id="icon-position">
          <img src={props.data.icon} id="icon" />
        </div>
        <div className="wind-speed-icon">
          <i className="fa-solid fa-wind weather-icon-main" id="wind-icon"></i>
        </div>
        <div className="wind-position" id="wind">
          {Math.round(props.data.wind)} km/h
        </div>
      </div>
    </div>
  );
}
