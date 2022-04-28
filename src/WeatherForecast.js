import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
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
  );
}
