import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  StyleProps,
  UseDisclosureProps
} from '@chakra-ui/react';
import React, { ReactChildren } from 'react';

interface DrawerProps extends UseDisclosureProps {
  isOpen: boolean;
  children: ReactChildren;
  style: {};
  onSubmit: () => void;
  onClose: () => void;
  disableFooter: boolean;
  title: string;
  placement: string;
  size: string;
}

function DrawerSetup({
  isOpen,
  onClose,
  children,
  style = {},
  onSubmit,
  disableFooter = false,
  title,
  placement,
  size = 'xs'
}: DrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      placement={placement === 'right' ? 'right' : 'left'}
      onClose={onClose}
      size={size}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{title}</DrawerHeader>

        <DrawerBody padding='15px' style={style}>
          {children}
        </DrawerBody>

        {!disableFooter && (
          <DrawerFooter justifyContent='space-between'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme='blue'
              onClick={() => {
                onClose();
                if (onSubmit) onSubmit();
              }}
            >
              Save
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
export default DrawerSetup;
