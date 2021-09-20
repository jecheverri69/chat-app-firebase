import * as firebase from 'firebase';
import '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBBgwVt1QR0sm8ijrfZ-s4zGDxtgsuHuoo",
    authDomain: "chat-app2-e4df3.firebaseapp.com",
    projectId: "chat-app2-e4df3",
    storageBucket: "chat-app2-e4df3.appspot.com",
    messagingSenderId: "839355566884",
    appId: "1:839355566884:web:79b6f60a5bcfe9c69581b1"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
