// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyDgUUCzhRM4npLZ6sufWk13n1O_2sUQjKk",
  authDomain: "mern-blog-street.firebaseapp.com",
  projectId: "mern-blog-street",
  storageBucket: "mern-blog-street.appspot.com",
  messagingSenderId: "185915082339",
  appId: "1:185915082339:web:62e8c1d686cbd6773f9a56",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
