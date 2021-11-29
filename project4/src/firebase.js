
import firebase from 'firebase/app';
import 'firebase/database';

// initializing Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTcslsmA02-64DP0_mz2laq9H13ZBqZlA",

  authDomain: "bookshelf-app-8a7c4.firebaseapp.com",

  databaseURL: "https://bookshelf-app-8a7c4-default-rtdb.firebaseio.com",

  projectId: "bookshelf-app-8a7c4",

  storageBucket: "bookshelf-app-8a7c4.appspot.com",

  messagingSenderId: "308098864992",

  appId: "1:308098864992:web:cf4437d960acca2337f005"


  // Camila's Firebase: OFFICIAL VERSION 
  // apiKey: "AIzaSyCWrMFcwX3syag8EiXiL_ESaEoO44dU2u4",
  // authDomain: "project4-bootcamp.firebaseapp.com",
  // databaseURL: "https://project4-bootcamp-default-rtdb.firebaseio.com",
  // projectId: "project4-bootcamp",
  // storageBucket: "project4-bootcamp.appspot.com",
  // messagingSenderId: "662913192821",
  // appId: "1:662913192821:web:ffe393dbe2122a566c393c"


};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase;