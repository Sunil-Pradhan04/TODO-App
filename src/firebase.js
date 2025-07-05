import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyBJbfvnTandsx_32UXvQL_jeufonnQrN3M",
  authDomain: "todo-app-c3008.firebaseapp.com",
  projectId: "todo-app-c3008",
  storageBucket: "todo-app-c3008.firebasestorage.app",
  messagingSenderId: "339009524936",
  appId: "1:339009524936:web:c4887ebc6dfd26537641fd",
  databaseURL : "https://todo-app-c3008-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);