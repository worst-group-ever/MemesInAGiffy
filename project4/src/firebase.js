
import firebase from 'firebase/app';
import 'firebase/database';

// initializing Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCWrMFcwX3syag8EiXiL_ESaEoO44dU2u4",
  authDomain: "project4-bootcamp.firebaseapp.com",
  databaseURL: "https://project4-bootcamp-default-rtdb.firebaseio.com",
  projectId: "project4-bootcamp",
  storageBucket: "project4-bootcamp.appspot.com",
  messagingSenderId: "662913192821",
  appId: "1:662913192821:web:ffe393dbe2122a566c393c"
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase;