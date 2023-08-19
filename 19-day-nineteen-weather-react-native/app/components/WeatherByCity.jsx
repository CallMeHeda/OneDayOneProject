import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TextInput,
  Button,
} from "react-native";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Ionicons from "react-native-vector-icons/Ionicons";

import ConditionsCase from "./ConditionsCase";
import { useDispatch, useSelector } from "react-redux";
import { setIsDay } from "../redux";

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

  useEffect(() => {
    dispatch(setIsDay(isDay));
    console.log(isDay);
  }, [dispatch]);

  const handleFetchWeatherByCity = () => {
    fetchWeatherByCity(cityInput);
    dispatch(setIsDay(isDay));
  };

  let bg;
  if (isDay) {
    bg = isDay ? "#8bd0ec" : "#23272f";
  } else {
    bg = isDay.isDay ? "#8bd0ec" : "#23272f";
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: "#f0edf6",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: bg,
    },
    headerContainer: {
      position: "absolute",
      top: 100,
      minWidth: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    headerTemp: {
      top: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    temp: {
      fontSize: 80,
      color: "#f0edf6",
    },
    weatherCondition: {
      fontSize: 35,
      color: "#f0edf6",
      position: "absolute",
      bottom: 40,
      left: 20,
    },
    country: {
      fontSize: 27,
      color: "#f0edf6",
      textAlign: "center",
      width: "100%",
      // borderWidth: 2,
    },
    input: {
      height: 50,
      width: "100%",
      alignSelf: "center",
      backgroundColor: "#fff",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : !temperature ? (
        <View
          style={{
            width: "90%",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={setCityInput}
            value={cityInput}
          />
          <Button
            style={styles.inputBtn}
            title="Press"
            onPress={handleFetchWeatherByCity}
          ></Button>
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.country}>{country}</Text>
            <Text style={styles.country}>
              <Text>
                {city} <Ionicons name="search" size={30} color="#cd3545" />
              </Text>
            </Text>
          </View>

          <ConditionsCase weatherCondition={weatherCondition} isDay={isDay} />

          <View style={styles.headerTemp}>
            <Text style={styles.temp}>{temperature}°</Text>
          </View>

          <Text style={styles.weatherCondition}>
            {weatherCondition}
            <Image
              style={{ width: 64, height: 64 }}
              source={{ uri: `https://${icon}` }}
            />
          </Text>
        </View>
      )}
    </View>
  );
}
