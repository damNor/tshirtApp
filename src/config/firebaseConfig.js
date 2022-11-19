// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getStorage,ref,uploadBytesResumable,} from "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjMqa6pd4gld-pon0JRlWFSlW94LO0bmk",
  authDomain: "tshirtapp-f63b4.firebaseapp.com",
  projectId: "tshirtapp-f63b4",
  storageBucket: "tshirtapp-f63b4.appspot.com",
  messagingSenderId: "810672305229",
  appId: "1:810672305229:web:982556b996865253f79804"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig); 

const storage = getStorage(firebase);

const storageRef = ref(storage);

export{
    storage, storageRef, firebase as default
}