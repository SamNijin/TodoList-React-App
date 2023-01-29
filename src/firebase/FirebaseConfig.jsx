import { getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyA_dIQyo2eiNA4mmH1Mm2N5DVU9UzC6-i8",
  authDomain: "testz-a961f.firebaseapp.com",
  projectId: "testz-a961f",
  storageBucket: "testz-a961f.appspot.com",
  messagingSenderId: "421724876614",
  appId: "1:421724876614:web:eb01bffbf186126bf13f47",
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const connectionReference = collection(db, "tasks");
