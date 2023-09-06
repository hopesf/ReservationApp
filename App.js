import React, { useEffect, useState, useCallback } from "react";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack, MainStack } from "./src/navigations/GlobalNavigation";
import { auth } from "./src/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getUser } from "./src/api";
import { COLORS } from "./src/constants";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [initialState, setInitialState] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      onAuthStateChanged(auth, async (authUser) => {
        if (authUser) {
          console.log(authUser.uid);
          const userData = await getUser(authUser.uid);
          setUser(userData);
        } else {
          setUser(null);
        }
        setInitialState(false);
      });
    };

    loadUser();
  }, []);

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

  if (initialState) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return <NavigationContainer onReady={onLayoutRootView}>{user ? <MainStack /> : <AuthStack />}</NavigationContainer>;
}
