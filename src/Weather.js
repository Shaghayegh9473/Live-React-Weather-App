import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      date: new Date(response.data.time.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header className="mt-3 mb-5">
          <a
            href="https://www.shecodes.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./logo.png" alt="logo" className="logo" />
          </a>
        </header>
        <form className="weatherForm">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-form"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <div className="weatherInfo">
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <span>
                    <FormattedDate date={weatherData.date} />
                  </span>
                  ,{" "}
                  <span className="text-capitalize">
                    {weatherData.description}
                  </span>
                </li>
                <li>
                  Humiditiy: <strong>{weatherData.humidity}%</strong>, Wind:{" "}
                  <strong>{weatherData.wind}km/h</strong>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div className="temperature-container d-flex justify-content-end">
                <img src={weatherData.icon_url} alt={weatherData.description} />
                <div>
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C | °F</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          This project was coded by{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Shaghayegh K.
          </a>{" "}
          and is open-sourced on{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    const apiKey = "59b3fc01054638ecba59foc51366fa4t";
    let city = "San Francisco";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
