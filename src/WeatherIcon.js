import React from "react";
import { WeatherSvg } from "weather-icons-animated";
import "./Weather.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    Clear: "day-sunny",
    Clouds: "cloudy",
    Rain: "rain",
    Snow: "snow",
    Thunderstorm: "thunderstorm",
    Drizzle: "sprinkle",
  };

  return <WeatherSvg state={codeMapping[props.code]} width={50} height={50} />;
}
