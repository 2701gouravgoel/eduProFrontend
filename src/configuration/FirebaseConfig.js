import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBnDZdAYqxna2mOxpy7LFMd2XdsDLZrYNg",
  authDomain: "edupro-33c77.firebaseapp.com",
  projectId: "edupro-33c77",
  storageBucket: "edupro-33c77.appspot.com",
  messagingSenderId: "661653749420",
  appId: "1:661653749420:web:e2f7afd25ee1378f466909",
  measurementId: "G-ZKC19Y0Q77"
};
let secondaryAuth = {};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    const secondApp = firebase.initializeApp(firebaseConfig, 'secondApp');
    secondaryAuth = secondApp.auth();
}

const db = firebase.firestore();
export { db, firebase, secondaryAuth };

