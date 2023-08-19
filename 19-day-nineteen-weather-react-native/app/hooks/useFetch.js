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

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeatherCurrentLocation = (lat, lon) => {
    fetch(`${URL}${lat},${lon}&key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json && json.current) {
          setIsLoading(false);
          setTemperature(json.current.temp_c);
          setWeatherCondion(json.current.condition.text);
          setCountry(json.location.country);
          setCity(json.location.name);
          setIcon(json.current.condition.icon);
          setIsDay(json.current.is_day);
        } else {
          setError("Error fetching weather data: Invalid response format");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError("Error fetching weather data");
        setIsLoading(false);
      });
    return isLoading;
  };

  const fetchWeatherByCity = (city) => {
    setIsLoading(true);
    fetch(`${URL}${city}&key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setTemperature(json.current.temp_c);
        setWeatherCondion(json.current.condition.text);
        setCountry(json.location.country);
        setCity(json.location.name);
        setIcon(json.current.condition.icon);
        setIsDay(json.current.is_day);
        // console.log(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching weather data:", error);
      });
  };

  return {
    fetchWeatherCurrentLocation,
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
