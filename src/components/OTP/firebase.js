import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIzYLmIm5_dGpQFGiIU7ye5n7qWo9PkwM",
  authDomain: "reactotp-ec5ab.firebaseapp.com",
  projectId: "reactotp-ec5ab",
  storageBucket: "reactotp-ec5ab.appspot.com",
  messagingSenderId: "701232987389",
  appId: "1:701232987389:web:e4cf78d5a7801766e8d294"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
