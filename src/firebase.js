import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcAbHM6QoP3qCmErVdr-4pk7YuA2uKkLs",
  authDomain: "uptik-tok.firebaseapp.com",
  projectId: "uptik-tok",
  storageBucket: "uptik-tok.appspot.com",
  messagingSenderId: "352435057583",
  appId: "1:352435057583:web:282edba5271201756ff55a",
  measurementId: "G-T4XBMLM7S1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
