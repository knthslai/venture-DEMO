import {
  connectAuthEmulator,
  getAuth,
  setPersistence,
  browserSessionPersistence
} from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import ProdConfig from './ProdConfig.json';

const firebaseApp = initializeApp(ProdConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore();
if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8080);
}
setPersistence(auth, browserSessionPersistence).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
});
