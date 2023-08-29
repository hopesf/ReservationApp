import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// navigations
import MainStack from "./navigation/MainStack";
import AuthStack from "./navigation/AuthStack";

const getIsSignedIn = () => {
  return true;
};

export default function App() {
  const isSignedIn = getIsSignedIn();

  return <NavigationContainer>{isSignedIn ? <MainStack /> : <AuthStack />}</NavigationContainer>;
}
