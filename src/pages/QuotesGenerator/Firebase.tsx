// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9J87cOY-eUVAF9yHObAaXWA4X-8a7530",
  authDomain: "todo-app-yt-a0c1e.firebaseapp.com",
  projectId: "todo-app-yt-a0c1e",
  storageBucket: "todo-app-yt-a0c1e.appspot.com",
  messagingSenderId: "54778569277",
  appId: "1:54778569277:web:c1b95c61229e03dbf04054"
};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}