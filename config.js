// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo-MZl6j0Y_ujro3GafXX9HCwpwMmMpfc",
  authDomain: "buy-sells-corner-121.firebaseapp.com",
  projectId: "buy-sells-corner-121",
  storageBucket: "buy-sells-corner-121.appspot.com",
  messagingSenderId: "929461043239",
  appId: "1:929461043239:web:c7c4fdd46911e39906ce02",
  measurementId: "G-MV9VL53RHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 
