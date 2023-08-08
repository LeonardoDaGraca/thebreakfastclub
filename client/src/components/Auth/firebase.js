// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdbb72BDjGG-cFMlIn99N7LcAx-nJzO1I",
  authDomain: "tbchealth-45b21.firebaseapp.com",
  projectId: "tbchealth-45b21",
  storageBucket: "tbchealth-45b21.appspot.com",
  messagingSenderId: "1047147879162",
  appId: "1:1047147879162:web:ef04ccdbbf575909c4c743"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app