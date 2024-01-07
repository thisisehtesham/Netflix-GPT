// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo5o9QJzfnFYRKF6uQE46Dyku5vF4EdhA",
  authDomain: "netflixgpt-35fad.firebaseapp.com",
  projectId: "netflixgpt-35fad",
  storageBucket: "netflixgpt-35fad.appspot.com",
  messagingSenderId: "425435731581",
  appId: "1:425435731581:web:9d261fa8aed9ec86434314",
  measurementId: "G-QSV3GKH0T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;