import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("metric");
  function showFahr(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showCels(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function farh() {
    return (props.cels * 9) / 5 + 32;
  }
  if (unit === "metric") {
    return (
      <div className="WeatherTemp">
        <span className="temp"> {Math.round(props.cels)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={showFahr}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temp"> {Math.round(farh())}</span>
        <span className="unit">
          <a href="/" onClick={showCels}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
