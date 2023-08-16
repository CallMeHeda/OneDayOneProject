import { StyleSheet, TouchableOpacity, View } from "react-native";
import CountryFlag from "react-native-country-flag";

function Buttons({ reset }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        top: 555,
      }}
    >
      <TouchableOpacity
        onPress={() => reset("en", "single")}
        style={[styles.boxShadow, { borderRadius: 50, width: 60 }]}
      >
        <CountryFlag
          style={[{ borderRadius: 50, width: 60 }]}
          isoCode="gb"
          size={60}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => reset("fr", "twopart")}
        style={[styles.boxShadow, { borderRadius: 50, width: 60 }]}
      >
        <CountryFlag
          style={{ borderRadius: 50, width: 60 }}
          isoCode="fr"
          size={60}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#bfb7b7",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Buttons;
