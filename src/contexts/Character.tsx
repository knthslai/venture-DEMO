import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';
import { AuthContext } from './Auth';
import { CardContext } from './Cards';
import { paths } from './Character.parts';
import { DBContext } from './DB';
import { PathContext } from './Path';

export const CharacterContext = createContext({
  selectedCharacter: {
    name: '',
    picture: '',
    classType: '',
    stats: { str: 0, dex: 0, int: 0, luk: 0 }
  },
  setSelected: (_value: number) => {}
});

export default function CharacterContextProvider({
  children
}: PropsWithChildren<{}>) {
  const { setPath } = useContext(PathContext);
  const [selectedCharacter, setSelected] = useState<any | boolean>(false);
  // const deleteCharacter = () =>{
  //   if(selectedCharacter)
  //     classType: "Mage"
  // created: 1647707158382
  // docRef: Nu {_firestore: ka, _userDataWriter: ah, _key: Pt, _document: Kt, _converter: null, …}
  // name: "Gina Lee"
  // picture: "/static/media/female5.4a753584.png"
  // updated: 1647707158382
  // }
  useEffect(() => {
    if (!selectedCharacter) setPath('pick_character');
  }, []);
  return (
    <CharacterContext.Provider
      value={{
        selectedCharacter,
        setSelected
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
