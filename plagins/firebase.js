// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBqUITREj0W6OagyaOWmB3y3YQhimpAKXg',
  authDomain: 'typing-games-ts.firebaseapp.com',
  databaseURL: 'https://typing-games-ts-default-rtdb.firebaseio.com',
  projectId: 'typing-games-ts',
  storageBucket: 'typing-games-ts.appspot.com',
  messagingSenderId: '773627096085',
  appId: '1:773627096085:web:031284ff2b4d9546af321c',
  measurementId: 'G-7CKKXJJ9GS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
