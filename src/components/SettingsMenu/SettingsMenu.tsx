import { MenuListProps } from '@chakra-ui/menu';
import { propNames } from '@chakra-ui/styled-system';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from '..';
import Auth from '../../api/Firestore/Auth';

function SettingsMenuSetup(props: MenuListProps) {
  const history = useHistory();

  const onExit = () => {
    Auth.logout().then(() => history.push('/login'));
  };

  return (
    <Menu
      options={[
        {
          label: 'Sign out',
          onPress: onExit
        }
      ]}
    />
  );
}
export default SettingsMenuSetup;
