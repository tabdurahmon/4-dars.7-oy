import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase konfiguratsiyasi
const firebaseConfig = {
  apiKey: "AIzaSyC54RdBkRXtVkjYEMmSqFeducuM4qY2dU0",
  authDomain: "my-store-8e465.firebaseapp.com",
  projectId: "my-store-8e465",
  storageBucket: "my-store-8e465.appspot.com",
  messagingSenderId: "745312645287",
  appId: "1:745312645287:web:a38edec9a926f364b82b82",
};

// Firebase ilovasini shartli ravishda ishga tushirish
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
