import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAChm1BuS7bXfahVzdmcxD17_1qn2XXB50",
  authDomain: "fantaroccole.gend.firebaseapp.com",
  projectId: "fantaroccole.gend",
  storageBucket: "fantaroccole.gend.appspot.com",
  messagingSenderId: "554203783674",
  appId: "1:554203783674:web:3255358df177cef7608443"
};

// Inizializza Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
