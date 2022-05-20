import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import React, { PropsWithChildren, ReactElement } from 'react';

interface ModalSetupProps extends PropsWithChildren<{}> {
  title?: string;
  buttonText?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

function ModalSetup({
  children,
  title,
  buttonText = 'Got it',
  isOpen,
  onClose,
  onSubmit
}: ModalSetupProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          {buttonText !== 'Got it' && (
            <Button
              variant='ghost'
              onClick={onClose}
              style={{ marginRight: 20 }}
            >
              Close
            </Button>
          )}
          <Button
            colorScheme='blue'
            mr={3}
            onClick={() => {
              onClose();
              if (onSubmit) onSubmit();
            }}
          >
            {buttonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default ModalSetup;
