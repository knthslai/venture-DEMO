import { Text, useDisclosure } from '@chakra-ui/react';
import Auth from '../api/Firestore/Auth';
import inputTypes from '../components/Form/inputTypes';
import { DBContext } from '../contexts/DB';
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Column, Form, Modal } from '../components';
import { FormikHelpers } from 'formik';
import { SceneContext } from '../contexts/Scene';
type locationStateProps = {
  state: {};
};
function Signup() {
  const { setPage } = useContext(SceneContext);
  const { confirmPassword, email } = inputTypes;
  const { Users } = useContext(DBContext);
  const [isError, setIsError] = useState('Test');
  const location: locationStateProps = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure({});
  const goBack = () => setPage('/login');
  const handleOnSubmit = (
    values: { email: string; password: string; role: string },
    actions: FormikHelpers<{}>
  ) => {
    Auth.signup(values)
      .then(() => {
        return Users.create(values.email, values)
          .then(() => setPage('/role'))
          .catch((e) => e);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setIsError('Email in use. Please sign up with another email.');
          onOpen();
        } else {
          console.log(
            '🚀 ~ file: index.js ~ line 23 ~ handleOnSubmit ~ error',
            error
          );
        }
        actions.setSubmitting(false);
      });
  };

  return (
    <Column style={{ marginTop: 150 }}>
      <Form
        goBack={goBack}
        initialValues={{ ...location.state, role: 'Regular' }}
        inputs={[email, confirmPassword]}
        buttonText={'Sign up'}
        onSubmit={handleOnSubmit}
      />
      <Modal isOpen={isOpen} title={"Let's see ..."} onClose={onClose}>
        <Text>{isError}</Text>
      </Modal>
    </Column>
  );
}

export default Signup;
