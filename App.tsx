import React from "react";
import AppContainer from "./navigation/AppContainer";
import { SafeAreaView, Text } from "react-native";

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#ddd" }}>
    <AppContainer />
  </SafeAreaView>
);

export default App;
