import firebase from "firebase/app";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyAiKtEIaINPg2lXIufcF3J2cCzQjjeIKRU",
  authDomain: "reactflix-3222b.firebaseapp.com",
  databaseURL: "https://reactflix-3222b.firebaseio.com",
  projectId: "reactflix-3222b",
  storageBucket: "reactflix-3222b.appspot.com",
  messagingSenderId: "679106686059",
  appId: "1:679106686059:web:6429501b90c9bb88b6552e",
});

const db = firebase.database();

export { db };
