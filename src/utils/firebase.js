// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRN926xjbzly6Um10mGE1e20NnLGZp6qU",
  authDomain: "cinestream-86cd7.firebaseapp.com",
  projectId: "cinestream-86cd7",
  storageBucket: "cinestream-86cd7.appspot.com",
  messagingSenderId: "366680617707",
  appId: "1:366680617707:web:8a51bd9b322d3d9a3e04ae",
  measurementId: "G-KN8QQ9BEGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();