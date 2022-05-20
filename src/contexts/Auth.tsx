import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';
import { DBContext } from './DB';
import { onAuthStateChanged, User } from '@firebase/auth';
import { auth } from '../utils/firebase';

export const AuthContext = createContext({
  currentUser: { characters: [''], email: '' }
});

export default function AuthContextProvider({
  children
}: PropsWithChildren<{}>) {
  const { Users } = useContext(DBContext);
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  const onGetUser = async (result: User | null) => {
    if (result?.email) {
      const user = await Users.get(result.email);
      Users.subByKey((updatedUser) => {
        setCurrentUser(updatedUser);
      }, result.email);
      setCurrentUser(user);
    }
  };
  useEffect(() => onAuthStateChanged(auth, onGetUser), []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
