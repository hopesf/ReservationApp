import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack, MainStack } from "./src/navigations/GlobalNavigation";

const issignedIn = true;

export default function App() {
  return <NavigationContainer>{issignedIn ? <MainStack /> : <AuthStack />}</NavigationContainer>;
}
