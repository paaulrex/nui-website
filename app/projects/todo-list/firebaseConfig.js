// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

require("dotenv").config();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "new-list-project-19eff.firebaseapp.com",
  databaseURL: "https://new-list-project-19eff-default-rtdb.firebaseio.com",
  projectId: "new-list-project-19eff",
  storageBucket: "new-list-project-19eff.appspot.com",
  messagingSenderId:  "628433972053",
  appId: "1:628433972053:web:ddd91695395a9691761ddc",
  measurementId: "G-6FXSBHYHR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase() 

export default db