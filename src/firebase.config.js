import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAMWXNHtyRIChY-iBTPe0G3p7EmChj7yyU",
  authDomain: "house-marketplace-app-41b72.firebaseapp.com",
  projectId: "house-marketplace-app-41b72",
  storageBucket: "house-marketplace-app-41b72.appspot.com",
  messagingSenderId: "345427314699",
  appId: "1:345427314699:web:8f477e083c5050594adf0e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore()