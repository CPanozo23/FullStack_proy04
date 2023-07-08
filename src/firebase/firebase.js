// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/compat/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdrb-RcjGb8bRuNVENaZPngLdpO1LEdDo",
  authDomain: "proy04-restaurant.firebaseapp.com",
  projectId: "proy04-restaurant",
  storageBucket: "proy04-restaurant.appspot.com",
  messagingSenderId: "454404071378",
  appId: "1:454404071378:web:6a2c22f83b148fb3a1f20b"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
//export const auth = getAuth(app);
export const db = app.firestore();