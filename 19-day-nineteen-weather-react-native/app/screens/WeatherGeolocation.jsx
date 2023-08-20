import { useDispatch } from "react-redux";
import { setIsDay } from "../redux";

import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Location from "expo-location";
import Ionicons from "react-native-vector-icons/Ionicons";
import ConditionsCase from "../components/ConditionsCase";

export default function WeatherGeolocation() {
  const {
    fetchWeatherCurrentLocation,
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
    getLocationAsync();
    console.log(isDay);
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
      dispatch(setIsDay(isDay));
    } catch (error) {
      console.error("Error getting current location:", error);
      setError("Error getting current location");
    }
  };

  let bg;
  // if (!isDay) {
  //   bg = isDay.isDay ? "#8bd0ec" : "#23272f";
  // } else {
  bg = isDay ? "#8bd0ec" : "#23272f";
  // }

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
    },
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
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
                {city} <Ionicons name="location" size={30} color="#cd3545" />
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
