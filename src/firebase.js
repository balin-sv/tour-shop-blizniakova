// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//hay que importar a mano
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFHW3fl5olJzVrsUveuP18eT9TqETz0oA",
  authDomain: "tour-shop-balin-sv.firebaseapp.com",
  projectId: "tour-shop-balin-sv",
  storageBucket: "tour-shop-balin-sv.appspot.com",
  messagingSenderId: "945594899899",
  appId: "1:945594899899:web:9c1e0d089987b713a2789e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
