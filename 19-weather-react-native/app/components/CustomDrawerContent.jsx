import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import LottieView from "lottie-react-native";
import { View } from "react-native";

export default CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 20,
          backgroundColor: "transparent",
        }}
      >
        <LottieView
          autoPlay
          style={{
            width: 450,
            height: 450,
            alignSelf: "center",
          }}
          source={require("../../assets/navigation/animationNav.json")}
        />
      </View>
    </DrawerContentScrollView>
  );
};
