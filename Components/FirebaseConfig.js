import firebase from '@firebase/app';
import '@firebase/auth'
var config = {
    apiKey: "AIzaSyBq-w25819TljmhQk4WbM2uWnawS3wa_bA",
    authDomain: "travelui-c4e02.firebaseapp.com",
    databaseURL: "https://travelui-c4e02.firebaseio.com",
    projectId: "travelui-c4e02",
    storageBucket: "travelui-c4e02.appspot.com",
    messagingSenderId: "321489825166"
  };
export const firebaseApp = firebase.initializeApp(config);