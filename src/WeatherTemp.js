import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={convCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
