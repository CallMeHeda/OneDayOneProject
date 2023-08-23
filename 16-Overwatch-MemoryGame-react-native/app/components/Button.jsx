import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Button({ Role, route }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(route);
  };

  return (
    <View>
      <Pressable onPress={handlePress} style={styles.button}>
        <Role width={100} height={100} />
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#cd3545",
  },
});
