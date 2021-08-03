// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"



  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCYMfueaRWSkEOcQKsuC_7W45ch8xP92Cg",
    authDomain: "todo-list-a98bd.firebaseapp.com",
    projectId: "todo-list-a98bd",
    storageBucket: "todo-list-a98bd.appspot.com",
    messagingSenderId: "1084571956084",
    appId: "1:1084571956084:web:86fbb7d88678861218f221",
    measurementId: "G-LHEY7BSVQH"
  })

  const db=firebaseApp.firestore();

  export default db;