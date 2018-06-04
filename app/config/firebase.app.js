
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAgXAB_2wc5beE_cElHktaAP1kfVgpBViA",
    authDomain: "flyer-c44ba.firebaseapp.com",
    databaseURL: "https://flyer-c44ba.firebaseio.com",
    projectId: "flyer-c44ba",
    storageBucket: "flyer-c44ba.appspot.com",
    messagingSenderId: "452858331704"
};

firebase.initializeApp(config);

export default firebase;
