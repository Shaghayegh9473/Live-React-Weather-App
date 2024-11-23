import React from "react";
import { WeatherSvg } from "weather-icons-animated";
import "./Weather.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "partlycloudy",
    "scattered-clouds-day": "partlycloudy",
    "scattered-clouds-night": "partlycloudy",
    "broken-clouds-day": "partlycloudy",
    "broken-clouds-night": "partlycloudy",
    "shower-rain-day": "rainy",
    "shower-rain-night": "rainy",
    "rain-day": "rainy",
    "rain-night": "rainy",
    "thunderstorm-day": "lightening-rainy",
    "thunderstorm-night": "lightening-rainy",
    "snowy-day": "snowy",
    "snowy-night": "snowy",
    "mist-day": "fog",
    "mist-night": "fog",
  };

  const weatherState = codeMapping[props.code];

  return (
    <WeatherSvg
      state={weatherState}
      width={props.width}
      height={props.height}
    />
  );
}
