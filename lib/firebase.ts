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
let db: any = {};
let auth: any = {};
let storage: any = {};

try {
  // Verificação de segurança: Se não houver API Key (Build time), não inicialize para evitar erro.
  if (firebaseConfig.apiKey) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
  } else {
    console.warn("Firebase Config missing (Build Time or Missing Envs). Using mock objects.");
  }
} catch (e) {
  console.warn("Firebase initialization failed:", e);
}

export { db, auth, storage };