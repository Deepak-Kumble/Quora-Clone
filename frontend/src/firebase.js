// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkZ65igcMbHyl92vYKuIqfq2p-l-mhcgA",
  authDomain: "quora-clone-e1a52.firebaseapp.com",
  projectId: "quora-clone-e1a52",
  storageBucket: "quora-clone-e1a52.appspot.com",
  messagingSenderId: "236403412803",
  appId: "1:236403412803:web:14b7e511b2b8287d70e9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
