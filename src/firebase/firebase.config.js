// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCtO3c6pQvn0YCiPi6FuPBnBFpCVcu0d34",
	authDomain: "ema-john-simple-project-b7697.firebaseapp.com",
	projectId: "ema-john-simple-project-b7697",
	storageBucket: "ema-john-simple-project-b7697.appspot.com",
	messagingSenderId: "1052272771796",
	appId: "1:1052272771796:web:b627a0f79036c57cbab141",
	measurementId: "G-8Y0JTXPNK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;