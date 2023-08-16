// Import the functions you need from the SDKs you need
//import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4ssXiERrPLLm5RSgQmxO6PDMcLb7jEBY",
  authDomain: "car-rent-67822.firebaseapp.com",
  projectId: "car-rent-67822",
  storageBucket: "car-rent-67822.appspot.com",
  messagingSenderId: "793673654370",
  appId: "1:793673654370:web:df56248fc0af7583e8f13b",
  measurementId: "G-JP8MH3MDW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
//const provider = new GoogleAuthProvider();
export { app, auth };
