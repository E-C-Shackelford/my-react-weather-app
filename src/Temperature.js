import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <h3 className="temp">
        <span id="temp-current">9</span>{" "}
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
}
