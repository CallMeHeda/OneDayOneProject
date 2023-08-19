import { API_KEY } from "@env";
import { URL } from "@env";
import { useState } from "react";

export const useFetch = () => {
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondion] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  const [isDay, setIsDay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeatherByCity = (city) => {
    setIsLoading(true);
    fetch(`${URL}${city}&lang=fr&key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setTemperature(json.current.temp_c);
        setWeatherCondion(json.current.condition.text);
        setCountry(json.location.country);
        setCity(city);
        setIcon(json.current.condition.icon);
        setIsDay(json.current.is_day);
        console.log(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching weather data:", error);
      });
  };

  return {
    fetchWeatherByCity,
    temperature,
    weatherCondition,
    country,
    city,
    icon,
    isDay,
    isLoading,
  };
};
