// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD80VUVDchTmFKmt0PDWE3Hc6Uqs9Drdqo",
  authDomain: "ecommerce-store-297c4.firebaseapp.com",
  projectId: "ecommerce-store-297c4",
 
  appId: "ecommerce-store-297c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export  { auth, db };
