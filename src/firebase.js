
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCzEXCeQVUIy3d0tlVIs90l54aDvjuiCEQ",
  authDomain: "mygallery-62421.firebaseapp.com",
  projectId: "mygallery-62421",
  storageBucket: "mygallery-62421.appspot.com",
  messagingSenderId: "511902307885",
  appId: "1:511902307885:web:bac372c4fe1c5de3eacaa4",
  measurementId: "G-HNXWGQWXPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;