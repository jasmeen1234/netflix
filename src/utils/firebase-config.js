// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi9HPl6dagr5fbpExm7DZgErRY24B6csc",
  authDomain: "netflix-clone-65bb2.firebaseapp.com",
  projectId: "netflix-clone-65bb2",
  storageBucket: "netflix-clone-65bb2.appspot.com",
  messagingSenderId: "290616056960",
  appId: "1:290616056960:web:e59db89bb86f735608da65",
  measurementId: "G-L7P3VL57BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

