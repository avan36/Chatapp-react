// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: CHAT_KEY,
  authDomain: "chat-af337.firebaseapp.com",
  projectId: "chat-af337",
  storageBucket: "chat-af337.appspot.com",
  messagingSenderId: "357664172434",
  appId: "1:357664172434:web:dcbfdc07192e292843f94b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider  = new GoogleAuthProvider();
export const db = getFirestore(app);