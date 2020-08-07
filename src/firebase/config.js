import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/firebase-auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2qYHbY0f1VRu-TvlbYjzo41sldwsegVU",
  authDomain: "firegram-f16c6.firebaseapp.com",
  databaseURL: "https://firegram-f16c6.firebaseio.com",
  projectId: "firegram-f16c6",
  storageBucket: "firegram-f16c6.appspot.com",
  messagingSenderId: "830106336137",
  appId: "1:830106336137:web:a25a43c60f5e49c2adbf58",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
