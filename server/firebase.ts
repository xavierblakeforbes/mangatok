// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNgxD-ivJrZ9rdHRNhAbswf6Fq48TOGTA",
  authDomain: "mangatok-d32c5.firebaseapp.com",
  projectId: "mangatok-d32c5",
  storageBucket: "mangatok-d32c5.firebasestorage.app",
  messagingSenderId: "406516765916",
  appId: "1:406516765916:web:0595b482d8a2dc90919019",
  measurementId: "G-RQE153HFQ6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();