import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// Initialize Firebase
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCXCycVdpbAMyRqck2zu5K2qjE4HGGHS_U",
  authDomain: "reservationapp-15ba1.firebaseapp.com",
  projectId: "reservationapp-15ba1",
  storageBucket: "reservationapp-15ba1.appspot.com",
  messagingSenderId: "164001962569",
  appId: "1:164001962569:web:bc8df747fc1580664b7d98",
});

export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});
