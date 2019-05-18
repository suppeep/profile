import firebase from 'firebase/app';

// firebase init
// set your own firebase config inside
var config = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: 'master-doomxii.firebaseapp.com',
  databaseURL: 'https://master-doomxii.firebaseio.com',
  projectId: 'master-doomxii',
  storageBucket: 'master-doomxii.appspot.com',
  messagingSenderId: process.env.VUE_APP_MESSAGE_ID,
  appId: process.env.VUE_APP_APP_ID,
};
firebase.initializeApp (config);
