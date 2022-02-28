import firebase from "./firebase"

const firebaseApp = firebase.intializeApp({
    apiKey: "AIzaSyA90nRRs5nFv8LNwsSTXWDyS_iIisUyl4Y",
    authDomain: "clone-e22f3.firebaseapp.com",
    projectId: "clone-e22f3",
    storageBucket: "clone-e22f3.appspot.com",
    messagingSenderId: "879344903907",
    appId: "1:879344903907:web:4254500d680faebe6e47d6",
    measurementId: "G-9XQH4PG3P6"
});

const db = firebase.firestore();
const auth = firebase.auth();
 
export {db, auth} ;