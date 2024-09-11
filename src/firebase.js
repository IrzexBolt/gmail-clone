import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB7mBCp7IAsjMHi45Wv4RVIWlaMbJsbF4",
  authDomain: "clone-yt-c6b9e.firebaseapp.com",
  projectId: "clone-yt-c6b9e",
  storageBucket: "clone-yt-c6b9e.appspot.com",
  messagingSenderId: "1069921680327",
  appId: "1:1069921680327:web:f9107e288d06614c4b77e2",
  measurementId: "G-D96XWEVNJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
