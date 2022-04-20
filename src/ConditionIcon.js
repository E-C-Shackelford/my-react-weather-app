import React from "react";

import "./ConditionIcon.css";

export default function ConditionIcon() {
  return (
    <div className="ConditionIcon">
      <div class="weather-icon weather-icon-main icon-position">
        <img src="http://openweathermap.org/img/wn/04d@2x.png" id="icon" />
      </div>
    </div>
  );
}
