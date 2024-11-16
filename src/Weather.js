import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>San Francisco</h1>
            <ul>
              <li>
                <span>Friday 19:07</span>, <span>few clouds</span>
              </li>
              <li>
                Humiditiy: <strong>77%</strong>, Wind: <strong>6.69km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-8">
            <div className="temperature-container d-flex justify-content-end">
              <img
                src="data:image/png;base64,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"
                alt="few clouds"
              />
              <div>
                <span className="temperature">10</span>
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
}
