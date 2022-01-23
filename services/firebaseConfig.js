import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB1IKIZd9sXRbZROlkABLMjgc9ocxVmoM8",
  authDomain: "auth-d3caf.firebaseapp.com",
  projectId: "auth-d3caf",
  storageBucket: "auth-d3caf.appspot.com",
  messagingSenderId: "104067604525",
  appId: "1:104067604525:web:32dc80715f5c57997098a4"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


export {firebase, app, auth}