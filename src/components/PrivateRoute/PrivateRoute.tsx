import { Fill } from '../../components';
import { AuthContext } from '../../contexts/Auth';
import { useContext, useEffect, useState } from 'react';
import { Route, RouteProps, useHistory, useLocation } from 'react-router-dom';
import { SceneContext } from '../../contexts/Scene';
import { useCookies } from 'react-cookie';

interface PrivateRouteProps extends RouteProps {
  noAuth?: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const [shouldLoad, setLoad] = useState(false);
  const { isInit } = useContext(SceneContext);
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const check = () => {
    if (isInit) {
      if (!props.noAuth && currentUser) {
        setLoad(true);
      } else {
        history.push('/login');
      }
    } else {
      history.push('/');
    }
  };

  useEffect(check, [currentUser, isInit]);

  return (
    <Route
      {...props}
      render={() => (shouldLoad ? props.component : <Fill loading={true} />)}
    />
  );
};

export default PrivateRoute;
