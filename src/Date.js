import React from "react";

import "./Date.css";

export default function Date(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentDay = days[props.date.getDay()];
  let currentMonth = months[props.date.getMonth()];
  let currentDate = props.date.getDate();

  let currentHours = props.date.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = props.date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  return (
    <div className="Date">
      <h2>
        {currentDay} {currentMonth} {currentDate} | {currentHours}:
        {currentMinutes}
      </h2>
    </div>
  );
}
