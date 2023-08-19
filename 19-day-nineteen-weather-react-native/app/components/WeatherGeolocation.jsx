import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { View } from "react-native";
import * as Location from "expo-location";

export default function WeatherGeolocation() {
  const { fetchWeatherCurrentLocation } = useFetch();

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchWeatherCurrentLocation(
        location.coords.latitude,
        location.coords.longitude
      );
    } catch (error) {
      console.error("Error getting current location:", error);
      setError("Error getting current location");
    }
  };

  return <View></View>;
}
