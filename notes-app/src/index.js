import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDbO6wlMenLBEkCJL-3q5aXjhkIRdqWb0U",
  authDomain: "notes-app-fa444.firebaseapp.com",
  databaseURL: "https://notes-app-fa444.firebaseio.com",
  projectId: "notes-app-fa444",
  storageBucket: "notes-app-fa444.appspot.com",
  messagingSenderId: "1092784352391",
  appId: "1:1092784352391:web:d79cf0b0b16536cd135c22",
  measurementId: "G-54Z79YVRRN"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
