import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="day">{day()}</div>
      <div className="weather-icon">
        <img
          src={props.data.weather[0].iconUrl}
          alt={props.data.weather[0].condition}
          id="icon"
        />
      </div>
      <div>
        <span className="temps">{maxTemperature()}°</span>{" "}
        <span class="lowest-temp">{minTemperature()}°</span>
      </div>
    </div>
  );
}
