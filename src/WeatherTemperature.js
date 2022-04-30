import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span id="temp-current">{Math.round(props.celsius)}</span>{" "}
        <sup>
          <span className="scale degrees">
            °C |{" "}
            <a href="/" className="scale degrees" onClick={displayFahrenheit}>
              °F
            </a>
          </span>
        </sup>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span id="temp-current">{Math.round(fahrenheit)}</span>
        <sup>
          <span className="scale degrees">
            <a href="/" className="scale degrees" onClick={displayCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </sup>
      </div>
    );
  }
}
