import { getFirestore, collection } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// export const firebaseConfig = {
//     apiKey: "AIzaSyAImdjoRpL-b_MjGt0XFA-4H7kJ3sOBgZM",
//     authDomain: "react-todo-5d37c.firebaseapp.com",
//     projectId: "react-todo-5d37c",
//     storageBucket: "react-todo-5d37c.appspot.com",
//     messagingSenderId: "431368859509",
//     appId: "1:431368859509:web:f14f9c795f670146c26d3c"
// };

export const firebaseConfig = {
    apiKey: "AIzaSyA_dIQyo2eiNA4mmH1Mm2N5DVU9UzC6-i8",
    authDomain: "testz-a961f.firebaseapp.com",
    projectId: "testz-a961f",
    storageBucket: "testz-a961f.appspot.com",
    messagingSenderId: "421724876614",
    appId: "1:421724876614:web:eb01bffbf186126bf13f47"
};

initializeApp(firebaseConfig);

export const db = getFirestore()

export const connectionReference = collection(db, 'tasks')