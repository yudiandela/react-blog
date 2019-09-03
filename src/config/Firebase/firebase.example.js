import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "_API_KEY_FROM_FIREBASE_CONSOLE_",
  authDomain: "_AUTH_DOMAIN_FROM_FIREBASE_CONSOLE_",
  databaseURL: "_DATABASE_URL_FROM_FIREBASE_CONSOLE_",
  projectId: "_PROJECT_ID_FROM_FIREBASE_CONSOLE_",
  storageBucket: "_STORAGE_BUCKET_FROM_FIREBASE_CONSOLE_",
  messagingSenderId: "_MESSAGING_SENDER_ID_FROM_FIREBASE_CONSOLE_",
  appId: "_APP_ID_FROM_FIREBASE_CONSOLE_"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default Firebase;
