const firebase = require('firebase');
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBoU0uW4wDP3Az5VjRASsczZr5eTT0fjw",
  authDomain: "pinbird-server.firebaseapp.com",
  projectId: "pinbird-server",
  storageBucket: "pinbird-server.appspot.com",
  messagingSenderId: "211602254417",
  appId: "1:211602254417:web:49887d4566a0350c3ca670",
  measurementId: "G-DS9KYM8NDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app