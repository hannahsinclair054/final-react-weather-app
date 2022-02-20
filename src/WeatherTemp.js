import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
      <span className="temp"> {Math.round(props.cels)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
