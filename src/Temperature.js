import React, { useState } from "react";
import axios from "axios";

import "./Temperature.css";

export default function Temperature() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Temperature">
        <h3 className="temp">
          <span id="temp-current">{Math.round(temperature)}</span>{" "}
          <sup>
            <span className="scale degrees">
              <a href="/" className="scale degrees" id="celsius-link">
                °C
              </a>{" "}
              |{" "}
              <a href="/" className="scale degrees" id="fahrenheit-link">
                °F
              </a>
            </span>
          </sup>
        </h3>
      </div>
    );
  } else {
    const apiKey = "080f779f80a6c07172dd57953e33b195";
    let city = "Portland";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
