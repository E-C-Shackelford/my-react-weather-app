import React, { useState } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "080f779f80a6c07172dd57953e33b195";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="container main">
            <WeatherDetails data={weatherData} />
            <form id="searchCity-form" onSubmit={handleSubmit}>
              <input
                id="searchCity-input"
                className="search-bar"
                type="search"
                placeholder="Search city"
                //autofocus="on"
                //autocomplete="off"
                onChange={handleCityChange}
                //onfocus="this.value=''"
              />

              <button>Search</button>
            </form>
            <div className="container daily-forecast" id="forecast">
              <div className="row align-items-start">
                <WeatherForecast coordinates={weatherData.coordinates} />
              </div>
            </div>

            <div className="footer-style">
              {" "}
              <a
                className="built-style"
                href="https://github.com/E-C-Shackelford/my-react-weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Built
              </a>{" "}
              by Elizabeth Shackelford
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
