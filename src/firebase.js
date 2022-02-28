import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
  authDomain: "todo-app-e3cf0.firebaseapp.com",
  projectId: "todo-app-e3cf0",
  storageBucket: "todo-app-e3cf0.appspot.com",
  messagingSenderId: "940016886081",
  appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  measurementId: "G-JHPC7TP12K"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };




// import firebase from "firebase";

// const firebaseApp = firebase.intializeApp({
//     apiKey: "AIzaSyA90nRRs5nFv8LNwsSTXWDyS_iIisUyl4Y",
//     authDomain: "clone-e22f3.firebaseapp.com",
//     projectId: "clone-e22f3",
//     storageBucket: "clone-e22f3.appspot.com",
//     messagingSenderId: "879344903907",
//     appId: "1:879344903907:web:4254500d680faebe6e47d6",
//     measurementId: "G-9XQH4PG3P6"
// });

// const db = firebase.firestore();
// const auth = firebase.auth();
 
// export {db, auth}  ;
