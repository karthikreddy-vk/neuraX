// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔹 Replace with your Firebase config
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAIxg7XCiZvpyzcODGx5TP3Em_GbiGfPz0",
  authDomain: "neurax2025-87ed3.firebaseapp.com",
  projectId: "neurax2025-87ed3",
  storageBucket: "neurax2025-87ed3.firebasestorage.app",
  messagingSenderId: "985661588831",
  appId: "1:985661588831:web:a816596b8e5be30545a2ea",
  measurementId: "G-3K4055CDQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
