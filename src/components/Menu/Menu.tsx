import { HamburgerIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import React from 'react';

export interface MenuSetupItem {
  label: string;
  onPress: () => void;
}

interface MenuProps {
  options: MenuSetupItem[];
}

function MenuSetup({ options }: MenuProps) {
  return (
    <Menu>
      <MenuButton
        alignSelf='start'
        as={IconButton}
        aria-label='Menu'
        icon={<HamburgerIcon boxSize={6} color='teal' />}
        variant='unstyled'
      />
      <MenuList>
        {options.map(({ label, onPress }) => (
          <MenuItem key={label} onClick={onPress}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
export default MenuSetup;
