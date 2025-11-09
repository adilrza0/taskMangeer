// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-1ae1d.firebaseapp.com",
  projectId: "taskmanager-1ae1d",
  storageBucket: "taskmanager-1ae1d.appspot.com",
  messagingSenderId: "708413215985",
  appId: "1:708413215985:web:5b2610664fc461420c0550",
  measurementId: "G-42E171F50Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);