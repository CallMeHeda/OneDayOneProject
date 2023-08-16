import { createStackNavigator } from "@react-navigation/stack";
import MemorizeSupports from "../screens/MemorizeSupports";
import MemorizeDamages from "../screens/MemorizeDamages";
import MemorizeTanks from "../screens/MemorizeTanks";
import MemorizeAll from "../screens/MemorizeAll";
import Home from "../screens/Home";
import Level from "../screens/Level";

function Navigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Level"
        component={Level}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MemorizeSupports"
        component={MemorizeSupports}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MemorizeDamages"
        component={MemorizeDamages}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MemorizeTanks"
        component={MemorizeTanks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MemorizeAll"
        component={MemorizeAll}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default Navigation;
