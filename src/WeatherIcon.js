import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {};

  return <WeatherSvg state={codeMapping[props.code]} width={50} height={50} />;
}
