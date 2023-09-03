import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// auth screens
import {RegisterSc, LoginSc,WelcomeSc} from "../screens/AuthSc";

//  dashboard screens
import {NewReservationSc,ReservationsSc, UserSc,HomeSc,SettingSc} from "../screens/DashboardSc";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeSc} />
      <Stack.Screen name="Login" component={LoginSc} />
      <Stack.Screen name="Register" component={RegisterSc} />
    </Stack.Navigator>
  );
};

export const MainStack = () => {
  const tabBarIcon = ({ focused, color, size }) => {
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
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon,
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
