import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9RYskEaI4ur4ZGobZ7mhnXb3unqWd4Mk",
  authDomain: "netflix-gpt-2893b.firebaseapp.com",
  projectId: "netflix-gpt-2893b",
  storageBucket: "netflix-gpt-2893b.firebasestorage.app",
  messagingSenderId: "619041739309",
  appId: "1:619041739309:web:f71e1a089036cac5845ea4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
