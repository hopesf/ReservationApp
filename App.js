import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack, MainStack } from "./src/navigations/GlobalNavigation";
import { useAuth } from "./src/hooks/useAuth";


SplashScreen.preventAutoHideAsync();


export default function App() {
  const User = useAuth();

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

  return <NavigationContainer onReady={onLayoutRootView}>{User ? <MainStack /> : <AuthStack />}</NavigationContainer>;
}
