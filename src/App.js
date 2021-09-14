import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import Currency from './Components/Currency';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  var provider = new firebase.auth.GoogleAuthProvider();

  const [user,setUser] = useState(null);


  useEffect(()=>{
    //Firebase Auth State Observer
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log(`user has signed in with user id: ${uid}`);
        setUser(uid);
      } else {
        // User is signed out
        console.log('user is not signed in');
        setUser(null);
      }
    });

  },[])

  function signInWithGooglePopUp(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log('user has signed in successfuly');
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(`error accured during sign in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`);
    });
  };

  const showComponent=()=>{
        if (user) {
          // User is signed in.
          return(<Currency/>)
        } else {
          // No user is signed in.
          return(<h3 style={{textAlign:'center'}}>Please sign in with your google account</h3>)
        }
    
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            Or Arbel
          </Typography>
          {user? (
          
            <Button color="inherit" onClick={()=>{
              firebase.auth().signOut()
              .then(()=>{
                console.log('user has signed out seccessfully');
              })
              .catch((err)=>{
                console.log(`error signing out: ${err}`);
              })
            }}>Sign Out</Button>
          ) : (
            <Button color="inherit" onClick={()=>{signInWithGooglePopUp()}}>Sign In with Google</Button>
          )}
        </Toolbar>
      </AppBar>
    
      {showComponent()}
    </div>
    
  );
}
