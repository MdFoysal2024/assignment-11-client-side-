console.log('firebase config')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId
// };


const firebaseConfig = {
    apiKey: "AIzaSyDnEFEUpdWV_uS4emo73kE52HsuPX6DxeE",
    authDomain: "marathon-events-management.firebaseapp.com",
    projectId: "marathon-events-management",
    storageBucket: "marathon-events-management.firebasestorage.app",
    messagingSenderId: "774476073887",
    appId: "1:774476073887:web:a5c13dc0091c9fbb624baa"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);