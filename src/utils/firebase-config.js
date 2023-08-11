// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDajadbYHWj58MNrmk8_SVevPxrmqPhPjs",
  authDomain: "react-moviesflix.firebaseapp.com",
  projectId: "react-moviesflix",
  storageBucket: "react-moviesflix.appspot.com",
  messagingSenderId: "1041605846410",
  appId: "1:1041605846410:web:5bd10a53177ae34d399473",
  measurementId: "G-TM75FE2FH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);