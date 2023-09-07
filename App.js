import React from "react";
import { GlobalProvider } from "./src/context/GlobalContext";
import Main from "./src/Main";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </GlobalProvider>
  );
}
