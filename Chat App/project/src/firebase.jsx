import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByGG19bOCLI9zl3dbXE2jRwmFB44VBu8Y",
  authDomain: "balloon-chat-c99e4.firebaseapp.com",
  databaseURL: "https://balloon-chat-c99e4-default-rtdb.firebaseio.com",
  projectId: "balloon-chat-c99e4",
  storageBucket: "balloon-chat-c99e4.appspot.com",
  messagingSenderId: "509022566286",
  appId: "1:509022566286:web:b598c7cc74375b641c16df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore(app);
