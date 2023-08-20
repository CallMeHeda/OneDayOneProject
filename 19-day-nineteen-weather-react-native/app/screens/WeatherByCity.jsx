import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Ionicons from "react-native-vector-icons/Ionicons";

import ConditionsCase from "../components/ConditionsCase";
import { useDispatch } from "react-redux";
import { setIsDay } from "../redux";
import SearchBar from "../components/SearchBar";

export default function WeatherByCity() {
  const [cityInput, setCityInput] = useState("");
  const {
    fetchWeatherByCity,
    temperature,
    weatherCondition,
    country,
    city,
    icon,
    isLoading,
    isDay,
  } = useFetch();

  const dispatch = useDispatch();

  const handleFetchWeatherByCity = () => {
    if (cityInput.trim() !== "") {
      fetchWeatherByCity(cityInput);
      dispatch(setIsDay(isDay));
      setCityInput("");
    }
  };

  let bg;
  // if (!isDay) {
  bg = isDay ? "#8bd0ec" : "#23272f";
  // } else {
  //   bg = isDay.isDay ? "#8bd0ec" : "#23272f";
  // }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: "#f0edf6",
      backgroundColor: bg,
    },

    headerContainer: {
      minWidth: "100%",
      height: "100%",
    },
    headerTemp: {
      top: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    temp: {
      fontSize: 90,
      color: "#f0edf6",
      top: 450,
      alignSelf: "center",
    },
    weatherCondition: {
      fontSize: 35,
      color: "#f0edf6",
      top: 500,
      left: 20,
    },
    country: {
      fontSize: 27,
      color: "#f0edf6",
      textAlign: "center",
      width: "100%",
      position: "absolute",
      top: 120,
    },
    city: {
      fontSize: 27,
      color: "#f0edf6",
      textAlign: "center",
      width: "100%",
      position: "absolute",
      top: 155,
    },
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <View style={styles.headerContainer}>
              <SearchBar
                handleFetchWeatherByCity={handleFetchWeatherByCity}
                setCityInput={setCityInput}
                cityInput={cityInput}
              />
              <Text style={styles.country}>{country}</Text>
              <Text style={styles.city}>
                <Text>
                  {city} <Ionicons name="airplane" size={30} color="#cd3545" />
                </Text>
              </Text>

              <ConditionsCase
                weatherCondition={weatherCondition}
                isDay={isDay}
              />

              <Text style={styles.temp}>{temperature}°</Text>

              <Text style={styles.weatherCondition}>
                {weatherCondition}
                <Image
                  style={{ width: 64, height: 64 }}
                  source={{ uri: `https://${icon}` }}
                />
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
