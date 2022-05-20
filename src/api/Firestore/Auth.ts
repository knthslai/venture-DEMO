import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from '../../utils/firebase';

class AuthModel {
  store: Auth;
  constructor() {
    this.store = auth;
  }
  async login({ email, password }: { email: string; password: string }) {
    return await signInWithEmailAndPassword(this.store, email, password);
  }
  async signup({ email, password }: { email: string; password: string }) {
    return await createUserWithEmailAndPassword(this.store, email, password);
  }
  async logout() {
    return signOut(this.store);
  }
}

export default new AuthModel();
