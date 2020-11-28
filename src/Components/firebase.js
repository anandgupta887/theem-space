import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDr1W3XFriMJ8ZPnoMjLDUgiJ6c-6Cm8jQ",
  authDomain: "theemspace-d84e1.firebaseapp.com",
  databaseURL: "https://theemspace-d84e1.firebaseio.com",
  projectId: "theemspace-d84e1",
  storageBucket: "theemspace-d84e1.appspot.com",
  messagingSenderId: "353671980239",
  appId: "1:353671980239:web:a313182ac29fd6015843ba",
  measurementId: "G-SRF49E4B4F",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
