import React from "react";
import "./weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Sydney</h1>
      <ul>
        <li>Wednesday, 07:00</li>
        <li>Partly cloudy </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Partly cloudy"
              />
            </div>
            <div className="float-left">
              <span className="temp">20</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 20%</li>
            <li>Humidity: 67%</li>
            <li>Wind: 16 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
