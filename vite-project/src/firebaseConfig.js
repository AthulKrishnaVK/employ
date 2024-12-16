// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase config values, found in the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAG-PeaIAmvqBafnd2He3MnyuTRuXuCViA",
  authDomain: "employ-2fba7.firebaseapp.com",
  projectId: "employ-2fba7",
  storageBucket: "employ-2fba7.firebasestorage.app",
  messagingSenderId: "814195722214",
  appId: "1:814195722214:web:606b423a99a6f0940f7827",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
