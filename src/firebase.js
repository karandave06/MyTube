// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWxo6HoqMP00zSt0DVQXeUF_CGHXTfyg8",
  authDomain: "mytube-5d826.firebaseapp.com",
  projectId: "mytube-5d826",
  storageBucket: "mytube-5d826.appspot.com",
  messagingSenderId: "106970009466",
  appId: "1:106970009466:web:44be3fe26f3f3dace1d0c3",
  measurementId: "G-NY38RDXQ21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
