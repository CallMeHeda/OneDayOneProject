import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const bg = require("../../assets/images/bg.jpg");

function Home() {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  }

  useEffect(() => {
    changeScreenOrientation();
  }, []);

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
