import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon_url}`,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "59b3fc01054638ecba59foc51366fa4t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
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
        <form className="weatherForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-form"
                onChange={handleCityChange}
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <footer>
          This project was coded by{" "}
          <a
            href="https://mellifluous-zabaione-a90532.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shaghayegh K.
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Shaghayegh9473/Live-React-Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://gleeful-trifle-0ed8de.netlify.app/"
            target="_self"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
