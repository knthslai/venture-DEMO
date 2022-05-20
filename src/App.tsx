import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Title, PrivateRoute } from './components';
import { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router-dom';
import {
  LandingScreen,
  LoginScreen,
  pageList,
  PlayerScreen,
  RoleScreen,
  SignupScreen
} from './screens';
import './styles.css';
import { Scene, Transition } from './App.parts';
import AuthContextProvider from './contexts/Auth';
import DBContextProvider from './contexts/DB';
import ResizeContextProvider from './contexts/Resize';
import SceneContextProvider, { SceneContext } from './contexts/Scene';
import { PlayerProviders } from './screens/Player/Player.parts';

function Routes() {
  const { randomBG } = useContext(SceneContext);
  const location = useLocation();
  const [, setCookie] = useCookies(['lastScreen']);

  useEffect(() => {
    if (pageList.includes(location.pathname))
      setCookie('lastScreen', location.pathname, { path: '/' });
    // TODO: remove when scene subscribes to master scene changes
    if (!['/', '/login', '/signup'].includes(location.pathname)) randomBG();
  }, [location]);

  return (
    <Scene>
      {['/', '/login', '/signup'].includes(location.pathname) && <Title />}
      <Transition>
        <Switch>
          <Route path='/' exact component={LandingScreen} />
          <PrivateRoute path='/login' noAuth component={LoginScreen} />
          <PrivateRoute path='/signup' component={SignupScreen} />
          <PrivateRoute path='/role' component={RoleScreen} />
          <PlayerProviders>
            <PrivateRoute path='/player' component={PlayerScreen} />
          </PlayerProviders>
          <Redirect from='*' to='/' />
        </Switch>
      </Transition>
    </Scene>
  );
}

const theme = extendTheme({
  fonts: {
    heading: 'Cabin, sans-serif',
    body: 'Cabin, sans-serif'
  }
});

function App() {
  return (
    <Router>
      <CookiesProvider>
        <ChakraProvider theme={theme}>
          <DBContextProvider>
            <AuthContextProvider>
              <SceneContextProvider>
                <ResizeContextProvider>
                  <Routes />
                </ResizeContextProvider>
              </SceneContextProvider>
            </AuthContextProvider>
          </DBContextProvider>
        </ChakraProvider>
      </CookiesProvider>
    </Router>
  );
}

export default App;
