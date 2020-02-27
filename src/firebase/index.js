import firebase from "firebase/app";

// firebase init
// set your own firebase config inside
var config = {
    apiKey: process.env.VUE_APP_FIREBASE_KEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_DATABASEURL,
    projectId: process.env.VUE_APP_PROJECTID,
    storageBucket: process.env.VUE_APP_STOREAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGE_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENTID
};
firebase.initializeApp(config);
// firebase.analytics();