// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCU9MU7ckjiPsxkzpTCLEdPoaOXcW213CE",
    authDomain: "collected-mobile.firebaseapp.com",
    projectId: "collected-mobile",
    storageBucket: "collected-mobile.appspot.com",
    messagingSenderId: "215470895647",
    appId: "1:215470895647:web:dffd1eb557e8f470831b2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;