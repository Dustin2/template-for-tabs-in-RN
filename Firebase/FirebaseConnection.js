// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWgX-sWcTfKJVuxq8zAXZT8Yj5nI1SHzU",
    authDomain: "betafirebase-a9062.firebaseapp.com",
    databaseURL: "https://betafirebase-a9062.firebaseio.com",
    projectId: "betafirebase-a9062",
    storageBucket: "betafirebase-a9062.appspot.com",
    messagingSenderId: "204012253230",
    appId: "1:204012253230:web:eb79c395b4cb8940f3afbf"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };