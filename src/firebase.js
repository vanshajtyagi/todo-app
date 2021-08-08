//For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAh6A4NEh-EGeDcelVg6vjAZmdsVYmm_u0",
    authDomain: "todo-app-2c19b.firebaseapp.com",
    projectId: "todo-app-2c19b",
    storageBucket: "todo-app-2c19b.appspot.com",
    messagingSenderId: "399723571492",
    appId: "1:399723571492:web:1756aaee3d25330536abb1",
    measurementId: "G-L2T9JHKXKK"
});
const db= firebaseApp.firestore();
export default db;