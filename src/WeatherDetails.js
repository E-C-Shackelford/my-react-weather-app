import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <div className="container">
        <div className="container main">
          <h1 id="city">{props.data.city}</h1>
          <h2>
            <FormatDate date={props.data.date} />
          </h2>
          <h3 className="temp">
            <span id="temp-current">{Math.round(props.data.temperature)}</span>{" "}
            <sup>
              <span className="scale degrees">
                <a href="#" className="scale degrees" id="celsius-link">
                  °C
                </a>{" "}
                |{" "}
                <a href="#" className="scale degrees" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </sup>
          </h3>
          <div className="weather-conditions">
            <div className="weather-descriptor" id="description">
              {props.data.condition}
            </div>
            <div className="weather-icon weather-icon-main" id="icon-position">
              <img src={props.data.icon} id="icon" />
            </div>
            <div className="wind-speed-icon">
              <i
                className="fa-solid fa-wind weather-icon-main"
                id="wind-icon"
              ></i>
            </div>
            <div className="wind-position" id="wind">
              {Math.round(props.data.wind)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
