import React from "react";
import { View } from "react-native";
import COLORS from "../constants/colors";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// auth screens
import { RegisterSc, LoginSc, WelcomeSc } from "../screens/AuthSc";
import { SimpleLineIcons, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

//  dashboard screens
import { NewReservationSc, ReservationsSc, UserSc, HomeSc } from "../screens/DashboardSc";

// settings screens
import { MainSettingsSc, EditProfileSc } from "../screens/DashboardSc";

const Stack = createNativeStackNavigator();
const settingStack = createNativeStackNavigator();
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
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeSc}
        options={{
          tabBarIcon: ({ focused }) => {
            return <SimpleLineIcons name="home" size={24} color={focused ? COLORS.primary : COLORS.black} />;
          },
        }}
      />

      <Tab.Screen
        name="Reservations"
        component={ReservationsSc}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MaterialCommunityIcons name="message-text-outline" size={24} color={focused ? COLORS.primary : COLORS.black} />;
          },
        }}
      />
      <Tab.Screen
        name="CreateReservation"
        component={NewReservationSc}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.primary,
                  height: Platform.OS == "ios" ? 50 : 60,
                  width: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                  borderWidth: 2,
                  borderColor: COLORS.white,
                }}
              >
                <Fontisto name="plus-a" size={24} color={COLORS.white} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="User"
        component={UserSc}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MaterialIcons name="person-outline" size={24} color={focused ? COLORS.primary : COLORS.black} />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: ({ focused }) => {
            return <MaterialIcons name="settings" size={24} color={focused ? COLORS.primary : COLORS.black} />;
          },
        }}
      >
        {() => (
          <settingStack.Navigator screenOptions={{ headerShown: false }}>
            <settingStack.Screen name="MainSettings" component={MainSettingsSc} />
            <settingStack.Screen name="EditProfile" component={EditProfileSc} />
          </settingStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
