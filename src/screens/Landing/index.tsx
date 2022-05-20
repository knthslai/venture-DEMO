import { Column, H3 } from '../../components';
import { useHistory } from 'react-router';
import { MenuButton } from './Landing.parts';
import { SceneContext } from '../../contexts/Scene';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../../contexts/Auth';

function Landing() {
  const { setMute, setPage, setInit } = useContext(SceneContext);
  const { currentUser } = useContext(AuthContext);
  const [cookies] = useCookies(['lastScreen']);
  return (
    <Column>
      <MenuButton
        onClick={() => {
          setInit(true);
          if (process.env.NODE_ENV != 'development') setMute(false);
          setPage(currentUser ? cookies.lastScreen || '/role' : '/login');
        }}
      >
        <H3>{currentUser ? 'Return' : 'Begin'}</H3>
      </MenuButton>
    </Column>
  );
}
export default Landing;
