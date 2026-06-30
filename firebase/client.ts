import { initializeApp, getApps, cert, getApp } from "firebase-admin";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase-admin/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCqlXMaBhCFMa8oOA6uatRkna02hxEHQGY",
  authDomain: "robinvue.firebaseapp.com",
  projectId: "robinvue",
  storageBucket: "robinvue.firebasestorage.app",
  messagingSenderId: "113567508811",
  appId: "1:113567508811:web:d2e44630b15818311b20ce",
  measurementId: "G-7NP26PNWLY"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig): getApp();
export const auth =getAuth(app);
export const db=getFirestore(app);