import { useDispatch } from "react-redux";
import { setIsDay } from "../redux";

import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ConditionsCase from "./ConditionsCase";

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
    dispatch(setIsDay(isDay));
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
    } catch (error) {
      console.error("Error getting current location:", error);
      setError("Error getting current location");
    }
  };

  let bg;
  if (!isDay) {
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
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.temp}>{temperature}°</Text>
            <Text style={styles.country}>
              {country} - {city}
              <MaterialCommunityIcons
                size={24}
                name="map-marker"
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
