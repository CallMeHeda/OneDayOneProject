import { View } from "react-native";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export default function WeatherByCity() {
  const { fetchWeatherByCity } = useFetch();

  useEffect(() => fetchWeatherByCity("Rome"), []);

  return <View></View>;
}
