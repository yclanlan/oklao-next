import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXMZDEiBnRJFfSG4ml2GqBFiER1vFTLmU",
    authDomain: "clone-4c5d6.firebaseapp.com",
    projectId: "clone-4c5d6",
    storageBucket: "clone-4c5d6.appspot.com",
    messagingSenderId: "502973457847",
    appId: "1:502973457847:web:60b40d5a57b4e7c4b8f432",
    measurementId: "G-KZ7T7BPX39"
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };