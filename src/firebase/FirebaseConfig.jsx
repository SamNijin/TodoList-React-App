import { getFirestore, collection } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyAImdjoRpL-b_MjGt0XFA-4H7kJ3sOBgZM",
    authDomain: "react-todo-5d37c.firebaseapp.com",
    projectId: "react-todo-5d37c",
    storageBucket: "react-todo-5d37c.appspot.com",
    messagingSenderId: "431368859509",
    appId: "1:431368859509:web:f14f9c795f670146c26d3c"
};

initializeApp(firebaseConfig);

export const db = getFirestore()

export const connectionReference = collection(db, 'tasklist')