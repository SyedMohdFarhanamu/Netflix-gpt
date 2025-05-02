// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5ZtRi8dcWB08DBZI0zQp3M-2y-GAXN7I",
  authDomain: "netflixgpt-a2e2d.firebaseapp.com",
  projectId: "netflixgpt-a2e2d",
  storageBucket: "netflixgpt-a2e2d.firebasestorage.app",
  messagingSenderId: "761389047364",
  appId: "1:761389047364:web:73a472379f5c51c4cf2611",
  measurementId: "G-NZ4XCPCXLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();