// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8v22siBpOLbMxCwkhuI_e4BlJzRhE6QM",
  authDomain: "medy-fly.firebaseapp.com",
  projectId: "medy-fly",
  storageBucket: "medy-fly.appspot.com",
  messagingSenderId: "418498884462",
  appId: "1:418498884462:web:000d0f0f41e34fb89b877f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;