// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHmxDV44X2pG1zSoZoz7CBkhcouJcjvTY",
  authDomain: "fir-blog-98926.firebaseapp.com",
  projectId: "fir-blog-98926",
  storageBucket: "fir-blog-98926.appspot.com",
  messagingSenderId: "210697550482",
  appId: "1:210697550482:web:4dd08bb1e9da9b4e7c844b",
  measurementId: "G-DJVBMW27K5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const = getAuth();
export const provider = getStorage();
export const db = getFirestore(app);
