
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA42maOyf6J0mi4_4ZkDr9M1F4GNcH-Vzg",
  authDomain: "study-app-4bf51.firebaseapp.com",
  projectId: "study-app-4bf51",
  storageBucket: "study-app-4bf51.firebasestorage.app",
  messagingSenderId: "64046004420",
  appId: "1:64046004420:web:82d2e30d88187266b7f191"
};




const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)