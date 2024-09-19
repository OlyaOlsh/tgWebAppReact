import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCREPRE161tjv8YdIk339uYVKn7cgE2Eo",
    authDomain: "magicwebapp-59a70.firebaseapp.com",
    projectId: "magicwebapp-59a70",
    storageBucket: "magicwebapp-59a70.appspot.com",
    messagingSenderId: "67015774605",
    appId: "1:67015774605:web:35d2a4405b5407a872adc4",
    measurementId: "G-DMNSW19L55"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
