// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgEGrq41LkPrlkDoiGp7wiZ_hUF_5q6-0",
  authDomain: "frontendgroupproject-92614.firebaseapp.com",
  projectId: "frontendgroupproject-92614",
  storageBucket: "frontendgroupproject-92614.firebasestorage.app",
  messagingSenderId: "247424375188",
  appId: "1:247424375188:web:a42be5e33d987b7d185781",
  databaseURL:
    "https://frontendgroupproject-92614-default-rtdb.firebaseio.com/",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
