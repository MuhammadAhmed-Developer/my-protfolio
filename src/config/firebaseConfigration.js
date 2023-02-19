// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKRO1eYpL9R__TacBX1A-nFIy1i6pn-os",
  authDomain: "muhammad--ahmed.firebaseapp.com",
  projectId: "muhammad--ahmed",
  storageBucket: "muhammad--ahmed.appspot.com",
  messagingSenderId: "740829257341",
  appId: "1:740829257341:web:ac21920dfe15cb430bdb14",
  measurementId: "G-K878BHSG6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);