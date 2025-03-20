// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAl5PgF-c14JKl_olmffJS-_7iekEppRpQ",
    authDomain: "netflixgpt-e5ee8.firebaseapp.com",
    projectId: "netflixgpt-e5ee8",
    storageBucket: "netflixgpt-e5ee8.firebasestorage.app",
    messagingSenderId: "220306278241",
    appId: "1:220306278241:web:1ea8be3c908bfb08cd6720",
    measurementId: "G-JCFQ3Z9F3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();