// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzL5q9vzIsazEii7OkoY7L4HbwrNPL8nM",
  authDomain: "discord-clone-6b32d.firebaseapp.com",
  projectId: "discord-clone-6b32d",
  storageBucket: "discord-clone-6b32d.appspot.com",
  messagingSenderId: "595737887425",
  appId: "1:595737887425:web:0914e0db86456dc3a9ca40",
  measurementId: "G-25PCX2L8SN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;