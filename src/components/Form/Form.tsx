import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, HStack, IconButton, Stack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import React, { PropsWithChildren, ReactChildren } from 'react';
import Fields from './Fields/Fields';
import { InputType } from './inputTypes';
const getSchema = require('./schema.js');

interface FormProps extends PropsWithChildren<{}> {
  theme?: string;
  inputs: InputType[];
  buttonText?: string;
  initialValues?: {};
  style?: {};
  onSubmit?: any;
  goBack?: any;
  childrenTop?: boolean;
}

function FormikForm({
  theme,
  buttonText = 'Submit',
  initialValues = {},
  style = {},
  inputs,
  onSubmit,
  children,
  goBack,
  childrenTop
}: FormProps) {
  const validationSchema = getSchema.default(inputs);
  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: false
  });

  return (
    <form onSubmit={formik.handleSubmit} style={style}>
      {childrenTop && children}
      <Fields config={inputs} formik={formik} theme={theme} />
      <HStack
        justifyContent='space-between'
        alignItems='flex-end'
        marginTop={8}
      >
        {!!goBack && (
          <IconButton
            left='5'
            variant='outlined'
            aria-label='Back'
            onClick={goBack}
            icon={<ArrowBackIcon boxSize={7} color='white' />}
          />
        )}
        {!childrenTop && <Stack w='100%'>{children}</Stack>}
        <Button
          right='5'
          isDisabled={isEmpty(formik.values) || !isEmpty(formik.errors)}
          mt={4}
          color='white'
          isLoading={formik.isSubmitting}
          variant='outlined'
          type='submit'
          paddingLeft='6'
          paddingRight='6'
        >
          {buttonText}
        </Button>
      </HStack>
    </form>
  );
}

export default FormikForm;
