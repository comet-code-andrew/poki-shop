// It is good practice to place code that interacts with API's inside their own folder/file structure. This way
// we can deal with the nuances of this API in a "contained" way.

/*
Firestore data model
- Document: represents the smallest unit, defines the data types the document has.
- Collection: 1 or more Documents.

Firestore important notes
- In order to use we must create a DB
- In the admin console, there is a "rules" page that must be configured
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if true;
  ...

*/

// InitializeApp is mandatory to leverage firebase features
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration - copies over from the firebase/app remember we also must activate Google auth
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzt1S1MbJZcx7ulIADE7pRuiW61Yt-K68",
  authDomain: "comet-wares.firebaseapp.com",
  projectId: "comet-wares",
  storageBucket: "comet-wares.appspot.com",
  messagingSenderId: "102982826754",
  appId: "1:102982826754:web:71fb93fa14261d75bae01b",
  measurementId: "G-JWBBF7QM00"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


// These are particular to google authentication, no real high level thing to learn here it's just how Google wants it
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

// Generally you have a single authenticator for an application
export const auth = getAuth();
// but can have many providers, here we only create a single one with google, yahoo, email etc;
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// db is a singletone instance
export const db = getFirestore();

// In this function we want to take the authentication data from google and store it into our db
export const createUserDocumentFromAuth = async (userAuth) => {
  // UserDocRef is a Firebase object that return something even if the user DNE
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef)

  // userSnapshop is a special object we can use to check if this Firebase document exists
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)

  // 1. Check if the user exists
  if(!userSnapshot.exists()) {

    // 1a. If it DNE, destructure some values off the very early userAuth object
    const { displayName, email } = userAuth;
    // 1a. Create a new date object so we can save when our users are logging in
    const createdAt = new Date();

    // 1a. Attempt to store this into the Firestore
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch ( error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
  // We want to first check if the user data exists

  // If doesnt exist create/set the document with the data from userAuth from collection

  // If it does, return the userdata
}

