// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXZX7Y7uDH86AQFXckAMTI-C4KUQ2d4gI",
  authDomain: "email-password-auth-prac-b62c0.firebaseapp.com",
  projectId: "email-password-auth-prac-b62c0",
  storageBucket: "email-password-auth-prac-b62c0.firebasestorage.app",
  messagingSenderId: "283181493232",
  appId: "1:283181493232:web:022b03963e6b4c2fb90b35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);