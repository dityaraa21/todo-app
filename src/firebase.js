// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNvQ_Vh0-kOrDOL2IWAgvfWjWMjx_SthY",
  authDomain: "todo-app-33d6d.firebaseapp.com",
  projectId: "todo-app-33d6d",
  storageBucket: "todo-app-33d6d.appspot.com",
  messagingSenderId: "1052280039988",
  appId: "1:1052280039988:web:6398c485374fe3f85cb861",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
