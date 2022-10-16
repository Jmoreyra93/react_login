// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration, debo mantenerlo seguro
// const firebaseConfig = {
//     apiKey: "AIzaSyCaBK-vidBbsl-qP_kVluth0cSiJ9WYfNA",
//     authDomain: "react-fb-auth-86680.firebaseapp.com",
//     projectId: "react-fb-auth-86680",
//     storageBucket: "react-fb-auth-86680.appspot.com",
//     messagingSenderId: "106459356339",
//     appId: "1:106459356339:web:afcb259e8b32e538af64c6"
// };

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)