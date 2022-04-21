import React from "react";

import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
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
              <span className="temps">13°</span>{" "}
              <span className="lowest-temp">7°</span>
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
              <span className="temps">16°</span>{" "}
              <span className="lowest-temp">5°</span>
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
              <span className="temps">18°</span>{" "}
              <span className="lowest-temp">5°</span>
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
              <span className="temps">19°</span>{" "}
              <span className="lowest-temp">7°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
