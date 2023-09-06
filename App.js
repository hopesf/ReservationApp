import { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack, MainStack } from "./src/navigations/GlobalNavigation";
import { auth } from "./src/config/firebase";
import { onAuthStateChanged } from "firebase/auth";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("USER IS STILL LOGGED IN: ", user);
      if (user) {
        setUser(user);
      }
    });
  }, [user]);

  const [fontsLoaded] = useFonts({
    black: require("./src/assets/fonts/Inter-Black.ttf"),
    bold: require("./src/assets/fonts/Inter-Bold.ttf"),
    medium: require("./src/assets/fonts/Inter-Medium.ttf"),
    regular: require("./src/assets/fonts/Inter-Regular.ttf"),
    semiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer onReady={onLayoutRootView}>{user ? <MainStack /> : <AuthStack />}</NavigationContainer>;
}
