// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpj6_gqWkdGRYkjPILeWPMm4nv_BXEBD0",
  authDomain: "react-residence-realm.firebaseapp.com",
  projectId: "react-residence-realm",
  storageBucket: "react-residence-realm.appspot.com",
  messagingSenderId: "153480061763",
  appId: "1:153480061763:web:624465c5b32d8f9f5505f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;