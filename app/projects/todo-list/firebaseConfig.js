// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3DUTPNQm1NzAfdMfr4UQR_XRbTNekRNw",
  authDomain: "list-project-698d4.firebaseapp.com",
  databaseURL: "https://list-project-698d4-default-rtdb.firebaseio.com",
  projectId: "list-project-698d4",
  storageBucket: "list-project-698d4.appspot.com",
  messagingSenderId: "700208094971",
  appId: "1:700208094971:web:6b48a8f70ad51ab4bada5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;