// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = { 
  apiKey : "AIzaSyD6CPfy68rR0c-8wbuGms_l9KMSaG0fzPk" , 
  authDomain : "baith4-cb5da.firebaseapp.com" , 
  projectId : "baith4-cb5da" , 
  storageBucket : "baith4-cb5da.firebasestorage.app" , 
  messagingSenderId : "521448441052" , 
  appId : "1:521448441052:web:cf553647ba46c591d8a019" , 
  measurementId : "G-WH9FZR4Y37" 
};

let app, auth;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    console.log('Error initializing app: ' + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
}

export { 
  app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile
};