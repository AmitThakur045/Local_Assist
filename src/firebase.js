import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7v5tvLS18syltgCbBvdBs3s73CStaroc",
  authDomain: "local-assist-a56d7.firebaseapp.com",
  projectId: "local-assist-a56d7",
  storageBucket: "local-assist-a56d7.appspot.com",
  messagingSenderId: "1054881707423",
  appId: "1:1054881707423:web:ecf0f3257d5d7c82f179aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;