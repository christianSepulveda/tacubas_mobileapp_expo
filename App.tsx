import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/Routes/index";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <AppNavigator />
    </NavigationContainer>
  );
}
