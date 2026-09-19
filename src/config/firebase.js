import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhs1DCykxCPrGNnoxBFt8DXkceSXARCVM",
  authDomain: "mauryavatralay.firebaseapp.com",
  projectId: "mauryavatralay",
  storageBucket: "mauryavatralay.firebasestorage.app",
  messagingSenderId: "631346324034",
  appId: "1:631346324034:web:989ab3ff13fae31d22c3db",
  measurementId: "G-JZ1D04NYR3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Authentication and Firestore Database
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics conditionally (safely works in browser)
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Analytics not supported or blocked (e.g., ad blocker)
  });
}

export default app;
