import { createDrawerNavigator } from "@react-navigation/drawer";
import WeatherGeolocation from "./WeatherGeolocation";
import WeatherByCity from "./WeatherByCity";

const Drawer = createDrawerNavigator();
export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Localisation" component={WeatherGeolocation} />
      <Drawer.Screen name="Search" component={WeatherByCity} />
    </Drawer.Navigator>
  );
}
