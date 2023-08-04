import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZFXxhVrx2gJUgA6mTgAG_Yfuh4mHLvx0",
  authDomain: "preentrega1-escarategabriel.firebaseapp.com",
  projectId: "preentrega1-escarategabriel",
  storageBucket: "preentrega1-escarategabriel.appspot.com",
  messagingSenderId: "505370131500",
  appId: "1:505370131500:web:b84fb534e8e32dc5b26589"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
