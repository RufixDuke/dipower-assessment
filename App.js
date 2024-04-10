import { Provider } from "react-redux";
import store from "./src/store";
import AppNavigator from "./navigation/AppNavigator";
import useFonts from "./hooks/useFont";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const appIsReady = useFonts();

  if (!appIsReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <AppNavigator />
    </Provider>
  );
}
