import { Button, Text, useDisclosure } from '@chakra-ui/react';
import { FormikHelpers } from 'formik/dist/types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../../api/Firestore/Auth';
import { Column, Form, Modal } from '../../components';
import { DBContext } from '../../contexts/DB';
import inputTypes from '../../components/Form/inputTypes';
import { SceneContext } from '../../contexts/Scene';

function Login() {
  const { setPage } = useContext(SceneContext);
  const { Users } = useContext(DBContext);
  const [error, setError] = useState('');
  const [possibleValues, setPossibleValues] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { email, password } = inputTypes;
  const handleOnSubmit = (
    values: { email: string; password: string },
    actions: FormikHelpers<{}>
  ) => {
    Auth.login(values)
      .then(() =>
        Users.update(values.email, { ...values, last_sign_in: Date.now() })
      )
      .then((user) => {
        setPage('/role');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setPossibleValues(values);
          setError(
            `New account detected! Would you like to sign up with "${values.email}"?`
          );
          onOpen();
        } else if (error.code === 'auth/wrong-password') {
          setError(`Wrong password for "${values.email}". Please try again!`);
          onOpen();
        } else if (error.code === 'auth/too-many-requests') {
          setError(
            `Access to "${values.email}" has been temporarily disabled due to many failed login attempts. Please try again later!`
          );
          onOpen();
        } else {
          console.log(
            '🚀 ~ file: Login.js ~ line 25 ~ handleOnSubmit ~ error',
            error
          );
        }
        actions.setSubmitting(false);
      });
  };

  return (
    <Column style={{ marginTop: 150 }}>
      <Form
        inputs={[email, password]}
        onSubmit={handleOnSubmit}
        buttonText={'Log in'}
      >
        <Button
          mt={4}
          width='100px'
          color='white'
          variant='ghost'
          onClick={() => setPage({ pathname: 'signup', state: possibleValues })}
        >
          Sign up
        </Button>
      </Form>
      <Modal
        isOpen={isOpen}
        title={"Let's see ..."}
        buttonText={'Sign up'}
        onClose={onClose}
        onSubmit={() => setPage({ pathname: 'signup', state: possibleValues })}
      >
        <Text>{error}</Text>
      </Modal>
    </Column>
  );
}

export default Login;
