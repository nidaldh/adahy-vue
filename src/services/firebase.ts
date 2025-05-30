import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getDatabase, type Database } from 'firebase/database'
import { getAnalytics, type Analytics } from 'firebase/analytics' // Optional

// Use environment variables for Firebase config
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID // Optional
};

let app: FirebaseApp;
let auth: Auth;
let database: Database;
let analytics: Analytics | undefined; // Optional

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  database = getDatabase(app);
  if (firebaseConfig.measurementId) {
      analytics = getAnalytics(app);
  }
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
  // Handle initialization error, perhaps fallback or notify user
  throw error; // Re-throw to signal failure
}

export { app, auth, database, analytics };
