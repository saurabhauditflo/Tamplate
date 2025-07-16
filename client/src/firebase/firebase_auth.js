// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGs9HN_zuQMuJmmD3uPOKPNYKQtZWf4bA",
  authDomain: "login-template-aa26b.firebaseapp.com",
  projectId: "login-template-aa26b",
  storageBucket: "login-template-aa26b.firebasestorage.app",
  messagingSenderId: "73706177513",
  appId: "1:73706177513:web:5769811bcb02858b25c178",
  measurementId: "G-PWMH1D2XKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);