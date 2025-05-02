// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7VL1iGenhX93sR7aYFETpNpwz9PrZvjQ",
    authDomain: "hospitalveterinariopatitas.firebaseapp.com",
    projectId: "hospitalveterinariopatitas",
    storageBucket: "hospitalveterinariopatitas.firebasestorage.app",
    messagingSenderId: "673048907068",
    appId: "1:673048907068:web:6e1122c0d753765ecaa239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth = getAuth();
export { db, auth };
