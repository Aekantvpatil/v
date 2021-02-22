import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCfNhztPXZ0EyXYBED4-YzSw5JcYUeIe0s",
    authDomain: "book-santa-15ea4.firebaseapp.com",
    projectId: "book-santa-15ea4",
    storageBucket: "book-santa-15ea4.appspot.com",
    messagingSenderId: "283130267351",
    appId: "1:283130267351:web:d9e424f0280406e1995292"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();


  