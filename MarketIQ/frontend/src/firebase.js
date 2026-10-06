import { initializeApp } from "firebase/app";
// MUKKIYAM: Google Login-ku thevayana modules
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

// Unga real Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX8HDQ3LGi-vGObI9nJwysob8oXSmaHXg",
  authDomain: "market-iq-27647.firebaseapp.com",
  projectId: "market-iq-27647",
  storageBucket: "market-iq-27647.firebasestorage.app",
  messagingSenderId: "893027553506",
  appId: "1:893027553506:web:5f8c420fa12aab1d4d8ebb",
  measurementId: "G-6EMVS6HN02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth & Google Provider (Ithu thaan export aagi AuthModal-ku pogum)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();