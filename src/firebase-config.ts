import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBujDLqOtLr8G1mYwpfKcZt_4N-hxSN64k',
  authDomain: 'our-trip-route.firebaseapp.com',
  projectId: 'our-trip-route',
  storageBucket: 'our-trip-route.appspot.com',
  messagingSenderId: '177743503017',
  appId: '1:177743503017:web:2e57a2136338fe180253b8',
  measurementId: 'G-WNT53FL3PN',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
