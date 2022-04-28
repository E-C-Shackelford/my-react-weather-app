import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div id="searchCity-form">
          <div className="container">
            <div className="container main">
              <h1 id="city">{weatherData.city}</h1>
              <h2>{weatherData.date}</h2>
              <h3 className="temp">
                <span id="temp-current">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
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
                  {weatherData.condition}
                </div>
                <div
                  className="weather-icon weather-icon-main"
                  id="icon-position"
                >
                  <img src={weatherData.icon} id="icon" />
                </div>
                <div className="wind-speed-icon">
                  <i
                    className="fa-solid fa-wind weather-icon-main"
                    id="wind-icon"
                  ></i>
                </div>
                <div className="wind-position" id="wind">
                  {weatherData.wind}
                </div>
              </div>

              <input
                id="searchCity-input"
                className="search-bar"
                type="City"
                placeholder="Search city"
                autofocus="on"
                autocomplete="off"
                onfocus="this.value=''"
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
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "080f779f80a6c07172dd57953e33b195";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
