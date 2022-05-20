import { uniq } from 'lodash';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { CardContext } from './Cards';
import { DialogContext } from './Dialogue';
import * as Paths from './Path.parts';
import { AuthContext } from './Auth';
import { DBContext } from './DB';
import { tutorial } from './Path.tutorial';

export const PathContext = createContext({
  path: '',
  setPath: (_value: string, _value2?: any) => {}
});

export default function PathContextProvider({
  children
}: PropsWithChildren<{}>) {
  const vm = useRef({ payload: '' }).current;
  const [path, setThePath] = useState('pick_character');
  const { messages, setMessages, clearMessages } = useContext(DialogContext);
  const { setCards } = useContext(CardContext);
  const { Users, Characters, Classes } = useContext(DBContext);
  const { currentUser } = useContext(AuthContext);
  const setPath = (strPath, payload) => {
    setThePath(strPath);
    vm.payload = payload;
  };
  const references = {
    vm,
    setCards,
    messages,
    setMessages,
    clearMessages,
    setThePath,
    setPath,
    Users,
    Characters,
    Classes,
    currentUser
  };

  const insertMessages = (newMessages: any[]) =>
    setMessages(uniq([...messages, ...newMessages]));
  const getPath = (parent, sub) => Paths[parent](sub, references);

  useEffect(() => {
    const [mainPath, subPath] = path.split(':');
    switch (mainPath) {
      case 'create_character':
      case 'tutorial':
        getPath(mainPath, subPath);
        break;
      case 'selected_character':
        //TODO: start lobby sync
        insertMessages([vm.payload]);
        break;
      default:
    }
  }, [path]);
  return (
    <PathContext.Provider value={{ path, setPath }}>
      {children}
    </PathContext.Provider>
  );
}
