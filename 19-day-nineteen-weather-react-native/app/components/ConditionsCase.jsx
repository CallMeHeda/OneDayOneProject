import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";

export default function ConditionsCase({ weatherCondition, isDay }) {
  switch (weatherCondition) {
    case "Sunny":
      return (
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
          }}
          source={require("../../assets/DAY/sunny.json")}
        />
      );
    case "Clear":
      return (
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
          }}
          source={require("../../assets/NIGHT/clear.json")}
        />
      );
    case "Partly cloudy":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/partlyCloudy.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/partlyCloudy.json")}
          />
        );
      }
    case "Cloudy":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/cloudy.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/cloudy.json")}
          />
        );
      }
    case "Light rain":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/lightRain.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/lightRain.json")}
          />
        );
      }

    case "Patchy light rain with thunder":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/lightRainThunder.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/lightRainThunder.json")}
          />
        );
      }
    case "Moderate or heavy rain with thunder":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/lightRainThunder.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/lightRainThunder.json")}
          />
        );
      }

    case "Light rain shower":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/lightRainShower.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/lightRainShower.json")}
          />
        );
      }
    case "Moderate rain":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/lightRainShower.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/lightRainShower.json")}
          />
        );
      }

    case "Light snow":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/snow.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/snow.json")}
          />
        );
      }

    case "Patchy moderate snow":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/snow.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/snow.json")}
          />
        );
      }

    case "Moderate snow":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/snow.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/snow.json")}
          />
        );
      }

    case "Mist":
      if (isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/DAY/mist.json")}
          />
        );
      }
      if (!isDay) {
        return (
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../../assets/NIGHT/mist.json")}
          />
        );
      }
  }
}
