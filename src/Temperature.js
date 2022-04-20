import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <h3 class="temp">
        <span id="temp-current">9</span>
        <sup>
          <span class="scale degrees">
            <a href="/" class="scale degrees" id="celsius-link">
              °C
            </a>
            |
            <a href="/" class="scale degrees" id="fahrenheit-link">
              °F
            </a>
          </span>
        </sup>
      </h3>
    </div>
  );
}
