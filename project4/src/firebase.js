
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
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase;