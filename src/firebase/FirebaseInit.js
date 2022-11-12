import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
  apiKey: "AIzaSyChpqvN5Fmp_BgzANBqU_MvcSGTJWmGyB4",
  authDomain: "instagram-tribute.firebaseapp.com",
  projectId: "instagram-tribute",
  storageBucket: "instagram-tribute.appspot.com",
  messagingSenderId: "871713787286",
  appId: "1:871713787286:web:bf1362406b70ff2dcde1b7",
  measurementId: "G-E9D04RVP2P",
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };