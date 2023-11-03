// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCL2fbXYcxtC0d2w7gi9vWV6DpYELq-XyQ',
  authDomain: 'ris-evm-3o.firebaseapp.com',
  databaseURL: 'https://ris-evm-3o-default-rtdb.firebaseio.com',
  projectId: 'ris-evm-3o',
  storageBucket: 'ris-evm-3o.appspot.com',
  messagingSenderId: '872752607060',
  appId: '1:872752607060:web:5b0b2577106be924e562c1',
  measurementId: 'G-XC4D8EN7DV',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
