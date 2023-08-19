import { API_KEY } from "@env";
import { URL } from "@env";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsDay } from "../redux";
import axios from "axios";

export const useFetch = () => {
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondion] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const isDay = useSelector((state) => state.day.isDay);
  const dispatch = useDispatch();

  const fetchWeatherCurrentLocation = (lat, lon) => {
    setIsLoading(true);
    try {
      axios.get(`${URL}${lat},${lon}&key=${API_KEY}`).then((response) => {
        setTemperature(response.data.current.temp_c);
        setWeatherCondion(response.data.current.condition.text);
        setCountry(response.data.location.country);
        setCity(response.data.location.name);
        setIcon(response.data.current.condition.icon);
        dispatch(setIsDay(response.data.current.is_day));
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
    return isDay;
  };

  const fetchWeatherByCity = (city) => {
    setIsLoading(true);
    try {
      axios.get(`${URL}${city}&key=${API_KEY}`).then((response) => {
        setTemperature(response.data.current.temp_c);
        setWeatherCondion(response.data.current.condition.text);
        setCountry(response.data.location.country);
        setCity(response.data.location.name);
        setIcon(response.data.current.condition.icon);
        dispatch(setIsDay(response.data.current.is_day));
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
    return isDay;
  };

  return {
    fetchWeatherCurrentLocation,
    fetchWeatherByCity,
    temperature,
    weatherCondition,
    country,
    city,
    icon,
    isLoading,
    isDay,
  };
};
