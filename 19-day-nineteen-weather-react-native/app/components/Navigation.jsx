import { createDrawerNavigator } from "@react-navigation/drawer";
import WeatherGeolocation from "./WeatherGeolocation";
import WeatherByCity from "./WeatherByCity";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Location"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#cd3545",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen
        name="Location"
        component={WeatherGeolocation}
        options={{
          drawerIcon: ({ focused, color }) => (
            <Ionicons
              name="location"
              size={30}
              color={focused ? color : "#333"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={WeatherByCity}
        options={{
          drawerIcon: ({ focused, color }) => (
            <Ionicons
              name="search"
              size={30}
              color={focused ? color : "#333"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
