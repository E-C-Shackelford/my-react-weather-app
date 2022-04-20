import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <input
        id="searchCity-input"
        class="search-bar"
        type="City"
        placeholder="Search city"
        autofocus="on"
        autocomplete="off"
        onfocus="this.value=''"
      />

      <button>Search</button>
      <button>Current Location</button>
    </div>
  );
}
