// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBRiIt8NUwkFMNZSsoC9LP5aRMy_g0DK4Y',
  authDomain: 'wangkraft-b669e.firebaseapp.com',
  projectId: 'wangkraft-b669e',
  storageBucket: 'wangkraft-b669e.appspot.com',
  messagingSenderId: '433844910322',
  appId: '1:433844910322:web:b4fa2ef45ab01b12a4786b',
  measurementId: 'G-R5QV0JRWG1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default app;
