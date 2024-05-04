// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSY4Dug6lewZXmFHEmShS5tVFc_4RnFu8",
  authDomain: "internprojectauth.firebaseapp.com",
  projectId: "internprojectauth",
  storageBucket: "internprojectauth.appspot.com",
  messagingSenderId: "169686468874",
  appId: "1:169686468874:web:2e0f858ef7d5af25dfd2f3",
  measurementId: "G-2WB74GBYWH"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage(app);
  

const analytics = getAnalytics(app);

export {auth, storage};