import moment from 'moment';
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useRef,
  useState
} from 'react';
import { useHistory } from 'react-router-dom';
import { getBG, getMax, getScene } from '../assets';
import { backPaths } from '../screens';
export const random = getBG(Math.round((moment().hour() / 23) * getMax()));

export const SceneContext = createContext({
  isInit: false,
  bg: random.bg,
  sound: random.sound,
  mute: true,
  stage: '',
  page: '',
  isLoading: true,
  goBack: (_: string) => {},
  setPage: (_: any) => {},
  setMute: (_: boolean) => {},
  changeSound: (time: string, area: string) => {},
  setInit: (_: boolean) => {},
  randomBG: () => {}
});

export default function SceneContextProvider({
  children
}: PropsWithChildren<{}>) {
  const initScene = getScene('night', 'campfire', 1);
  const vm = useRef({ timeoutRef: 0 }).current;
  const [isInit, setInit] = useState(false);
  const [bg, setBG] = useState(initScene.bg);
  const [sound, setSound] = useState(initScene.sound);
  const [mute, setMute] = useState(true);
  const [page, setPage] = useState('');
  const [prePage, setPrePage] = useState('');
  const [stage, setStage] = useState('fadeIn');
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const transition = (func) => {
    setIsLoading(true);
    if (vm.timeoutRef) clearTimeout(vm.timeoutRef);
    setStage('fadeOut');
    vm.timeoutRef = window.setTimeout(() => {
      func();
      setStage('fadeIn');
      setIsLoading(false);
    }, 500);
  };

  const goBack = () => setPage(backPaths[page]);

  const randomBG = () => {
    const { bg, sound } = random;
    setBG(bg);
    setSound(sound);
  };

  const changeSound = (time: string, area: string) => {
    const { bg, sound } = getScene(time, area);
    setBG(bg);
    setSound(sound);
  };

  useEffect(() => {
    if (page != prePage) {
      transition(() => {
        history.push(page);
        setPrePage(page);
      });
    }
  }, [page]);

  return (
    <SceneContext.Provider
      value={{
        bg,
        sound,
        changeSound,
        mute,
        setMute,
        stage,
        page,
        setPage,
        goBack,
        isLoading,
        isInit,
        setInit,
        randomBG
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}
