import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Helper to avoid crashes if envs are missing in preview
const getEnv = (key: string) => (typeof process !== 'undefined' && process.env ? process.env[key] : '');

const firebaseConfig = {
  apiKey: getEnv('NEXT_PUBLIC_FIREBASE_API_KEY'),
  authDomain: getEnv('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnv('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
  storageBucket: getEnv('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnv('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnv('NEXT_PUBLIC_FIREBASE_APP_ID'),
};

// Initialize Firebase only if it hasn't been initialized and config is present
let app;
try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
} catch (e) {
  console.warn("Firebase not initialized: Missing config");
  // Create a dummy app object if init fails to prevent crashes in dependent components
  // Real implementation would handle this better, but for portfolio preview this is sufficient
}

export const db = app ? getFirestore(app) : {} as any;
export const auth = app ? getAuth(app) : {} as any;
export const storage = app ? getStorage(app) : {} as any;