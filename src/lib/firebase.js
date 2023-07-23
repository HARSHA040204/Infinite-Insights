// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey } from "../../keys";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHeqLi7TyyDOx3lu38qvXTPo8-PTDox30",
  authDomain: "blog-website-df1f2.firebaseapp.com",
  projectId: "blog-website-df1f2",
  storageBucket: "blog-website-df1f2.appspot.com",
  messagingSenderId: "245113442335",
  appId: "1:245113442335:web:2af80c8436576f23d6052a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)