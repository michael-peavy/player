// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBnLLMsZnI9jVmzb-Oeh67KXoviCMt2MpE",
  authDomain: "tik-tok-clone00.firebaseapp.com",
  databaseURL: "https://tik-tok-clone00.firebaseio.com",
  projectId: "tik-tok-clone00",
  storageBucket: "tik-tok-clone00.appspot.com",
  messagingSenderId: "766004346",
  appId: "1:766004346:web:b2cf7fa9a56f20e29effc3",
  measurementId: "G-ZY6WSGB42M"
};

const firebaseApp =
 firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();

 export default db;