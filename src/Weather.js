import React, { useState } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
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
        <WeatherDetails data={weatherData} />

        <input
          onSubmit={handleSubmit}
          id="searchCity-input"
          className="search-bar"
          type="City"
          placeholder="Search city"
          autofocus="on"
          autocomplete="off"
          onfocus="this.value=''"
          onChange={handleCityChange}
        />

        <button>Search</button>
        <button id="current-location-button">Current Location</button>

        <div className="container daily-forecast" id="forecast">
          <div className="row align-items-start">
            <div className="col">
              <div className="day">Wed</div>
              <div className="weather-icon">
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="Clear"
                  id="icon"
                />
              </div>
              <div>
                <span className="temps">59°</span>{" "}
                <span class="lowest-temp">50°</span>
              </div>
            </div>
            <div className="col">
              <div className="day">Thu</div>
              <div className="weather-icon">
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="Clouds"
                  id="icon"
                />
              </div>
              <div>
                <span className="temps">53°</span>{" "}
                <span class="lowest-temp">47°</span>
              </div>
            </div>
            <div className="col">
              <div className="day">Fri</div>
              <div className="weather-icon">
                <img
                  src="http://openweathermap.org/img/wn/03d@2x.png"
                  alt="Clear"
                  id="icon"
                />
              </div>
              <div>
                <span className="temps">50°</span>{" "}
                <span class="lowest-temp">40°</span>
              </div>
            </div>
            <div className="col">
              <div className="day">Sat</div>
              <div className="weather-icon">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt="Clear"
                  id="icon"
                />
              </div>
              <div>
                <span className="temps">53°</span>{" "}
                <span class="lowest-temp">40°</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-style">
          {" "}
          <a
            className="built-style"
            href="https://github.com/E-C-Shackelford/my-react-weather-app"
          >
            Built
          </a>{" "}
          by Elizabeth Shackelford
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
