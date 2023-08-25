import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  ApplicationProvider,
  Layout,
  IconRegistry,
  Icon,
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Home from "./app/screens/Home";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <Layout style={styles.container}>
          <StatusBar style="light" />
          <Header />
          <Home />
          <Footer />
        </Layout>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
