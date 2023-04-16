// todo-with-next13

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA4hbEL5jEPODdpKL8FEOi8JLckbEoEr2c",
  authDomain: "todo-with-next13.firebaseapp.com",
  projectId: "todo-with-next13",
  storageBucket: "todo-with-next13.appspot.com",
  messagingSenderId: "837246299966",
  appId: "1:837246299966:web:6b6c48d8a70f577c7b466f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const initfirebase = () => app;
