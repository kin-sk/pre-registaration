import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';//認証機能のインポート
import { getFirestore } from 'firebase/firestore';//DB機能のインポート

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);//認証機能の定義
export const db = getFirestore(app);//DB機能の定義
export const collectionName = "users_learnings"; // Firestoreコレクション名