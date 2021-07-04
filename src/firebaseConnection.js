import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAKhX5tzI4GEv-JVFcWhOjcn1fbeQpVvao",
    authDomain: "myapp-8c227.firebaseapp.com",
    projectId: "myapp-8c227",
    storageBucket: "myapp-8c227.appspot.com",
    messagingSenderId: "1003783027289",
    appId: "1:1003783027289:web:097ca1b58fad2957f74f48",
    measurementId: "G-WM8CY02GFD"
};

if (!firebase.apps.length){
    // Initialize Firebase if not exist other connection
    firebase.initializeApp(firebaseConfig);
}
  

export default firebase;