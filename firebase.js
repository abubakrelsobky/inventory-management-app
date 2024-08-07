// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHTiaKB2aOpTKn2jKHZVTS673h3wRdXgs",
  authDomain: "inventory-management-app-32e1b.firebaseapp.com",
  projectId: "inventory-management-app-32e1b",
  storageBucket: "inventory-management-app-32e1b.appspot.com",
  messagingSenderId: "391598855626",
  appId: "1:391598855626:web:191cf0b5b39836b02f2b33",
  measurementId: "G-GL2JRMT5LJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
