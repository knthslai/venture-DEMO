/* eslint-disable no-debugger */
import { Center, Flex, Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

function Fill({ ...props }) {
  return (
    <Flex h='100vh' {...props}>
      <Center
        flex='1'
        w='100%'
        maxW='100%'
        h='100vh'
        maxh='100vh'
        justifyContent='center'
        alignItems='center'
      >
        <VStack
          flex='1'
          w='100%'
          maxW='100%'
          h='100vh'
          maxh='100vh'
          justifyContent='center'
          alignItems='center'
        >
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </VStack>
      </Center>
    </Flex>
  );
}

export default Fill;
