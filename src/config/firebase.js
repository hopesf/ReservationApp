// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXCycVdpbAMyRqck2zu5K2qjE4HGGHS_U",
  authDomain: "reservationapp-15ba1.firebaseapp.com",
  projectId: "reservationapp-15ba1",
  storageBucket: "reservationapp-15ba1.appspot.com",
  messagingSenderId: "164001962569",
  appId: "1:164001962569:web:bc8df747fc1580664b7d98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;