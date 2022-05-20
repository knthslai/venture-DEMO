import { DBModel } from '../api/Firestore/Firestore';
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';

const Users = new DBModel('users');
const Classes = new DBModel('classes');
const Characters = new DBModel('characters');
const Cards = new DBModel('cards');
const Campaigns = new DBModel('campaigns');

export const DBContext = createContext({
  Users,
  Classes,
  Characters,
  Cards,
  Campaigns,
  cards: [],
  classes: []
});

export default function DBContextProvider({ children }: PropsWithChildren<{}>) {
  const [cards, setCards] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    Cards.sub(setCards);
    Classes.sub(setClasses);
  }, []);

  return (
    <DBContext.Provider
      value={{
        Users,
        Classes,
        Characters,
        Cards,
        Campaigns,
        cards,
        classes
      }}
    >
      {children}
    </DBContext.Provider>
  );
}
