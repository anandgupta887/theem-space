import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUFKmfxuxmEDYJ4k2wm6k1H62chzTHPOQ",
  authDomain: "theme-space.firebaseapp.com",
  databaseURL: "https://theme-space.firebaseio.com",
  projectId: "theme-space",
  storageBucket: "theme-space.appspot.com",
  messagingSenderId: "865911256949",
  appId: "1:865911256949:web:3bf57951488b8e84d9853c",
  measurementId: "G-R765TE3VJK",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
