import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import HomeSc from "../screens/HomeSc";
import SettingSc from "../screens/SettingSc";
import LoginSc from "../screens/LoginSc";
import RegisterSc from "../screens/RegisterSc";
import UserSc from "../screens/UserSc";
import ReservationsSc from "../screens/ReservationsSc";
import NewReservationSc from "../screens/NewReservationSc";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginSc} />
      <Stack.Screen name="Register" component={RegisterSc} />
    </Stack.Navigator>
  );
};

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          console.log(route.name);

          switch (route.name) {
            case "ReservNew":
              iconName = focused ? "aperture" : "aperture-outline";
            case "Reservations":
              iconName = focused ? "albums" : "albums-outline";
              break;
            case "User":
              iconName = focused ? "person" : "person-outline";
              break;
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Setting":
              iconName = focused ? "cog" : "cog-outline";
              break;
            default:
              iconName = focused ? "ios-list" : "ios-list-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato", // Aktif durum renk ayarı
        tabBarInactiveTintColor: "gray", // Pasif durum renk ayarı
      })}
    >
      <Tab.Screen name="Home" component={HomeSc} />
      <Tab.Screen name="Reservations" component={ReservationsSc} />
      <Tab.Screen name="User" component={UserSc} />
      <Tab.Screen name="Setting" component={SettingSc} />
    </Tab.Navigator>
  );
};
