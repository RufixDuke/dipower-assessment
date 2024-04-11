import * as React from "react";
import useFonts from "./hooks/useFont";
import { Provider } from "react-redux";
import store from "./src/store";
import AppNavigator from "./navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const appIsReady = useFonts();

  if (!appIsReady) {
    return null;
  }
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
        <StatusBar style="light" />
      </Provider>
      {/* <Text>Hello</Text> */}
    </>
  );
}
