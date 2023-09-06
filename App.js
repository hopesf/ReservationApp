import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GlobalProvider } from "./src/context/GlobalContext";
import Main from "./src/Main";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    black: require("./src/assets/fonts/Inter-Black.ttf"),
    bold: require("./src/assets/fonts/Inter-Bold.ttf"),
    medium: require("./src/assets/fonts/Inter-Medium.ttf"),
    regular: require("./src/assets/fonts/Inter-Regular.ttf"),
    semiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <Main />
      </NavigationContainer>
    </GlobalProvider>
  );
}
