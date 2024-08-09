// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD03vOCCmOD6oqGgyvZjux_1aRMFpHBLuI",
  authDomain: "netflix-gpt-878bd.firebaseapp.com",
  projectId: "netflix-gpt-878bd",
  storageBucket: "netflix-gpt-878bd.appspot.com",
  messagingSenderId: "894304578682",
  appId: "1:894304578682:web:63aa2cf4ce43133c53dfc3",
  measurementId: "G-R17G4EXVXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();