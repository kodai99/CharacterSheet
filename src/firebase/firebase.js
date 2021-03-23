import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAL9DdK_L87robFJJH5SVGreSX1YbDbuO0",
  authDomain: "charactersheet-dee0a.firebaseapp.com",
  databaseURL: "https://charactersheet-dee0a.firebaseio.com",
  projectId: "charactersheet-dee0a",
  storageBucket: "charactersheet-dee0a.appspot.com",
  messagingSenderId: "583480714345",
  appId: "1:583480714345:web:7f5b61db4c639c5a76aef8",
  measurementId: "G-474CPCEXW4"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
export const FirebaseTimestamp = firebase.firestore.Timestamp;