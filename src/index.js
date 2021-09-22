import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Material UI
import '@fontsource/roboto';

//firebase
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyASnE6ma5bDVcUBiYJCcw8kUXtqW1MVsXc",
  authDomain: "authentication-purple.firebaseapp.com",
  projectId: "authentication-purple",
  storageBucket: "authentication-purple.appspot.com",
  messagingSenderId: "998079665490",
  appId: "1:998079665490:web:8aca58b05c4900b2fb168b",
  measurementId: "G-YXNGLNZYPZ"
};

// Initialize Firebase
if(!firebase.apps[0]){
firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export{storage, firebase as default};