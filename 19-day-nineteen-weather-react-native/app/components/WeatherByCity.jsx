import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

  const handleFetchWeatherByCity = () => {
    fetchWeatherByCity(cityInput);
    dispatch(setIsDay(isDay));
    console.log(isDay);
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
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    bodyContainer: {
      flex: 2,
      alignItems: "flex-start",
      justifyContent: "flex-end",
      width: 350,
      paddingLeft: 10,
      paddingLeft: 10,
    },
    temp: {
      fontSize: 48,
      color: "#f0edf6",
    },
    weatherCondition: {
      fontSize: 45,
      color: "#f0edf6",
      width: "100%",
      marginBottom: 20,
    },
    haveAGood: {
      fontSize: 18,
      color: "#f0edf6",
      marginBottom: 30,
    },
    country: {
      fontSize: 30,
      color: "#f0edf6",
      marginBottom: 20,
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
      {!temperature ? (
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
      ) : null}
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.temp}>
              {temperature}° {isDay.isDay}
            </Text>
            <Text style={styles.country}>
              {country} - {city}{" "}
              <MaterialCommunityIcons
                size={24}
                name="map-search"
                color={"#dc3545"}
              />
            </Text>
          </View>

          <ConditionsCase weatherCondition={weatherCondition} isDay={isDay} />

          <View style={styles.bodyContainer}>
            <Text style={styles.weatherCondition}>
              {weatherCondition}
              <Image
                style={{ width: 64, height: 64 }}
                source={{ uri: `https://${icon}` }}
              />
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
