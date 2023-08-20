import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ handleFetchWeatherByCity, setCityInput, cityInput }) => {
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value === 1
          ? withTiming(300, { duration: 500, easing: Easing.elastic(1) })
          : withTiming(0, { duration: 500 }),
      padding: animation.value === 1 ? withTiming(15) : withTiming(0),
      right: animation.value === 1 ? withTiming(0) : withTiming(50),
    };
  });

  const toggleValue = () => {
    animation.value === 1 ? (animation.value = 0) : (animation.value = 1);
  };

  const handleToggleAndFetch = () => {
    toggleValue();
    handleFetchWeatherByCity();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputContainer, animatedStyle]}>
        <TextInput
          style={styles.input}
          onChangeText={setCityInput}
          value={cityInput}
          placeholder="Search.."
          placeholderTextColor={"#fff"}
        />
        <TouchableOpacity style={styles.icon} onPress={handleToggleAndFetch}>
          <Ionicons name="search" size={25} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80,
    right: 25,
    zIndex: 9,
  },
  inputContainer: {
    width: 300,
    height: 50,
    backgroundColor: "#CDCDCD",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  input: {
    width: "85%",
    color: "#fff",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
});

export default SearchBar;
