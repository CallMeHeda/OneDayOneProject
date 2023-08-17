import React, { useRef } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const bg = require("../../assets/images/bg.jpg");
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate("Level");
    });
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
        <View>
          <TouchableOpacity onPress={fadeOut}>
            <Image
              source={require("../../assets/images/logoBg.png")}
              style={styles.card}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Animated.View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  bg: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginRight: 3,
  },
});
