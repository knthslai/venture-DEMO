import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  useNumberInput
} from '@chakra-ui/react';
import React from 'react';
import { FieldProps } from './types';

function NumberField({ field, formik, label, numberProps }: FieldProps) {
  const onChange = (e: number) => {
    formik.setFieldValue(field, e);
    formik.setTouched({ ...formik.touched, [field]: true });
  };
  const inputProps = {
    step: 1,
    defaultValue: formik.values[field] || 0,
    min: 0,
    ...numberProps
  };

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      ...inputProps,
      onChange: (valueAsString, valueAsNumber) => onChange(valueAsNumber)
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  // @ts-ignore
  const input = getInputProps();

  return (
    <FormControl id={field} alignItems='center'>
      <FormLabel htmlFor={field}>{label}</FormLabel>
      <HStack maxW='320px'>
        <Button {...inc}>+</Button>
        <Input
          {...input}
          id={field}
          style={{ background: 'white', textAlign: 'center' }}
        />
        <Button {...dec}>-</Button>
      </HStack>
    </FormControl>
  );
}

export default NumberField;
