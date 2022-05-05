// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMOvQ6B3TVF3rvwWWoTKPwtN3JmfipSQE",
    authDomain: "fresh-spices.firebaseapp.com",
    projectId: "fresh-spices",
    storageBucket: "fresh-spices.appspot.com",
    messagingSenderId: "34851820825",
    appId: "1:34851820825:web:13f4103b4140b60cce6188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;