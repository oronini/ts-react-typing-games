import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
const db = getFirestore(app);

export default db;
