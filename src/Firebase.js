// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs,collection,addDoc,getDoc} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVdEC9UHI755c4T99w9kgADCzVzbiXy4c",
    authDomain: "react-swiggy-clone-eb39a.firebaseapp.com",
    projectId: "react-swiggy-clone-eb39a",
    storageBucket: "react-swiggy-clone-eb39a.appspot.com",
    messagingSenderId: "63891247756",
    appId: "1:63891247756:web:5df63f9d290544afdba1a9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db =  getFirestore(app)
const auth = getAuth(app)
export {addDoc, collection,db,auth}