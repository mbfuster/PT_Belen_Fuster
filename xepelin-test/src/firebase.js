// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC0dnPB8y8ZsnBN9_RMqTp47SOsI27uZwg",

  authDomain: "pruebatecnicaxep.firebaseapp.com",

  projectId: "pruebatecnicaxep",

  storageBucket: "pruebatecnicaxep.appspot.com",

  messagingSenderId: "1063794547882",

  appId: "1:1063794547882:web:d1151700b2a38a1886c4d3"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)