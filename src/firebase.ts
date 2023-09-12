import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCinOzAIkGDDQDAFaeE_-niQSBHGwHczeU",
  authDomain: "nwitter-6bec6.firebaseapp.com",
  projectId: "nwitter-6bec6",
  storageBucket: "nwitter-6bec6.appspot.com",
  messagingSenderId: "881432177546",
  appId: "1:881432177546:web:809fbb8b3079dff8557673",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
