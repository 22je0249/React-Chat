
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCP2JVKD7jRDAH7k5q9LclbeGpbH4wmk2k",
    authDomain: "reactchat-9ba7c.firebaseapp.com",
    projectId: "reactchat-9ba7c",
    storageBucket: "reactchat-9ba7c.appspot.com",
    messagingSenderId: "538291501108",
    appId: "1:538291501108:web:317dcfb16d8597e46df261"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db= getFirestore()
export const storage= getStorage()