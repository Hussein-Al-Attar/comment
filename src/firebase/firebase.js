// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD-iV8cKpWFoBaRNnYmmEtds3nGYjlABeo",
  authDomain: "react-cf92c.firebaseapp.com",
  projectId: "react-cf92c",
  storageBucket: "react-cf92c.appspot.com",
  messagingSenderId: "639853137204",
  appId: "1:639853137204:web:55ca4157177cf753d9a961",
  measurementId: "G-Q8ZQP2QZQX",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
