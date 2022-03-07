import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFIBpn0iGoYUFw-wLvxzppwFfs6xne1vE",
    authDomain: "picture-upload-3ce41.firebaseapp.com",
    projectId: "picture-upload-3ce41",
    storageBucket: "picture-upload-3ce41.appspot.com",
    messagingSenderId: "306663605186",
    appId: "1:306663605186:web:642f4263abc23355970c5b",
    measurementId: "G-DPTLCN1G8Y"
  };

  firebase.initializeApp(firebaseConfig)

  const storage=firebase.storage();

  export {storage, firebase as default};